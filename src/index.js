import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  // HttpLink,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/',
  cache: new InMemoryCache(),

  // (HttpLink) Used if you want to build up your own link like Auth / Subscription... =>
  // link: new HttpLink({
  //   uri: 'https://swapi.graph.cool/',
  // }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
