import React from 'react';

import { Link } from "react-router-dom";

function PhotoThumb() {
  return (
    <Link to="/" className="photo-card is-block">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
        </figure>

        <figcaption className="photo-card__caption is-flex has-text-white">
          <div className="content">
            <span className="is-block">
              by
            </span>

            <span>
              John Smith
            </span>
          </div>
        </figcaption>
      </div>
    </Link>
  );
}

export default PhotoThumb;
