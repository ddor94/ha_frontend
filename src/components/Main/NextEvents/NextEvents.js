import React from 'react';
import EventCard from '../EventCard/EventCard';

function NextEvents() {
  return (
    <div>
      <h2 className="title has-text-weight-light">
        Próximos eventos
      </h2>

      <div className="columns is-multiline">
        <div className="column is-one-third">
          <EventCard />
        </div>
        <div className="column is-one-third">
          <EventCard />
        </div>
        <div className="column is-one-third">
          <EventCard />
        </div>
      </div>
    </div>
  );
}

export default NextEvents;
