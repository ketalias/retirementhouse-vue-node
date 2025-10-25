<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  startIndex: { type: Number, default: 0 }
})

const emit = defineEmits(['close'])
const currentIndex = ref(props.startIndex)

function next() {
  currentIndex.value =
    currentIndex.value < props.images.length - 1 ? currentIndex.value + 1 : 0
}

function prev() {
  currentIndex.value =
    currentIndex.value > 0 ? currentIndex.value - 1 : props.images.length - 1
}

function handleKey(e) {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

function handleClickOutside(e) {
  // якщо клік по самому фону, а не по зображенню або кнопках
  if (e.target.classList.contains('overlay')) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKey)
})
</script>

<template>
  <!-- overlay -->
  <div
    class="overlay fixed inset-0 flex items-center justify-center z-50 bg-black/50"
    @click="handleClickOutside"
  >
    <!-- хрестик -->
    <button
      class="absolute top-5 right-5 text-white text-3xl font-bold"
      @click.stop="emit('close')"
    >
      ✕
    </button>

    <div
      class="relative max-w-4xl w-full flex items-center justify-center"
      @click.stop
    >
      <!-- кнопка вліво -->
      <button
        class="absolute left-3 p-3 rounded-full bg-black/50 text-white text-2xl hover:bg-black/70 transition"
        @click="prev"
      >
        ‹
      </button>

      <!-- зображення -->
      <img
        :src="images[currentIndex]"
        class="max-h-[80vh] max-w-full rounded-lg shadow-lg object-contain"
      />

      <!-- кнопка вправо -->
      <button
        class="absolute right-3 p-3 rounded-full bg-black/50 text-white text-2xl hover:bg-black/70 transition"
        @click="next"
      >
        ›
      </button>
    </div>

    <!-- прев’ю -->
    <div class="absolute bottom-5 flex gap-2 overflow-x-auto px-4">
      <img
        v-for="(img, i) in images"
        :key="i"
        :src="img"
        class="h-20 w-32 object-cover rounded cursor-pointer border-2 transition"
        :class="i === currentIndex ? 'border-white' : 'border-transparent opacity-60'"
        @click="currentIndex = i"
      />
    </div>
  </div>
</template>
