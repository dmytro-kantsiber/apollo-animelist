import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BASE_URL } from "./utils/constants";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./index.css";
const httpLink = createHttpLink({
  uri: BASE_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Page: {
        merge: true,
      },
    },
  }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
