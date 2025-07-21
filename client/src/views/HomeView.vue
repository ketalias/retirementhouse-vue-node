<script setup>
import FooterComp from '@/components/FooterComp.vue'
import FloatingFormButton from '@/components/ui/FloatingFormButton.vue'
import PriceCalcForm from '@/components/PriceCalcForm.vue'
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { sendUserData } from '@/api'

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

const isFormOpen = ref(false)

const handleFormSubmit = (formData) => {
  sendUserData(formData)
    .then(() => {
      alert('Дані успішно надіслані!')
      isFormOpen.value = false
    })
    .catch((error) => {
      console.error('Помилка при надсиланні даних:', error)
      alert('Сталася помилка. Спробуйте ще раз.')
    })
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
    <FloatingFormButton @open="isFormOpen = true" />
    <PriceCalcForm mode="modal" :isOpen="isFormOpen" @close="isFormOpen = false" @submitted="handleFormSubmit" />

    <!-- Секція герой -->
    <section id="hero" aria-label="Головна секція"
      class="h-[60svh] md:h-[70svh] relative bg-[url('/img/hero-background.jpg')] bg-cover bg-center py-20 text-center text-white"
      data-aos="fade-in">
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 class="text-5xl md:text-8xl font-bold mb-4" data-aos="fade-up" data-aos-delay="100">
          Пансіонат Панська Втіха
        </h1>
        <h2 class="text-2xl md:text-4xl mb-6" data-aos="fade-up" data-aos-delay="200">
          Відпочинок у серці природи
        </h2>
        <p class="hidden md:block text-base mb-6 md:w-[65vw] lg:w-[50vw]" data-aos="fade-up" data-aos-delay="300">
          Пансіонат "Панська Втіха" — це ідеальне місце для відпочинку, де поєднуються комфорт,
          природа та українська гостинність. Розташований у мальовничому куточку, оточеному зеленими
          лісами та кришталево чистими водоймами, наш пансіонат створений для тих, хто прагне втекти
          від міської метушні та насолодитися спокоєм.
        </p>
        <div class="buttons flex flex-col md:flex-row gap-2 w-full md:w-auto" data-aos="fade-up" data-aos-delay="400">
          <button class="btn btn-primary w-full md:w-auto">Розрахувати вартість</button>
          <button @click="handleCall" class="btn btn-secondary w-full md:w-auto" type="button"
            title="Натисніть, щоб зателефонувати або скопіювати номер">
            Зателефонувати
          </button>
        </div>
      </div>
    </section>

    <!-- Секція переваги -->
    <section aria-label="Переваги" class="py-19 px-4 max-w-7xl mx-auto" data-aos="fade-up">
      <div class="flex flex-col md:flex-row gap-8 text-center">
        <div class="card flex-1 p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="mx-auto mb-4 h-12 w-12 text-primary">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Комфортні номери</h3>
          <p>Затишні кімнати з усіма зручностями для вашого відпочинку.</p>
        </div>
        <div class="card flex-1 p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="mx-auto mb-4 h-12 w-12 text-primary">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Природа поруч</h3>
          <p>Свіже повітря, ліси та водойми створюють ідеальну атмосферу.</p>
        </div>
        <div class="card flex-1 p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="mx-auto mb-4 h-12 w-12 text-primary">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Українська гостинність</h3>
          <p>Теплий прийом та сервіс, який зробить ваш відпочинок незабутнім.</p>
        </div>
      </div>
    </section>

    <!-- Секція відгуки -->
    <section aria-label="Відгуки гостей" class="py-16 px-4 bg-gray-50" data-aos="fade-up">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12" data-aos="fade-up" data-aos-delay="100">
          Що кажуть наші гості
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <blockquote
            class="card bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 max-w-md mx-auto"
            data-aos="fade-up" data-aos-delay="100">
            <img src="/img/granny1.jpeg" class="rounded-xl h-[200px] w-full object-cover"
              alt="Фото користувача Оксана К." />
            <p class="text-gray-800 text-lg leading-relaxed">
              “Чудове місце для відпочинку! Комфортні номери та неймовірна природа. Обов’язково
              повернуся!”
            </p>
            <footer class="text-sm text-gray-600 font-semibold">— Оксана К.</footer>
          </blockquote>
          <blockquote
            class="card bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 max-w-md mx-auto"
            data-aos="fade-up" data-aos-delay="200">
            <img src="/img/granny2.jpg" class="rounded-xl h-[200px] w-full object-cover"
              alt="Фото користувачки Марія П." />
            <p class="text-gray-800 text-lg leading-relaxed">
              “Неймовірне місце! Дуже сподобалась атмосфера спокою та затишку. Ідеально для
              відновлення сил.”
            </p>
            <footer class="text-sm text-gray-600 font-semibold">— Марія П.</footer>
          </blockquote>
          <blockquote
            class="card bg-gray-100 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 max-w-md mx-auto"
            data-aos="fade-up" data-aos-delay="300">
            <img src="/img/granny3.jpg" class="rounded-xl h-[200px] w-full object-cover"
              alt="Фото користувачки Галина С." />
            <p class="text-gray-800 text-lg leading-relaxed">
              “Персонал дуже привітний, а навколишня природа — просто казка. Рекомендую всім, хто
              хоче відпочити душею.”
            </p>
            <footer class="text-sm text-gray-600 font-semibold">— Галина С.</footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section id="form-block">
      <PriceCalcForm mode="inline" @submitted="handleSubmit" />
    </section>

    <!-- Секція галерея -->
    <section class="py-10 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <div v-for="(item, index) in images" :key="index"
            class="break-inside-avoid overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"
            :data-aos="'fade-up'" :data-aos-delay="100 + (index % 4) * 100">
            <img :src="item.src" :style="{ height: item.height + 'px' }" class="w-full object-cover rounded-xl"
              loading="lazy" data-aos="fade-up" />
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
