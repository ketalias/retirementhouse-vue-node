<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  startIndex: { type: Number, default: 0 }
})

const emit = defineEmits(['close'])

const currentIndex = ref(props.startIndex)

function next() {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.images.length - 1
  }
}

function handleKey(e) {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
    <button class="absolute top-5 right-5 text-white text-3xl font-bold" @click="emit('close')">
      ✕
    </button>

    <div class="relative max-w-4xl w-full flex items-center justify-center">
      <button class="absolute left-3 p-3 rounded-full bg-black/50 text-white text-2xl hover:bg-black/70 transition"
        @click="prev">
        ‹
      </button>

      <img :src="images[currentIndex]" class="max-h-[80vh] max-w-full rounded-lg shadow-lg object-contain" />

      <button class="absolute right-3 p-3 rounded-full bg-black/50 text-white text-2xl hover:bg-black/70 transition"
        @click="next">
        ›
      </button>
    </div>

    <div class="absolute bottom-5 flex gap-2 overflow-x-auto px-4">
      <img v-for="(img, i) in images" :key="i" :src="img"
        class="h-20 w-32 object-cover rounded cursor-pointer border-2 transition"
        :class="i === currentIndex ? 'border-white' : 'border-transparent opacity-60'" @click="currentIndex = i" />
    </div>
  </div>
</template>
