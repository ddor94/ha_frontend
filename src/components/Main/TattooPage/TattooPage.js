import React from 'react';
import ListArtists from '../ListArtists/ListArtists';

import banner from '../../../images/banner-1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faAnchor } from '@fortawesome/free-solid-svg-icons';

import { useQuery } from '@apollo/react-hooks';
import { getArtists, getStyles } from '../../../utils/apiCalls';

function RenderArtists() {
  const { loading, error, data, fetchMore } = useQuery(getArtists, {
    variables: { tattoo: true }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ListArtists
      artists={data.artists || []}
      onLoadMore={() =>
        fetchMore({
          variables: {
            offset: data.artists.length
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return Object.assign({}, prev, {
              artists: [...prev.artists, ...fetchMoreResult.artists.filter(n => !prev.artists.some(p => p.id === n.id))]
            });
          }
        })
      }
    />
  )
};

function RenderStyles({ handleChangeStyle }) {
  const { loading, error, data } = useQuery(getStyles);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error :(</span>;

  return (
    <select className="form__input form__input--borderless" onChange={handleChangeStyle}>
      <option>Todos os estilos</option>
      {
        data.styles.map(style => {
          return <option key={style.id} value={style.name}>{style.name}</option>
        })
      }
    </select>
  )
}

class TattooPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: "Todos os estilos"
    }
  }

  handleChangeStyle = ({ target }) => {
    this.setState({
      selectedStyle: target.value
    })
  }

  render() {
    return (
      <>
        <div className="top">
          <div className="top__body">
            <figure className="image">
              <img src={banner} alt="Placeholder" />
            </figure>

            <div className="is-flex top__content">
              <div className="container is-fluid">
                <div className="top__wrap">
                  <h1 className="title has-text-white is-size-1">
                    Busque tatuadores em qualquer lugar do Brasil
                  </h1>

                  <form className="form">
                    <div className="field has-addons">
                      <p className="control has-icons-left is-expanded form__control">
                        <input className="input is-medium form__input form__input--borderless" type="name" placeholder="Cidade desejada..." />
                        <span className="icon is-small is-left form__icon">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </span>
                      </p>

                      <p className="control has-icons-left form__control">
                        <span className="select is-medium">
                          <RenderStyles
                            handleChangeStyle={this.handleChangeStyle}/>
                        </span>

                        <span className="icon is-small is-left form__icon">
                          <FontAwesomeIcon icon={faAnchor} />
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container is-fluid">
          <div className="section">
            <h2 className="title has-text-weight-light">
              Tatuadores em <span className="has-text-primary">todo o Brasil</span>
            </h2>

            <p className="subtitle has-text-weight-light">
              <span className="tag is-primary is-medium">
                <FontAwesomeIcon icon={faAnchor} />

                <span>
                  {this.state.selectedStyle}
                </span>
              </span>
            </p>

            <div className="columns is-multiline">
              <RenderArtists />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TattooPage;
