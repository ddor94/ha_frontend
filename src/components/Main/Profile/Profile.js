import React from 'react';
import PhotoThumb from '../PhotoThumb/PhotoThumb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  return (
    <div className="columns">
      <div className="has-background-black column is-one-third has-text-white">
        <div className="section container is-fluid profile__box">
          <div className="profile__top is-flex m-is-flex-centered">
            <figure className="image is-128x128">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder" />
            </figure>

            <div className="profile__title-section">
              <h2 className="title is-2 is-marginless has-text-white">
                John Smith
              </h2>

              <p className="subtitle is-marginless has-text-white">
                Canela/RS
              </p>

              <div className="profile__social is-flex">
                <div className="profile__social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>

                <div className="profile__social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>
              </div>

              <div className="field is-grouped">
                <p className="control">
                  <button className="button is-small">
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faUserPlus} />
                    </span>

                    <span>
                      Seguir
                    </span>
                  </button>
                </p>

                <p className="control">
                  <button className="button is-primary is-small">
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faCommentsDollar} />
                    </span>

                    <span>
                      Pedir Orçamento
                    </span>
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="has-background-primary profile__row profile__row--red is-flex m-is-flex-centered">
            <div className="profile__count">
              <h3 className="title is-3 is-marginless has-text-white">
                233
              </h3>

              <p>
                Seguidores
              </p>
            </div>

            <div>
              <h3 className="title is-3 is-marginless has-text-white">
                322
              </h3>

              <p>
                Likes
              </p>
            </div>
          </div>

          <div className="profile__row">
            <h3 className="title is-3 is-marginless has-text-white">
              Sobre
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="profile__row">
            <h3 className="title is-3 is-marginless has-text-white">
              Estilos
            </h3>

            <div className="profile__styles">
              <span className="tag is-primary is-medium profile__style">
                Old School
              </span>

              <span className="tag is-primary is-medium profile__style">
                Pontilismo
              </span>

              <span className="tag is-primary is-medium profile__style">
                Japonesa
              </span>

              <span className="tag is-primary is-medium profile__style">
                Tribal
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="columns is-multiline">
          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>

          <div className="column is-one-third is-paddingless">
            <PhotoThumb />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
