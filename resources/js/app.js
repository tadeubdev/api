import App from './App.vue'
import { createApp } from 'vue'
import router from './router/route'
import Toast from "vue-toastification"

import './App.css'
import "vue-toastification/dist/index.css"

const app = createApp(App)
app.use(router)
app.use(Toast, {});
app.mount('#app')
