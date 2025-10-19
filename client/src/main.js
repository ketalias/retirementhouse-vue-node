import './assets/main.css'

import { createApp, nextTick } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

async function initializeApp() {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  const userLocale = localStorage.getItem('user-locale') || 'uk'
  
  const i18n = createI18n({
    legacy: false,
    locale: userLocale,
    fallbackLocale: 'uk',
    messages: {
      uk: (await import('./locales/uk.json')).default,
      en: (await import('./locales/en.json')).default,
      hu: (await import('./locales/hu.json')).default,
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
}

initializeApp()