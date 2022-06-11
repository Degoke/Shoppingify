import { apolloClient } from "@/apollo-client";
import { AUTHENTICATE_QUERY } from "@/graphql/auth";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    setIsAuthenticated(value: boolean) {
      this.isAuthenticated = value;
    },
    authenticate() {
      apolloClient
        .query({
          query: AUTHENTICATE_QUERY,
        })
        .then(() => (this.isAuthenticated = true))
        .catch(() => (this.isAuthenticated = false));
    },
  },
});
