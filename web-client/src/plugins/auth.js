import { apolloClient } from "@/apollo-client";
import { AUTHENTICATE_QUERY } from "@/graphql/auth";

export default {
  install: (app, options) => {
    console.log(options)
    apolloClient
      .query({
        query: AUTHENTICATE_QUERY,
      })
      .then((data) => options.authStore.setIsAuthenticated(true))
      .catch((error) => options.authStore.setIsAuthenticated(false));
  },
};
