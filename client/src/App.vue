<script setup>
import NavBar from './components/layout/NavBar.vue'
import { onMounted } from 'vue'
import LoaderComp from './components/layout/LoaderComp.vue'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const loading = ref(false)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>

<template>
  <div class="min-h-screen bg-white text-base-content">
    <div v-if="loading">
      <LoaderComp />
    </div>
    <div v v-else>
      <NavBar />
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
