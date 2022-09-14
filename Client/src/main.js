import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";
console.log("heloo");

const app = createApp(App);
app.use(createPinia());
app.use(router).mount("#app");
