import { createApp } from "vue";
import { dataStore, dataKey } from "./stores/dataStore";
import { themeStore, themeKey } from "./stores/themeStore";
import App from "./App.vue";

const app = createApp(App);

app.use(dataStore, dataKey);
app.use(themeStore, themeKey);
app.mount("#app");
