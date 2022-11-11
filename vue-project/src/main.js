import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
//import Vue from 'vue'
import UserTable from "./components/UserTable.vue";
//import Calendar from "./components/calendar.vue";
const app = createApp(App)

app.use(router)

app.mount('#app')
