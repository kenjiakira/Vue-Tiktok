import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const app = createApp(App)

app.config.performance = true
app.config.globalProperties.$productionTip = false

app.use(i18n)
app.use(router)

app.config.errorHandler = (err, vm, info) => {
  console.error('App Error:', err)
  console.error('Error Info:', info)
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

app.mount('#app')
