import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ApolloClient from "apollo-boost";

const client =  new ApolloClient({
  uri: "https://db-layer-de1a8af52f.herokuapp.com/data-layer/dev/"
});
 // create Apollo client

 ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
  </ApolloHooksProvider>
  </ApolloProvider>, document.getElementById('root'));