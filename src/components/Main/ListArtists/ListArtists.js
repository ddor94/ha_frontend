import React from 'react';
import ArtistCard from '../ArtistCard/ArtistCard';

class ListArtists extends React.Component {
  handleScroll = () => {
    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    var scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    var clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      this.props.onLoadMore();
    }
  };

  componentDidMount() {
    if (!this.props.featured) {
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    if (!this.props.featured) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  render() {
    return (
      <div className="columns is-multiline">
        {
          this.props.artists.map(artist => (
            <div className="column is-one-quarter" key={artist.id}>
              <ArtistCard
                artist={artist}
              />
            </div>
          ))
        }
      </div>
    );
  }
}

export default ListArtists;
