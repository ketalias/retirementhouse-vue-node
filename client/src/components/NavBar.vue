<template>
  <nav class="navbar bg-white px-4 sticky top-0 z-50 shadow">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost normal-case text-xl italic"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        Панська Втіха</router-link
      >
    </div>
    <div class="lg:hidden">
      <details class="dropdown relative">
        <summary class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
          class="menu menu-sm fixed mt-[60px] top-0 left-0 w-full z-50 shadow bg-base-100 rounded-none"
        >
          <li>
            <router-link to="/" :class="linkClass('/')">Головна</router-link>
          </li>
          <li>
            <router-link to="/rooms" :class="linkClass('/rooms')">Номера</router-link>
          </li>
          <li>
            <router-link to="/contact" :class="linkClass('/contact')">Контакти</router-link>
          </li>
          <!-- <li>
            <router-link to="/about" :class="linkClass('/about')">Про нас</router-link>
          </li> -->
        </ul>
      </details>
    </div>
    <div class="hidden lg:flex">
      <ul class="menu menu-horizontal p-0 gap-2">
        <li>
          <router-link to="/" :class="linkClass('/')">Головна</router-link>
        </li>
        <li>
          <router-link to="/rooms" :class="linkClass('/rooms')">Номера</router-link>
        </li>
        <li>
          <router-link to="/contact" :class="linkClass('/contact')">Контакти</router-link>
        </li>
        <!-- <li>
          <router-link to="/about" :class="linkClass('/about')">Про нас</router-link>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const linkClass = (path) =>
  route.path === path ? 'btn btn-ghost border-b-2 border-primary text-primary' : 'btn btn-ghost'
</script>
