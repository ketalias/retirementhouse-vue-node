<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { i18next } from './config/i18n' 
import NavBar from './components/NavBar.vue'
import LoaderComp from './components/LoaderComp.vue'
import { RouterView } from 'vue-router'

const loading = ref(true)
const currentLang = ref(i18next.language)

function handleLangChange(lang) {
  currentLang.value = lang
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
  i18next.on('languageChanged', handleLangChange)
})

onBeforeUnmount(() => {
  i18next.off('languageChanged', handleLangChange)
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
