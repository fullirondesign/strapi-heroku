import ApolloClient from 'apollo-boost';
// import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  // uri: 'http://good-ua.herokuapp.com/graphql', //TODO illya 
  // fetch,
  fetchOptions: {
    mode: 'cors',
  },
});
