import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Index.js' // Импорт роутера
import './assets/main.css'


const app = createApp(App)
app.use(router) // Подключение роутера
app.mount('#app')
