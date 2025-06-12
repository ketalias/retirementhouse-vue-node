<template>
  <div class="py-10 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-6xl font-bold text-center mb-8">Галерея</h2>

      <div class="flex flex-wrap justify-center gap-2 mb-6">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          class="btn text-xl"
          :class="{
            'btn-secondary': activeCategory === category,
            'btn-outline': activeCategory !== category,
          }"
        >
          {{ category }}
        </button>
      </div>

      <div class="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        <div
          v-for="(image, index) in filteredImages"
          :key="index"
          class="break-inside-avoid rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition"
          @click="open(index)"
        >
          <img :src="image.src" :alt="image.alt" class="w-full object-cover rounded-xl" />
        </div>
      </div>

      <vue-easy-lightbox
        :visible="showLightbox"
        :imgs="filteredImages.map((img) => img.src)"
        :index="lightboxIndex"
        @hide="showLightbox = false"
      />
    </div>
  </div>
</template>

<script setup>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, computed } from 'vue'

const categories = ['Всі', 'Кімнати', 'Догляд', 'Зовнішній вигляд']
const activeCategory = ref('Всі')

const images = [
  {
    src: '/img/hero-background.jpg',
    alt: 'Хол',
    category: 'Кімнати',
    slug: 'room-1',
  },
  {
    src: '/img/hero-background.jpg',
    alt: 'Сад',
    category: 'Зовнішній вигляд',
    slug: 'garden-view',
  },
  {
    src: '/img/hero-background.jpg',
    alt: 'Медперсонал',
    category: 'Догляд',
    slug: 'medical-care',
  },
  {
    src: '/img/hero-background.jpg',
    alt: 'Їдальня',
    category: 'Кімнати',
    slug: 'dining-room',
  },
  {
    src: '/img/hero-background.jpg',
    alt: 'Їдальня',
    category: 'Кімнати',
    slug: 'dining-room',
  },
  {
    src: '/img/hero-background.jpg',
    alt: 'Їдальня',
    category: 'Кімнати',
    slug: 'dining-room',
  },
]

const showLightbox = ref(false)
const lightboxIndex = ref(0)

const filteredImages = computed(() =>
  activeCategory.value === 'Всі'
    ? images
    : images.filter((img) => img.category === activeCategory.value),
)

function open(index) {
  lightboxIndex.value = index
  showLightbox.value = true
}
</script>

<style scoped>
img {
  transition: transform 0.3s ease;
}
</style>
