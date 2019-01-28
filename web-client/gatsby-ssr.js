import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './src/apollo/client';

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}> {element} </ApolloProvider>
);

//TODO: what is going on here?