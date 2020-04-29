import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function HomeSearch() {
  return (
    <div>
      <h2 className="title has-text-centered">
        Busque tatuadores, body piercers
        <br/>
        e eventos em qualquer lugar do Brasil
      </h2>

      <form className="form form--home">
        <div className="field">
          <p className="control has-icons-left form__control">
            <input className="input form__input" type="name" placeholder="Busque por tatuadores, body piercers, eventos, cidades..." />
            <span className="icon is-small is-left form__icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default HomeSearch;
