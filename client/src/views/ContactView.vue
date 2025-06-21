<template>
  <div class="min-h-screen">
    <div
      class="relative hero h-[40vh] bg-[url('/img/contact-bg.jpg')] bg-cover bg-center"
      data-aos="fade-in"
    >
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-4xl">
          <h1 class="mb-5 text-5xl md:text-8xl font-bold text-white" data-aos="fade-up">
            Наші контакти
          </h1>
          <p class="mb-5 text-2xl" data-aos="fade-up" data-aos-delay="200">
            Зв’яжіться з нами для отримання додаткової інформації чи запису
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto py-16 px-4 space-y-12 text-lg">
      <div class="grid md:grid-cols-3 gap-8" data-aos="fade-up">
        <div class="card shadow-xl">
          <div class="card-body text-center items-center">
            <h2 class="card-title text-2xl mb-2">Адреса</h2>
            <p class="text-xl">вул. Незалежності, 23, м. Ужгород, Україна</p>
          </div>
        </div>
        <div class="card shadow-xl">
          <div class="card-body text-center items-center">
            <h2 class="card-title text-2xl mb-2">Телефон</h2>
            <p>
              <a href="tel:+380961234567" class="link link-secondary text-xl"
                >+38 (096) 123-45-67</a
              >
            </p>
          </div>
        </div>
        <div class="card shadow-xl">
          <div class="card-body text-center items-center">
            <h2 class="card-title text-2xl mb-2">Email</h2>
            <p>
              <a href="mailto:info@pansionat.ua" class="link link-secondary text-xl"
                >info@pansionat.ua</a
              >
            </p>
          </div>
        </div>
      </div>

      <div class="shadow-xl overflow-hidden" data-aos="fade-up">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Наше місцезнаходження</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.5477764067433!2d22.297063376703575!3d48.62079321926145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473918f9ff25b231%3A0x8f3a7139b83b4e93!2z0YPQuy4g0J3QsNC00L7Qv9C-0YHRjNC60LAgMjMsINCh0L7QvdCw0YDRltCy0YHQutC-0LPQviwg0KPQutGA0LDRl9C90LAsINCa0LjRl9CyLCDQoNC10YHQvy4g0JfQsNCy0YDQuNC80LAg0YHRgtCw0LUsIDI5ODAw!5e0!3m2!1suk!2sua!4v1718280000001"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="grid md:grid-cols-3 gap-6 text-center" data-aos="fade-up">
        <div class="card p-6 shadow rounded-xl space-y-3">
          <img
            src="/icons/medic-ico.svg"
            alt=""
            class="mx-auto h-15 w-15 text-primary transition-transform duration-500 hover:scale-110"
          />
          <h3 class="text-xl font-semibold mb-2">Жива підтримка</h3>
          <p>Ми відповідаємо на дзвінки та повідомлення без затримок.</p>
        </div>

        <div class="card p-6 shadow rounded-xl space-y-3">
          <img
            src="/icons/friends-ico.svg"
            alt=""
            class="mx-auto h-15 w-15 text-primary transition-transform duration-500 hover:scale-110"
          />
          <h3 class="text-xl font-semibold mb-2">Комфорт та турбота</h3>
          <p>Наш пансіонат — затишне місце, де дбають про кожного.</p>
        </div>

        <div class="card p-6 shadow rounded-xl space-y-3">
          <img
            src="/icons/food-ico.svg"
            alt=""
            class="mx-auto h-15 w-15 text-primary transition-transform duration-500 hover:scale-110"
          />
          <h3 class="text-xl font-semibold mb-2">Зручне розташування</h3>
          <p>Ми в самому серці Ужгорода з легкою доступністю.</p>
        </div>
      </div>
      <div class="shadow-xl" data-aos="fade-up">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-6 text-center">Напишіть нам</h2>
          <form class="form-control flex flex-col space-y-4 w-full mx-auto px-4">
            <input
              type="text"
              placeholder="Ваше ім’я"
              class="input input-bordered text-lg w-full"
            />
            <input
              type="email"
              placeholder="Ваш Email"
              class="input input-bordered text-lg w-full"
            />
            <textarea
              class="textarea textarea-bordered text-lg w-full"
              placeholder="Ваше повідомлення"
              rows="5"
            ></textarea>
            <button class="btn btn-primary text-lg w-full">Надіслати</button>
          </form>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-up">
        <img src="../../public/img/hero-background.jpg" class="rounded-xl shadow" />
        <img src="../../public/img/hero-background.jpg" class="rounded-xl shadow" />
        <img src="../../public/img/hero-background.jpg" class="rounded-xl shadow" />
      </div>
      <div class="faq-container max-w-6xl mx-auto" data-aos="fade-up">
        <h2 class="text-2xl font-bold mb-6 text-center" data-aos="fade-up">Поширені запитання</h2>
        <ul class="space-y-4" data-aos="fade-up">
          <li>
            <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
              <input type="checkbox" :id="'faq-1'" class="peer" />
              <label
                for="faq-1"
                class="collapse-title text-xl font-medium flex items-center cursor-pointer peer-checked:text-primary"
              >
                Чи можна завітати без запису?
              </label>
              <div class="collapse-content peer-checked:block" aria-labelledby="faq-1">
                <p>
                  Так, ми приймаємо відвідувачів у робочі години. Рекомендуємо попередньо
                  зателефонувати для уточнення.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
              <input type="checkbox" :id="'faq-2'" class="peer" />
              <label
                for="faq-2"
                class="collapse-title text-xl font-medium flex items-center cursor-pointer peer-checked:text-primary"
              >
                Які години роботи пансіонату?
              </label>
              <div class="collapse-content peer-checked:block" aria-labelledby="faq-2">
                <p>Пн-Пт: 9:00–18:00, Сб-Нд: 10:00–16:00</p>
              </div>
            </div>
          </li>
          <li>
            <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
              <input type="checkbox" :id="'faq-3'" class="peer" />
              <label
                for="faq-3"
                class="collapse-title text-xl font-medium flex items-center cursor-pointer peer-checked:text-primary"
              >
                Чи є у вас безкоштовний Wi-Fi?
              </label>
              <div class="collapse-content peer-checked:block" aria-labelledby="faq-3">
                <p>Так, у всіх зонах пансіонату доступний безкоштовний Wi-Fi.</p>
              </div>
            </div>
          </li>
          <li>
            <div class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-lg">
              <input type="checkbox" :id="'faq-4'" class="peer" />
              <label
                for="faq-4"
                class="collapse-title text-xl font-medium flex items-center cursor-pointer peer-checked:text-primary"
              >
                Чи можна забронювати номер онлайн?
              </label>
              <div class="collapse-content peer-checked:block" aria-labelledby="faq-4">
                <p>
                  Так, ви можете забронювати номер через наш сайт.
                  <router-link to="/booking" class="text-primary hover:underline"
                    >Забронювати зараз</router-link
                  >.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <FooterComp />
  </div>
</template>

<script setup>
import FooterComp from '../components/FooterComp.vue'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
onMounted(() => {
  AOS.init({
    duration: 1000,
    offset: 100,
    easing: 'ease-in-out',
    delay: 50,
    once: true,
  })
})
</script>

<style scoped>
.card {
  transition: transform 0.5s ease-in-out;
}
.card:hover {
  transform: scale(1.1);
}
</style>
