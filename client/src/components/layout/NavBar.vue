<template>
  <nav class="navbar bg-base-100 p-4 sticky top-0 z-50 shadow flex items-center justify-between">
    <!-- Дії зліва -->
    <div class="actions flex items-center gap-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="h-8 w-8 cursor-pointer text-primary" title="Змінити мову" aria-label="Змінити мову">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 0v19.5m-8.25-9.75h16.5M7.5 4.875c2.79 1.395 4.905 4.095 5.625 7.125H7.5V4.875zm0 14.25V14.25h5.625c-.72 3.03-2.835 5.73-5.625 7.125zm9-14.25v7.125h-5.625c.72-3.03 2.835-5.73 5.625-7.125zm0 14.25c-2.79-1.395-4.905-4.095-5.625-7.125H16.5v4.875z" />
      </svg>
    </div>

    <!-- Лого по центру -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <router-link to="/home" class="items-center">
        <img class="w-72" src="/img/logo/logo-large-transparent.png" alt="">
      </router-link>
    </div>

    <!-- Мобільне меню -->
    <div class="lg:hidden">
      <details class="dropdown relative" role="menu" aria-label="Навігаційне меню" ref="dropdown">
        <summary class="btn btn-ghost" aria-label="Відкрити або закрити меню" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </summary>
        <ul
          class="menu menu-sm fixed mt-[60px] top-0 left-0 w-full z-50 shadow bg-base-100 rounded-none transition-transform duration-300"
          role="menu">
          <li role="menuitem">
            <router-link to="/home" :class="linkClass('/home')" @click="closeDropdown">Головна</router-link>
          </li>
          <li role="menuitem">
            <router-link to="/rooms" :class="linkClass('/rooms')" @click="closeDropdown">Кімнати</router-link>
          </li>
          <li role="menuitem">
            <router-link to="/contact" :class="linkClass('/contact')" @click="closeDropdown">Контакти</router-link>
          </li>
          <li role="menuitem">
            <router-link to="/menu" :class="linkClass('/menu')" @click="
              closeDropdown">Меню</router-link>
          </li>
        </ul>
      </details>
    </div>

    <!-- Десктопне меню -->
    <div class="hidden lg:flex">
      <ul class="menu menu-horizontal p-0 gap-4">
        <li><router-link to="/home" :class="linkClass('/home')">Головна</router-link></li>
        <li><router-link to="/rooms" :class="linkClass('/rooms')">Кімнати</router-link></li>
        <li><router-link to="/menu" :class="linkClass('/menu')">Меню</router-link></li>
        <li><router-link to="/contact" :class="linkClass('/contact')">Контакти</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()
const dropdown = ref(null)

const linkClass = (path) =>
  route.path.startsWith(path)
    ? 'btn btn-ghost border-b-2 border-primary text-primary'
    : 'btn btn-ghost hover:border-b-2 hover:bg-base-200'


function closeDropdown() {
  if (dropdown.value) {
    dropdown.value.open = false
  }
}

router.afterEach(() => {
  if (dropdown.value) {
    dropdown.value.querySelector('summary').setAttribute('aria-expanded', dropdown.value.open)
  }
})
</script>

<style scoped>
.btn-ghost {
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-bottom 0.3s ease;
}
</style>
