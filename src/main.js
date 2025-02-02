import "./assets/main.css";
import "primeicons/primeicons.css";
import router from "./router";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";

const app = createApp(App);
app.use(router);
app.use(Toast);
app.mount("#app");
