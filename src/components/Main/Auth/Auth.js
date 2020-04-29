import React from 'react';
import Login from './Login/Login';
import Registration from './Registration/Registration';

function Auth({ history }) {
  const handleRedirect = () => {
    history.push('/dashboard');
  }

  return (
    <div className="container is-fluid auth-page">
      <div className="columns is-marginless">
        <div className="column auth-page__column is-half">
          <Login handleRedirect={handleRedirect} />
        </div>

        <div className="column auth-page__column">
          <Registration handleRedirect={handleRedirect} />
        </div>
      </div>
    </div>
  );
}

export default Auth;
