import { createApp } from "vue";
import { store, key } from './store'
import App from "./App.vue";

import Datepicker from 'vue3-date-time-picker';
import 'vue3-date-time-picker/dist/main.css';

const app = createApp(App)

app.use(store, key)
app.component('Datepicker', Datepicker)
app.mount("#app");