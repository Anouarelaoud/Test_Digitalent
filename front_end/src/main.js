import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import CanvasJSChart from "@canvasjs/vue-charts";

createApp(App).use(router).use(store).use(CanvasJSChart).mount("#app");
