import './assets/main.css'

import { createApp, nextTick } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { createI18n } from 'vue-i18n'


const app = createApp(App)

app.use(createPinia())
app.use(router)
const i18n = createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'ua',
  messages: {
    ua: require('./locales/ua.json'),
    en: require('./locales/en.json'),
    hg: require('./locales/hg.json'),
  },
})
app.use(i18n)

app.mount('#app')

AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 100,
})

router.afterEach(() => {
  setTimeout(() => {
    nextTick(() => {
      AOS.refresh()
    })
  }, 600)
})
