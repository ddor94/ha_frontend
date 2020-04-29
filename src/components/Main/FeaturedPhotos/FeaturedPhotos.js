import React from 'react';
import PhotoThumb from '../PhotoThumb/PhotoThumb';

function FeaturedPhotos() {
  return (
    <div>
      <h2 className="title">
        Trabalhos em destaque
      </h2>

      <div className="columns is-multiline is-variable is-1">
        <div className="column is-one-quarter">
          <PhotoThumb />
        </div>
        <div className="column is-one-quarter">
          <PhotoThumb />
        </div>
        <div className="column is-one-quarter">
          <PhotoThumb />
        </div>
        <div className="column is-one-quarter">
          <PhotoThumb />
        </div>
      </div>
    </div>
  );
}

export default FeaturedPhotos;
