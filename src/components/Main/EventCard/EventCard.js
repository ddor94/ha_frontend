import React from 'react';

import { Link } from "react-router-dom";

function EventCard() {
  return (
    <Link to="/" className="event-card is-block">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by5">
            <img src="https://res-4.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,f_auto,w_800/v1545922157/event-poster-9993752.jpg" alt="Placeholder" />
          </figure>
        </div>

        <div className="has-background-primary has-text-centered has-text-white is-size-3">
          12 • FEV
        </div>

        <div className="card-content is-paddingless">
          <div className="event-card__column">
            <p className="title event-card__title is-size-5 has-text-weight-light">
              Evento em Porto Alegre
            </p>

            <p className="subtitle is-size-6">
              Centro de eventos - Canela/RS
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
