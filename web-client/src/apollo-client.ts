import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";
import { getMainDefinition } from "@apollo/client/utilities";
import { onError } from "@apollo/client/link/error";
import { logErrorMessages } from "@vue/apollo-util";

const httpLink = new HttpLink({
  uri: "http://localhost:8000/graphql",
  credentials: 'include',
});

const errorLink = onError((error) => {
  if (process.env.NODE_ENV !== "production") {
    logErrorMessages(error);
  }
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(httpLink),
});
