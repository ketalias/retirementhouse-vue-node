import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import installI18n from './config/i18n'


const app = createApp(App)

app.use(createPinia())
app.use(router)
installI18n(app)

app.mount('#app')
