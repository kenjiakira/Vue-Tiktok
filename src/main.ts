import './assets/main.css'
import 'leaflet/dist/leaflet.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { i18n } from './i18n'

const app = createApp(App)

app.use(i18n)
app.use(router)

app.config.performance = true
app.config.errorHandler = (err, vm, info) => {
  console.error('App Error:', err)
  console.error('Error Info:', info)
}

app.mount('#app')
