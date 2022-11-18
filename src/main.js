import { createApp } from "vue";
import store from "./store/index";
import App from "./App.vue";

import "./assets/styles/main.css";

createApp(App).use(store).mount("#app");
