<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, availableLocales, t } = useI18n();
const route = useRoute()
const router = useRouter()
const dropdown = ref(null)

const linkClass = (path) =>
  route.path.startsWith(path)
    ? 'btn btn-ghost border-b-2 border-primary text-primary'
    : 'btn btn-ghost hover:border-b-2 hover:bg-base-200'

function changeLanguage(newLocale) {
  locale.value = newLocale;
  localStorage.setItem('user-locale', newLocale);
}

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
<template>
  <nav class="navbar bg-base-100 p-4 sticky top-0 z-50 shadow flex items-center justify-between">
    <div class="dropdown dropdown-start">
      <button tabindex="0" role="button" class="btn btn-ghost btn-circle"
        :aria-label="t('navbar.language_selection_label')">
        <img src="/icons/world.png" alt="Language selection" />
      </button>

      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-24 mt-4 z-[1] m-l-40">
        <li v-for="lang in availableLocales" :key="lang">
          <a @click="changeLanguage(lang)" :class="{ 'active': locale === lang }">
            {{ lang.toUpperCase() }}
          </a>
        </li>
      </ul>
    </div>

    <div class="absolute left-1/2 transform -translate-x-1/2">
      <router-link to="/home" class="items-center">
        <img class="w-72" src="/img/logo/logo-large-transparent.png" :alt="t('navbar.logo_alt')">
      </router-link>
    </div>

    <div class="lg:hidden">
      <details class="dropdown relative" role="menu" :aria-label="t('navbar.navigation_menu_label')" ref="dropdown">
        <summary class="btn btn-ghost" :aria-label="t('navbar.toggle_menu_label')" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </summary>
        <ul
          class="menu menu-sm fixed mt-[60px] top-0 left-0 w-full z-50 shadow bg-base-100 rounded-none transition-transform duration-300"
          role="menu">
          <li role="menuitem">
            <router-link to="/home" :class="linkClass('/home')" @click="closeDropdown">{{ t('navbar.nav_links.home')
              }}</router-link>
          </li>
          <li role="menuitem">
            <router-link to="/rooms" :class="linkClass('/rooms')" @click="closeDropdown">{{ t('navbar.nav_links.rooms')
              }}</router-link>
          </li>
          <li role="menuitem">
            <router-link to="/contact" :class="linkClass('/contact')" @click="closeDropdown">{{
              t('navbar.nav_links.contact') }}</router-link>
          </li>
          <li role="menuitem">
            <router-link to="/menu" :class="linkClass('/menu')" @click="closeDropdown">{{ t('navbar.nav_links.menu')
              }}</router-link>
          </li>
        </ul>
      </details>
    </div>

    <div class="hidden lg:flex">
      <ul class="menu menu-horizontal p-0 gap-4">
        <li><router-link to="/home" :class="linkClass('/home')">{{ t('navbar.nav_links.home') }}</router-link></li>
        <li><router-link to="/rooms" :class="linkClass('/rooms')">{{ t('navbar.nav_links.rooms') }}</router-link></li>
        <li><router-link to="/menu" :class="linkClass('/menu')">{{ t('navbar.nav_links.menu') }}</router-link></li>
        <li><router-link to="/contact" :class="linkClass('/contact')">{{ t('navbar.nav_links.contact') }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.btn-ghost {
  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-bottom 0.3s ease;
}
</style>
