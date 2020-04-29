import React from 'react';

import { Link } from "react-router-dom";

function ArtistCard({ artist }) {
  return (
    <Link to="/artistas/ddor" className="artist-card is-block">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title artist-card__title is-4">{artist.name}</p>
              <p className="subtitle is-6">Canela/RS</p>
            </div>
          </div>

          <div className="content">
            {artist.about}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ArtistCard;
