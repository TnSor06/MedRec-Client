import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Instantiate GraphQL
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http"; // Link to establish connectioon
import { InMemoryCache } from "apollo-cache-inmemory"; // Caching data
import { ApolloClient } from "apollo-boost"; // Setting up graphql-client
import { typeDefs, resolvers } from "./graphql/resolvers";

// Check headers
import { setContext } from "apollo-link-context";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AUTH_TOKEN, SERVER_URL } from "./constants";
import CurrentUserProvider from "./providers/currentUser.provider";

//Establish Connection
const httpLink = createHttpLink({
  uri: SERVER_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

//Create cache and manage data like store in redux
const cache = new InMemoryCache();
// Create client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  typeDefs,
  resolvers,
});

client.writeData({
  data: {
    currentUser: {
      __typename: "",
      id: "",
      firstName: "",
      lastName: "",
      role: "",
      isAdmin: "",
      verified: "",
    },
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <CurrentUserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CurrentUserProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
