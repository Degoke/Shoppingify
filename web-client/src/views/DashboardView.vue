<script setup lang="ts">
import { AUTHENTICATE_QUERY, LOGOUT_MUTATION } from "@/graphql/auth";
import { useQuery, useMutation } from "@vue/apollo-composable";

const { onResult } = useQuery(AUTHENTICATE_QUERY);

onResult((result) => console.log(result));
const { mutate } = useMutation(LOGOUT_MUTATION);
const logout = async() => await mutate();
</script>

<template>
  <h1>Welcome to your dashboard</h1>
  <button @click="logout">Logout</button>
</template>
