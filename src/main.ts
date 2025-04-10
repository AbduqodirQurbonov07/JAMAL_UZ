import "./assets/css/index.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import axios from "axios";
// axios.defaults.baseURL = "http://147.182.234.78:5000";
axios.defaults.baseURL = "http://192.168.134.208:5000";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
