import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@apollo/react-hooks';
import { loginArtist } from '../../../../utils/apiCalls';
import { login } from "../../../../utils/authCalls";

function Login({ handleRedirect }) {
  let email;
  let password;

  const [handleLogin, {error}] = useMutation(loginArtist);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleLogin({
      variables: {
        email: email.value,
        password: password.value
      }
    })
    .then(res => login(res.data.login.authenticationToken))
    .then(() => handleRedirect())
    .catch(error => console.log(error))
  }

  return(
    <>
      <h2 className="title has-text-centered has-text-weight-light">
        Login
      </h2>

      { error &&
        <span className="tag is-danger is-light is-large is-block form__error-tag">
          <ul>
            {error.graphQLErrors.map(({ message }, i) => (
              <li key={i}>{message}</li>
            ))}
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

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Login
