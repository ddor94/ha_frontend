import React, { useContext, useState } from 'react';

import { checkArtist } from "../../../../utils/context";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { updateArtist, getStyles } from '../../../../utils/apiCalls';

function ProfileSettings() {
  let idValue = useContext(checkArtist).id;
  let nameValue = useContext(checkArtist).name || '';
  let aboutValue = useContext(checkArtist).about || '';
  let tattooValue = useContext(checkArtist).tattoo;
  let piercingValue = useContext(checkArtist).piercing;

  const [handleUpdate, {error}] = useMutation(updateArtist);
  const { loading, data } = useQuery(getStyles);

  const [name, setName] = useState(nameValue);
  const [about, setAbout] = useState(aboutValue);
  const [tattoo, setTattoo] = useState(tattooValue);
  const [piercing, setPiercing] = useState(piercingValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdate({
      variables: {
        id: idValue,
        name: nameValue.value,
        about: aboutValue.value,
        tattoo: tattooValue.checked,
        piercing: piercingValue.checked
      }
    })
    .catch(error => console.log(error))
  };

  return(
    <form className="form dashboard__form" onSubmit={handleSubmit}>
      <div className="dashboard__section-title is-flex">
        <h2 className="title">
          Perfil
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
        <label className="label">Nome *</label>

        <div className="control form__control">
          <input
            className="input form__input"
            type="name"
            placeholder="Nome completo"
            value={name}
            ref={node => {nameValue = node}}
            onChange={event => setName(event.currentTarget.value)}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Apelido</label>

        <div className="control form__control">
          <input
            className="input form__input"
            type="text"
            placeholder="John" />
        </div>
      </div>

      <div className="field">
        <label className="label">Sobre *</label>

        <div className="control form__control">
          <textarea
            className="textarea form__input"
            placeholder="Tatuador a mais de 5 anos atuando em São Paulo Capital"
            required
            value={about}
            ref={node => {aboutValue = node}}
            onChange={event => setAbout(event.currentTarget.value)}
          >
          </textarea>
        </div>
      </div>

      <div className="field">
        <label className="label">
          Selecione ao menos uma opção *
        </label>

        <div className="control form__control">
          <label className="checkbox form__checkbox">
            <input
              type="checkbox"
              className="form__checkbox-box"
              checked={tattoo}
              ref={node => {tattooValue = node}}
              onChange={event => setTattoo(event.currentTarget.checked)}
            />

            <span className="form__checkbox-content has-text-weight-bold">
              Tatuador
            </span>
          </label>

          <label className="checkbox form__checkbox">
            <input
              type="checkbox"
              className="form__checkbox-box"
              checked={piercing}
              ref={node => {piercingValue = node}}
              onChange={event => setPiercing(event.currentTarget.checked)}
             />

             <span className="form__checkbox-content has-text-weight-bold">
               Body Piercer
             </span>
          </label>
        </div>
      </div>

      <div className="dashboard__section-title is-flex">
        <h2 className="subtitle is-size-4">
          Estilos
        </h2>
      </div>

      <div className="columns is-multiline">
        {
          loading ? <span>loading...</span> :
          data.styles.map(style => {
            return (
              <div className="column is-narrow">
                <label className="checkbox form__checkbox">
                  <input
                    type="checkbox"
                    className="form__checkbox-box"
                    checked={piercing}
                    ref={node => {piercingValue = node}}
                    onChange={event => setPiercing(event.currentTarget.checked)}
                   />

                   <span className="form__checkbox-content has-text-weight-bold">
                     {style.name}
                   </span>
                </label>
              </div>
            )
          })
        }
      </div>
    </form>
  )
}

export default ProfileSettings
