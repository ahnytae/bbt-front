import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const history = createBrowserHistory();

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
