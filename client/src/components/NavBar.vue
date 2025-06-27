<template>
  <nav
    class="navbar bg-white px-4 sticky top-0 z-50 shadow flex items-center justify-between"
    :key="currentLang"
  >
    <!-- Дії зліва -->
    <div class="actions flex items-center gap-4 relative">
      <img
        src="/icons/language-ico.svg"
        alt="Змінити мову"
        title="Змінити мову"
        class="h-8 w-8 cursor-pointer"
        @click="toggleLangSwitcher"
      />

      <!-- Сайдбар з мовами -->
      <transition name="fade">
        <div
          v-if="langSwitcherOpen"
          class="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg z-50 w-40"
        >
          <ul>
            <li
              v-for="(lang, code) in languages"
              :key="code"
              class="p-2 cursor-pointer hover:bg-gray-100"
              :class="{ 'font-bold text-primary': currentLang === code }"
              @click="changeLanguage(code)"
            >
              {{ lang.nativeName }}
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <!-- Лого по центру -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <router-link
        to="/home"
        class="btn btn-ghost normal-case text-xl italic flex items-center gap-2 hover:bg-transparent hover:text-inherit"
      >
        <span class="text-primary">Панська Втіха</span>
      </router-link>
    </div>

    <!-- Мобільне меню -->
    <div class="lg:hidden">
      <details class="dropdown relative" role="menu" aria-label="Навігаційне меню" ref="dropdown">
        <summary class="btn btn-ghost" aria-label="Відкрити або закрити меню" aria-expanded="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>
        <ul
          class="menu menu-sm fixed mt-[60px] top-0 left-0 w-full z-50 shadow bg-base-100 rounded-none transition-transform duration-300"
          role="menu"
        >
          <li role="menuitem">
            <router-link to="/home" :class="linkClass('/home')" @click="closeDropdown"
              >Головна</router-link
            >
          </li>
          <li role="menuitem">
            <router-link to="/rooms" :class="linkClass('/rooms')" @click="closeDropdown"
              >Номера</router-link
            >
          </li>
          <li role="menuitem">
            <router-link to="/contact" :class="linkClass('/contact')" @click="closeDropdown"
              >Контакти</router-link
            >
          </li>
          <!-- <li role="menuitem">
            <router-link to="/about" :class="linkClass('/about')" @click="closeDropdown"
              >Про нас</router-link
            >
          </li> -->
        </ul>
      </details>
    </div>

    <!-- Десктопне меню -->
    <div class="hidden lg:flex">
      <ul class="menu menu-horizontal p-0 gap-4">
        <li><router-link to="/home" :class="linkClass('/home')">Головна</router-link></li>
        <li><router-link to="/rooms" :class="linkClass('/rooms')">Номера</router-link></li>
        <li><router-link to="/contact" :class="linkClass('/contact')">Контакти</router-link></li>
        <!-- <li><router-link to="/about" :class="linkClass('/about')">Про нас</router-link></li> -->
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import i18next from 'i18next' // Якщо імпорт i18next не налаштовано, імпортуй відповідно до свого проекту

const route = useRoute()
const router = useRouter()
const dropdown = ref(null)

const linkClass = (path) =>
  route.path.startsWith(path)
    ? 'btn btn-ghost border-b-2 border-primary text-primary'
    : 'btn btn-ghost hover:border-b-2 hover:bg-gray-100'

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

// Для мовного свічера
const langSwitcherOpen = ref(false)
const languages = {
  en: { nativeName: 'English' },
  ua: { nativeName: 'Українська' },
  de: { nativeName: 'Deutsch' },
}

const currentLang = ref(i18next.language || 'en')

function toggleLangSwitcher() {
  langSwitcherOpen.value = !langSwitcherOpen.value
}

function changeLanguage(code) {
  i18next.changeLanguage(code)
  currentLang.value = code
  langSwitcherOpen.value = false
}
</script>

<style scoped>
.btn-ghost {
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-bottom 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
