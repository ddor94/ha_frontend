import React from 'react';
import ListArtists from '../ListArtists/ListArtists';

import banner from '../../../images/banner-1.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { useQuery } from '@apollo/react-hooks';
import { getArtists } from '../../../utils/apiCalls';

function RenderArtists() {
  const { loading, error, data, fetchMore } = useQuery(getArtists, {
    variables: { piercing: true }
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

class BodyPiercers extends React.Component {
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
                    Busque body piercers em qualquer lugar do Brasil
                  </h1>

                  <form className="form">
                    <div className="field">
                      <p className="control has-icons-left form__control">
                        <input className="input is-medium form__input form__input--borderless" type="name" placeholder="Cidade desejada..." />
                        <span className="icon is-small is-left form__icon">
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
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
              Body Piercers em <span className="has-text-primary">todo o Brasil</span>
            </h2>

            <div className="columns is-multiline">
              <RenderArtists />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BodyPiercers;
