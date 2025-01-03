import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.config.performance = true
app.config.errorHandler = (err, vm, info) => {
  console.error('App Error:', err)
  console.error('Error Info:', info)
}

app.mount('#app')
