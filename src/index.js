import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from './components/App';
import { defaults, resolvers } from "./resolvers";

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
  uri: `https://nx9zvp49q7.lp.gql.zone/graphql`,
  clientState: {
    defaults,
    resolvers,
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
