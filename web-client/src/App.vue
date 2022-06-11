<script setup lang="ts">
import { RouterView } from "vue-router";
import { AUTHENTICATE_QUERY } from "@/graphql/auth";
import { useQuery } from "@vue/apollo-composable";
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();
const { setIsAuthenticated } = authStore;
const { onResult, onError } = useQuery(AUTHENTICATE_QUERY);

onResult(() => setIsAuthenticated(true));
onError(() => setIsAuthenticated(false));
</script>

<template>
  <RouterView />
</template>
