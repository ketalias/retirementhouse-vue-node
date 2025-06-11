<template>
  <div class="navbar bg-base-200 px-4">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="#">MyApp</a>
    </div>

    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><router-link to="/" class="btn btn-ghost">Головна</router-link></li>
        <li><router-link to="/about" class="btn btn-ghost">Про нас</router-link></li>
        <li><router-link to="/contact" class="btn btn-ghost">Контакти</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
</script>
