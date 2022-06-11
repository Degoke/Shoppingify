<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import { AUTHENTICATE_QUERY } from "@/graphql/auth";
import { useQuery } from "@vue/apollo-composable";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const { setIsAuthenticated } = authStore;
const { onResult, onError } = useQuery(AUTHENTICATE_QUERY);

const router = useRouter();

onResult(() => {
  setIsAuthenticated(true);
  router.push("/dashboard");
});
onError(() => {
  setIsAuthenticated(false);
  router.push("/login");
});
</script>

<template>
  <main>
    <RouterLink to="login">lOGIN</RouterLink>
    <RouterLink to="signup">SIGNUP</RouterLink>
  </main>
</template>
