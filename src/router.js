import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
import Home from "./views/Home.vue";
import Charts from "./views/Charts.vue";
// import NotFound from "./views/NotFound.vue";

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    component: Signup,
  },
  {
    path: "/",
    component: Home,
  },
  {
    component: Charts,
    path: "/charts",
  },
  //   {
  //     path: "*",
  //     component: NotFound,
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
