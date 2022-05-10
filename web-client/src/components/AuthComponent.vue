<script setup lang="ts">
import { ref, watch } from "vue";
import { useMutation } from "@vue/apollo-composable";
import { LOGIN_MUTATION, SIGNUP_MUTATION } from "@/graphql/auth";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

interface Props {
  currentPage: "login" | "signup";
}

const props = defineProps<Props>();
const email = ref("");
const password = ref("");
const name = ref("");

const router = useRouter();
const authStore = useAuthStore();
const { setIsAuthenticated } = authStore;

// watch([email, password], () => {
//   console.log(email, password);
// });

const { mutate: LoginMutation, onDone: doneLogin } =
  useMutation(LOGIN_MUTATION);
const { mutate: SignupMutation } = useMutation(SIGNUP_MUTATION);

doneLogin((data) => {
  setIsAuthenticated(true);
  router.push({ name: "dashboard" });
  console.log(data);
});

const login = async () => {
  switch (props.currentPage) {
    case "login":
      await LoginMutation({
        loginInput: { email: email.value, password: password.value },
      });
      break;
    case "signup":
      await SignupMutation({
        createUserInput: {
          email: email.value,
          password: password.value,
          name: name.value,
        },
      });
      break;
    default:
      return;
  }
};
</script>

<template>
  <main>
    <section>
      <p>Shoppingify</p>
      <h1 v-if="props.currentPage === 'signup'">Create an Account</h1>
      <h1 v-if="props.currentPage === 'login'">Login</h1>
      <form @submit.prevent="login">
        <template v-if="props.currentPage === 'signup'">
          <label>
            <span class="material-icons">email</span>
            <input v-model.trim="name" placeholder="Name" />
          </label>
        </template>
        <label>
          <span class="material-icons">email</span>
          <input v-model.trim="email" placeholder="Email" />
        </label>
        <label>
          <span class="material-icons">email</span>
          <input v-model.trim="password" placeholder="Password" />
        </label>
        <button type="submit">{{ props.currentPage.toUpperCase() }}</button>
      </form>
      <p v-if="props.currentPage === 'signup'">
        Already have an account? <router-link to="login">Login</router-link>
      </p>
      <p v-if="props.currentPage === 'login'">
        Dont have an account?
        <router-link to="signup">Signup</router-link>
      </p>
    </section>
  </main>
</template>
