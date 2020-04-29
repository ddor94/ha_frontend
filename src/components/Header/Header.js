import React, { useContext } from 'react';

import logo from '../../images/logo.png';

import { Link } from "react-router-dom";
import { checkArtist } from "../../utils/context";
import { logoutArtist } from '../../utils/apiCalls';
import { logout } from '../../utils/authCalls';
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from "react-router";

function RenderAvatar() {
  const email = useContext(checkArtist).email;

  return(
    <span className="header__no-avatar is-flex">
      {email.charAt(0).toUpperCase()}
    </span>
  )
}

function LoginOrDashBoard({ history }) {
  const [handleLogout] = useMutation(logoutArtist);

  if (useContext(checkArtist) === 'notLoggedIn') {
    return(
      <div className="navbar-end">
        <Link to="/login" className="navbar-item header__link">
          Log in
        </Link>

        <div className="navbar-item">
          <Link to="/login" className="button is-primary has-text-weight-bold">
            Cadastre-se
          </Link>
        </div>
      </div>
    )
  } else {
    return(
      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <span className="navbar-link header__link is-arrowless">
            <RenderAvatar />
          </span>

          <div className="navbar-dropdown is-right has-background-black header__dropdown">
            <Link to="/dashboard" className="navbar-item header__link header__link--dropdown">
              Perfil
            </Link>

            <Link to="/dashboard" className="navbar-item header__link header__link--dropdown">
              Dashboard
            </Link>

            <div className="navbar-item">
              <button className="button is-primary" onClick={() => {
                handleLogout()
                  .then(() => logout())
                  .then(() => history.push('/'))
              }}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function Header({ history }) {
  return (
    <header className="navbar is-black">
      <div className="container is-fluid">
        <div className="navbar-brand">
          <Link to="/"
            className="navbar-item header__logo">
            <img src={logo} alt="Logo" />
          </Link>

          <div className="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/tatuadores" className="navbar-item header__link">
              Tatuadores
            </Link>

            <Link to="/body-piercers" className="navbar-item header__link">
              Body Piercers
            </Link>

            <Link to="/eventos" className="navbar-item header__link">
              Eventos
            </Link>
          </div>
          <LoginOrDashBoard history={history} />
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header);
