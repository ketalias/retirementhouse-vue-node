import './assets/main.css'

import { createApp, nextTick } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

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
