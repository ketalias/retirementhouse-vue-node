<template>
    <button @click="$emit('open')"
        class="fixed bottom-60 left-6 z-30 btn btn-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center overflow-hidden"
        :class="{ 'expanded': showText }">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-shrink-0" fill="none" viewBox="0 0 18 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <span class="w-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out"
            :class="{ 'w-35 opacity-100': showText }">
            <span class="inline-block ml-2 whitespace-nowrap font-medium">Розрахуйте вартість</span>
        </span>
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showText = ref(false)

const handleScroll = () => {
    showText.value = window.scrollY > 100
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
