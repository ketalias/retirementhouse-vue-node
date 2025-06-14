<template>
  <div class="min-h-screen">
    <div class="relative hero h-[60vh] bg-[url('/img/contact-bg.jpg')]">
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-4xl">
          <h1 class="mb-5 text-5xl md:text-8xl font-bold text-white">Наші контакти</h1>
          <p class="mb-5 text-2xl">
            Зв’яжіться з нами для отримання додаткової інформації чи запису
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto py-16 px-4 space-y-12 text-lg">
      <div class="grid md:grid-cols-3 gap-8">
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

      <div class="card shadow-xl overflow-hidden">
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
      <div class="grid md:grid-cols-3 gap-6 text-center">
        <div class="p-6 shadow rounded-xl space-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-auto h-12 w-12 text-primary transition-transform duration-300 hover:scale-110"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
            />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Жива підтримка</h3>
          <p>Ми відповідаємо на дзвінки та повідомлення без затримок.</p>
        </div>

        <div class="p-6 shadow rounded-xl space-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-auto h-12 w-12 text-primary transition-transform duration-300 hover:scale-110"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Комфорт та турбота</h3>
          <p>Наш пансіонат — затишне місце, де дбають про кожного.</p>
        </div>

        <div class="p-6 shadow rounded-xl space-y-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="mx-auto h-12 w-12 text-primary transition-transform duration-300 hover:scale-110"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 20.25V13.5H6.75a.75.75 0 01-.75-.75v-3A.75.75 0 016.75 9H9V5.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V9h2.25a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H13.5v6.75"
            />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Зручне розташування</h3>
          <p>Ми в самому серці Ужгорода з легкою доступністю.</p>
        </div>
      </div>
      <div class="card shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-6 text-center">Напишіть нам</h2>
          <form class="form-control flex flex-col space-y-4 max-w-xl mx-auto px-4">
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
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="../../public/img/hero-background.jpg" class="rounded-xl shadow" />
        <img src="../../public/img/hero-background.jpg" class="rounded-xl shadow" />
        <img src="../../public/img/hero-background.jpg" class="rounded-xl shadow" />
      </div>
      <div class="collapse collapse-arrow border border-base-300 bg-base-100">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Чи можна завітати без запису?</div>
        <div class="collapse-content">Так, ми приймаємо відвідувачів у робочі години.</div>
      </div>
    </div>

    <FooterComp />
  </div>
</template>

<script setup>
import FooterComp from '../components/FooterComp.vue'
</script>

<style scoped></style>
