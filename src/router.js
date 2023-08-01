import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Home from "./views/Home.vue";
import Charts from "./views/Charts.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    component: Charts,
    path: "/charts",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
