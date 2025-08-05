<script setup>
import { ref, onMounted } from 'vue'

const currentTheme = ref('hill-light')

const applyTheme = (theme) => {
    const appEl = document.getElementById('app')
    if (!appEl) {
        console.warn('[ThemeSwitch] Не знайдено #app для зміни теми')
        return
    }

    appEl.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    currentTheme.value = theme
    console.log('[ThemeSwitch] Тема застосована:', theme)
}

const toggleTheme = () => {
    const newTheme = currentTheme.value === 'hill-light' ? 'hill-dark' : 'hill-light'
    applyTheme(newTheme)
}

onMounted(() => {
    const saved = localStorage.getItem('theme')
    const initialTheme = (saved === 'hill-dark' || saved === 'hill-light') ? saved : 'hill-light'
    applyTheme(initialTheme)
})
</script>

<template>
    <button class="btn btn-sm btn-outline" @click="toggleTheme"
        :aria-label="`Перемкнути тему на ${currentTheme === 'hill-light' ? 'темну' : 'світлу'}`">
        {{ currentTheme === 'hill-light' ? '🌙 Темна' : '🌞 Світла' }}
    </button>
</template>
