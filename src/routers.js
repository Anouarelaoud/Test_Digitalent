import Home from "@/components/Home";
import SignUp from "@/components/SignUp";
import Login from "@/components/Login";
import Charts from "@/components/charts/Charts";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "Charts",
    component: Charts,
    path: "/charts",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
