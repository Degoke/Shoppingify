import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: true,
  }),
  actions: {
    setIsAuthenticated(value: boolean) {
      this.isAuthenticated = value;
    },
  },
});
