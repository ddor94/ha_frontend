import React, { useContext, useState } from 'react';

import { checkArtist } from "../../../../utils/context";
import { useMutation } from '@apollo/react-hooks';
import { updateArtist } from '../../../../utils/apiCalls';

function AccountSettings() {
  let idValue = useContext(checkArtist).id
  let emailValue = useContext(checkArtist).email;

  const [handleUpdate, {error}] = useMutation(updateArtist);
  const [email, setEmail] = useState(emailValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdate({
      variables: {
        id: idValue,
        email: emailValue.value
      }
    })
    .catch(error => console.log(error))
  };

  return(
    <form className="form dashboard__form" onSubmit={handleSubmit}>
      <div className="dashboard__section-title is-flex">
        <h2 className="title">
          Conta
        </h2>

        <div className="field is-grouped">
          <div className="control form__control">
            <button className="button is-link">Salvar</button>
          </div>
        </div>
      </div>

      { error &&
        <span className="tag is-danger is-light is-large is-block form__error-tag">
          <ul>
            {error.graphQLErrors.map(({ message }, i) => (
              <li key={i}>{message}</li>
            ))}
          </ul>
        </span>
      }

      <div className="field">
        <label className="label">E-mail *</label>

        <div className="control form__control">
          <input
            required
            className="input form__input"
            type="email"
            placeholder="seu@email.com"
            value={email}
            ref={node => {emailValue = node}}
            onChange={event => setEmail(event.currentTarget.value)}
          />
        </div>
      </div>
    </form>
  )
}

export default AccountSettings
