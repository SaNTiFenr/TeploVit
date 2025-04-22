import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Index.js' // Импорт роутера

const app = createApp(App)
app.use(router) // Подключение роутера
app.mount('#app')
