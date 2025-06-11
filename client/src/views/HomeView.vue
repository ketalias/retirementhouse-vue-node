<script setup>
import FooterComp from '@/components/FooterComp.vue'
import { ref } from 'vue'

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
</script>

<template>
  <main>
    <section
      id="hero"
      aria-label="Головна секція"
      class="h-[65vh] relative bg-[url('/img/hero-background.jpg')] bg-cover bg-center py-20 text-center text-white"
    >
      <div class="absolute inset-0 bg-black/60"></div>

      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 class="text-5xl md:text-8xl font-bold mb-4">Пансіонат Панська Втіха</h1>
        <p class="block md:hidden text-base mb-6">Комфорт. Природа. Відпочинок.</p>
        <p class="hidden md:block text-base mb-6 md:w-[65vw] lg:w-[50vw]">
          Пансіонат "Панська Втіха" — це ідеальне місце для відпочинку, де поєднуються комфорт,
          природа та українська гостинність. Розташований у мальовничому куточку, оточеному зеленими
          лісами та кришталево чистими водоймами, наш пансіонат створений для тих, хто прагне втекти
          від міської метушні та насолодитися спокоєм.
        </p>
        <div class="buttons flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <button class="btn btn-primary w-full md:w-auto">Почати</button>
          <button class="btn btn-secondary w-full md:w-auto">Зателефонувати</button>
        </div>
      </div>
    </section>

    <section aria-label="Переваги" class="py-16 px-4 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row gap-8 text-center">
        <div class="flex-1 p-6 bg-white rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="mx-auto mb-4 h-12 w-12 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
            />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Комфортні номери</h3>
          <p>Затишні кімнати з усіма зручностями для вашого відпочинку.</p>
        </div>

        <div class="flex-1 p-6 bg-white rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="mx-auto mb-4 h-12 w-12 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
            />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Природа поруч</h3>
          <p>Свіже повітря, ліси та водойми створюють ідеальну атмосферу.</p>
        </div>

        <div class="flex-1 p-6 bg-white rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="mx-auto mb-4 h-12 w-12 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
            />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Українська гостинність</h3>
          <p>Теплий прийом та сервіс, який зробить ваш відпочинок незабутнім.</p>
        </div>
      </div>
    </section>
    <section aria-label="Відгуки гостей" class="py-16 px-4 bg-gray-50">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-12">Що кажуть наші гості</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <blockquote class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <p class="text-gray-700 mb-4">
              "Чудове місце для відпочинку! Комфортні номери та неймовірна природа. Обов’язково
              повернуся!"
            </p>
            <footer class="text-sm text-gray-500 font-semibold">— Оксана К.</footer>
          </blockquote>

          <blockquote class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <p class="text-gray-700 mb-4">
              "Прекрасна українська гостинність та спокійна атмосфера. Відпочив на всі 100%!"
            </p>
            <footer class="text-sm text-gray-500 font-semibold">— Андрій П.</footer>
          </blockquote>

          <blockquote class="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
            <p class="text-gray-700 mb-4">
              "Сімейний відпочинок пройшов чудово! Діти були в захваті, дякуємо персоналу."
            </p>
            <footer class="text-sm text-gray-500 font-semibold">— Марія С.</footer>
          </blockquote>
        </div>
      </div>
    </section>
    <section class="max-w-7xl mx-auto p-4">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        style="grid-auto-flow: dense"
      >
        <div class="bg-gray-500 p-4 rounded h-100"></div>
        <div class="bg-gray-300 p-4 rounded h-60"></div>
        <div class="bg-gray-400 p-4 rounded h-78"></div>
      </div>
    </section>
    <section aria-label="Часті питання (FAQ)" class="max-w-8xl mx-auto p-6 my-5.5 bg-gray-100">
      <div class="max-w-6xl mx-auto p-6 my-5.5 bg-gray-200">
        <h2 class="text-3xl font-bold mb-8 text-center">Часті питання</h2>
        <ul>
          <li v-for="(faq, index) in faqs" :key="index" class="mb-4 border-b border-gray-300">
            <button
              @click="toggle(index)"
              class="w-full text-left py-4 flex justify-between items-center focus:outline-none"
              :aria-expanded="faq.open.value.toString()"
            >
              <span class="text-lg font-medium">{{ faq.question }}</span>
              <svg
                :class="{ 'transform rotate-180': faq.open.value }"
                class="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-show="faq.open.value" class="pb-4 text-gray-700">
              {{ faq.answer }}
            </div>
          </li>
        </ul>
      </div>
    </section>

    <FooterComp />
  </main>
</template>
