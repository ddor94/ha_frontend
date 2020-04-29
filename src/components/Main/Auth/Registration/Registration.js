import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { registerArtist } from '../../../../utils/apiCalls';
import { login } from "../../../../utils/authCalls";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Registration({ handleRedirect }) {
  let email;
  let password;
  let passwordConfirmation;
  let tattoo;
  let piercing;

  const [handleRegistration, {error}] = useMutation(registerArtist);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleRegistration({
      variables: {
        email: email.value,
        password: password.value,
        passwordConfirmation: passwordConfirmation.value,
        tattoo: tattoo.checked,
        piercing: piercing.checked
      }
    })
    .then(res => login(res.data.registration.authenticationToken))
    .then(() => handleRedirect())
    .catch(error => console.log(error))
  };

  return (
    <>
      <h2 className="title has-text-centered has-text-weight-light">
        Cadastre-se
      </h2>

      { error &&
        <span className="tag is-danger is-light is-large is-block form__error-tag">
          <ul>
            {error.networkError.result.error.message.split(',')
              .map((error, i) => {
              return <li key={i}>{error}</li>;
            })}
          </ul>
        </span>
      }

      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">
            Email
          </label>

          <div className="control has-icons-left form__control">
            <input className="input input-border form__input" type="email" placeholder="Digite seu e-mail" ref={node => {email = node}} value="teste@teste.com" />

            <span className="icon is-small is-left form__icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">
            Senha
          </label>

          <div className="control has-icons-left form__control">
            <input className="input input-border form__input" type="password" placeholder="Digite sua senha" ref={node => {password = node}} value="password" />

            <span className="icon is-small is-left form__icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">
            Confirme sua senha
          </label>

          <div className="control has-icons-left form__control">
            <input className="input input-border form__input" type="password" placeholder="Digite novamente sua senha" ref={node => {passwordConfirmation = node}} value="password" />

            <span className="icon is-small is-left form__icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">
            Selecione ao menos uma opção
          </label>

          <div className="control form__control">
            <label className="checkbox form__checkbox">
              <input
                type="checkbox"
                className="form__checkbox-box"
                ref={node => {tattoo = node}}
              />

              <span className="form__checkbox-content has-text-weight-bold">
                Tatuador
              </span>
            </label>

            <label className="checkbox form__checkbox">
              <input
                type="checkbox"
                className="form__checkbox-box"
                ref={node => {piercing = node}}
              />

              <span className="form__checkbox-content has-text-weight-bold">
                Body Piercer
              </span>
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">
              Cadastre-se
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Registration
