<script setup lang="ts">
import { LOGOUT_MUTATION } from "@/graphql/auth";
import { useMutation } from "@vue/apollo-composable";

const { mutate } = useMutation(LOGOUT_MUTATION);
const logout = async() => await mutate();
</script>

<template>
  <h1>Welcome to your dashboard</h1>
  <button @click="logout">Logout</button>
</template>
