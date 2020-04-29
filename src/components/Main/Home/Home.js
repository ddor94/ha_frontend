import React from 'react';
import HomeSearch from '../HomeSearch/HomeSearch';
import FeaturedArtists from '../FeaturedArtists/FeaturedArtists';
import FeaturedPhotos from '../FeaturedPhotos/FeaturedPhotos';
import NextEvents from '../NextEvents/NextEvents';
import banner from '../../../images/banner-1.jpg';

function Home() {
  return (
    <>
      <div className="top">
        <div className="top__body">
          <figure className="image">
            <img src={banner} alt="Placeholder" />
          </figure>
        </div>
      </div>

      <div className="container is-fluid">
        <div className="section">
          <HomeSearch />
        </div>

        <div className="section">
          <FeaturedArtists />
        </div>

        <div className="section">
          <FeaturedPhotos />
        </div>

        <div className="section">
          <NextEvents />
        </div>
      </div>
    </>
  );
}

export default Home;
