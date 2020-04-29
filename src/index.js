import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';
import { getToken } from './utils/authCalls';

const client = new ApolloClient({
  uri: 'http://localhost:3001/api/v1',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: getToken() ? `Bearer ${getToken()}` : ''
      }
    })
  }
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
), document.getElementById('site'))
