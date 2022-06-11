import { createApp, provide, h } from "vue";
import { createPinia } from "pinia";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./apollo-client";

import App from "./App.vue";
import router from "./router";
import { useAuthStore } from "./stores/auth";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(createPinia());

app.use(router);

app.mount("#app");
