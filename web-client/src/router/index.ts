import { useAuthStore } from "@/stores/auth";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: { guest: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
      meta: { guest: true },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const auth = useAuthStore();
    if (auth.isAuthenticated) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.guest) {
    const auth = useAuthStore();
    if (auth.isAuthenticated) {
      next("/dashboard");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
