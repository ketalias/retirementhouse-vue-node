<script setup>
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import RoomCard from '@/components/RoomCard.vue'
import FormComp from '@/components/FormComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { onMounted } from 'vue'

const visible = ref(false)
const activeIndex = ref(0)
const lightboxImageIndex = ref(0)

function openLightbox(index) {
  activeIndex.value = index
  lightboxImageIndex.value = 0
  visible.value = true
}

function prevImage() {
  if (lightboxImageIndex.value > 0) {
    lightboxImageIndex.value--
  }
}

function nextImage() {
  if (lightboxImageIndex.value < rooms[activeIndex.value].images.length - 1) {
    lightboxImageIndex.value++
  }
}

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100,
  })
})

const rooms = [
  {
    id: 1,
    title: 'Кімната №1',
    description: 'Світла кімната з видом на сад.',
    features: ['2 ліжка', 'Санвузол у номері', 'ТВ'],
    images: ['/img/hero-background.jpg', '/img/galleryitem1.jpg', '/img/granny1.jpeg'],
  },
  {
    id: 2,
    title: 'Кімната №2',
    description: 'Комфортна кімната для однієї особи.',
    features: ['1 ліжко', 'Вікно на південь', 'Wi-Fi'],
    images: ['/img/galleryitem1.jpg', '/img/granny1.jpeg'],
  },
  {
    id: 3,
    title: 'Кімната №3',
    description: 'Простора кімната з індивідуальним дизайном.',
    features: ['3 ліжка', 'Окрема тераса'],
    images: ['/img/hero-background.jpg', '/img/galleryitem1.jpg', '/img/granny1.jpeg'],
  },
  {
    id: 1,
    title: 'Кімната №1',
    description: 'Світла кімната з видом на сад.',
    features: ['2 ліжка', 'Санвузол у номері', 'ТВ'],
    images: ['/img/hero-background.jpg', '/img/galleryitem1.jpg', '/img/granny1.jpeg'],
  },
  {
    id: 1,
    title: 'Кімната №1',
    description: 'Світла кімната з видом на сад.',
    features: ['2 ліжка', 'Санвузол у номері', 'ТВ'],
    images: ['/img/hero-background.jpg', '/img/galleryitem1.jpg', '/img/granny1.jpeg'],
  },
  {
    id: 1,
    title: 'Кімната №1',
    description: 'Світла кімната з видом на сад.',
    features: ['2 ліжка', 'Санвузол у номері', 'ТВ'],
    images: ['/img/hero-background.jpg', '/img/galleryitem1.jpg', '/img/granny1.jpeg'],
  },
]
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="min-h-screen bg-white">
      <div class="relative hero h-[40vh] bg-[url('/img/rooms-bg.jpg')] bg-cover bg-center" data-aos="fade-in">
        <div class="absolute inset-0 bg-black/60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-4xl">
            <h1 class="mb-5 text-5xl md:text-8xl font-bold text-white" data-aos="fade-up">Номери</h1>
          </div>
        </div>
      </div>
      <div class="container mx-auto px-4 my-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(room, index) in rooms" :key="room.id" @click="openLightbox(index)" class="cursor-pointer"
            data-aos="fade-up" data-aos-delay="100">
            <RoomCard :image="room.images[0]" :title="room.title" :description="room.description"
              :features="room.features" />
          </div>
        </div>
      </div>
    </div>

    <vue-easy-lightbox :visible="visible" :imgs="rooms[activeIndex]?.images || []" :index="lightboxImageIndex"
      @hide="visible = false" @on-prev="prevImage" @on-next="nextImage" />
    <FormComp />
    <FooterComp />
  </div>
</template>
