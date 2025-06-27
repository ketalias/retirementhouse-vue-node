<script setup>
import FooterComp from '@/components/FooterComp.vue'
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18next from 'i18next'

const t = i18next.t.bind(i18next)

const images = [
  { src: '/img/galleryitem1.jpg', height: 260 },
  { src: '/img/galleryitem1.jpg', height: 330 },
  { src: '/img/galleryitem1.jpg', height: 280 },
  { src: '/img/galleryitem1.jpg', height: 370 },
  { src: '/img/galleryitem1.jpg', height: 200 },
  { src: '/img/galleryitem1.jpg', height: 320 },
  { src: '/img/galleryitem1.jpg', height: 240 },
  { src: '/img/galleryitem1.jpg', height: 290 },
]

const faqs = [
  {
    question: 'Які умови бронювання?',
    answer:
      'Бронювання здійснюється заздалегідь через наш сайт або за телефоном. Потрібна передоплата 20%.',
    open: ref(false),
  },
  {
    question: 'Чи можна приїхати з домашніми тваринами?',
    answer: 'Так, ми раді гостям з домашніми улюбленцями. Повідомте про це під час бронювання.',
    open: ref(false),
  },
  {
    question: 'Які послуги включені у вартість?',
    answer: 'Вартість включає проживання, сніданок та користування басейном.',
    open: ref(false),
  },
]

function toggle(index) {
  faqs[index].open.value = !faqs[index].open.value
}

const phoneNumber = '+380961234567'

function handleCall() {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent)
  if (isMobile) {
    window.location.href = `tel:${phoneNumber}`
  } else {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert(`Номер ${phoneNumber} скопійовано в буфер обміну`)
      })
      .catch(() => {
        alert(`Скопіюйте номер вручну: ${phoneNumber}`)
      })
  }
}

// Ініціалізація AOS
onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100,
  })
})
</script>

<template>
  <main>
    <!-- Секція герой -->
    <section
      id="hero"
      aria-label="Головна секція"
      class="h-[60svh] md:h-[70svh] relative bg-[url('/img/hero-background.jpg')] bg-cover bg-center py-20 text-center text-white"
      data-aos="fade-in"
    >
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 class="text-5xl md:text-8xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
          {{ t('hero.title') }}
        </h1>
        <h2 class="text-2xl md:text-4xl mb-6" data-aos="fade-up" data-aos-delay="200">
          {{ t('hero.subtitle') }}
        </h2>
        <p
          class="hidden md:block text-base mb-6 md:w-[65vw] lg:w-[50vw]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {{ t('hero.description') }}
        </p>
        <div
          class="buttons flex flex-col md:flex-row gap-2 w-full md:w-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button class="btn btn-primary w-full md:w-auto">{{ t('hero.cta1') }}</button>
          <button
            @click="handleCall"
            class="btn btn-secondary w-full md:w-auto"
            type="button"
            :title="t('hero.cta2')"
          >
            {{ t('hero.cta2') }}
          </button>
        </div>
      </div>
    </section>

    <!-- Секція переваги -->
    <section aria-label="Переваги" class="py-19 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <h2 class="text-4xl font-bold mb-12">{{ t('advantages.title') }}</h2>
      <div class="flex flex-col md:flex-row gap-8 text-center">
        <div
          v-for="(item, index) in t('advantages.items', { returnObjects: true })"
          :key="index"
          class="card flex-1 p-6 bg-white rounded-lg shadow-md"
          data-aos="fade-up"
          :data-aos-delay="(index + 1) * 100"
        >
          <img
            :src="'/ico/' + item.icon"
            class="h-16 w-16 mb-4 mx-auto"
            :alt="item.iconAlt"
          />
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Секція відгуки -->
    <section aria-label="Відгуки гостей" class="py-16 px-4 bg-gray-50" data-aos="fade-up">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12" data-aos="fade-up" data-aos-delay="100">
          {{ t('reviews.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <blockquote
            v-for="(quote, index) in t('reviews.quotes', { returnObjects: true })"
            :key="index"
            class="card bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 max-w-md mx-auto"
            data-aos="fade-up"
            :data-aos-delay="(index + 1) * 100"
          >
            <img
              :src="`/img/granny${index + 1}.jpg`"
              class="rounded-xl h-[200px] w-full object-cover"
              :alt="quote.imgAlt"
            />
            <p class="text-gray-800 text-lg leading-relaxed">{{ quote.text }}</p>
            <footer class="text-sm text-gray-600 font-semibold">— {{ quote.name }}</footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Секція галерея -->
    <section class="py-10 bg-base-100" data-aos="fade-up">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-8">{{ t('gallery.title') }}</h2>
        <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <div
            v-for="(item, index) in images"
            :key="index"
            class="break-inside-avoid overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"
            :data-aos="'fade-up'"
            :data-aos-delay="100 + (index % 4) * 100"
          >
            <img
              :src="item.src"
              :style="{ height: item.height + 'px' }"
              class="w-full object-cover rounded-xl"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <FooterComp />
  </main>
</template>

<style scoped>
.card {
  transition: transform 0.5s ease-in-out;
}
.card:hover {
  transform: scale(1.1);
}

@media (prefers-reduced-motion: reduce) {
  [data-aos] {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>
