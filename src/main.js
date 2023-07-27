import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import CanvasJSChart from "@canvasjs/vue-charts";

createApp(App).use(router).use(CanvasJSChart).mount("#app");
