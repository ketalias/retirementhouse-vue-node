<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
