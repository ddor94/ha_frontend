import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import 'bulma';
import './stylesheets/application.css.scss';

import { BrowserRouter as Router } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { getArtist } from './utils/apiCalls';
import { checkArtist } from './utils/context';
import { isAuthenticated } from './utils/authCalls';

function App() {
  const { loading, data } = useQuery(getArtist, {
    skip: !isAuthenticated()
  });

  if (loading) return false;

  return (
    <Router>
      <checkArtist.Provider value={data ? data.getCurrentArtist : "notLoggedIn"}>
        <Header />
          <Main />

      </checkArtist.Provider>
    </Router>
  );
}

export default App;
