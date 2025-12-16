<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/sections/HeroSection.vue'
import FormComp from '@/components/forms/FormComp.vue'
import FooterComp from '@/components/layout/FooterComp.vue'

const { t, tm } = useI18n()

const leisureImages = [
  '/img/leisure/5323571359231184903.jpg',
  '/img/leisure/5323571359231184904.jpg',
  '/img/leisure/5323571359231184906.jpg'
]

const isAnimating = ref(false)

function safeSlide(fn) {
  if (isAnimating.value) return
  isAnimating.value = true
  fn()
  setTimeout(() => (isAnimating.value = false), 400)
}


const currentIndex = ref(0)

const introParagraphs = computed(() => tm('leisure_page.intro.paragraphs'))
const highlights = computed(() => tm('leisure_page.highlights.items'))

const direction = ref('next')

function nextSlide() {
  direction.value = 'next'
  currentIndex.value = (currentIndex.value + 1) % leisureImages.length
}

function prevSlide() {
  direction.value = 'prev'
  currentIndex.value =
    (currentIndex.value - 1 + leisureImages.length) % leisureImages.length
}


const startX = ref(0)

function onTouchStart(e) {
  startX.value = e.touches[0].clientX
}

function onTouchEnd(e) {
  const endX = e.changedTouches[0].clientX
  const diff = startX.value - endX

  if (Math.abs(diff) <= 50) return

  safeSlide(() => {
    diff > 0 ? nextSlide() : prevSlide()
  })
}


</script>

<template>
  <div class="min-h-screen bg-base-100 text-base-content">
    <HeroSection titleKey="leisure_page.hero.title" subtitleKey="leisure_page.hero.subtitle" background="/no.png" />

    <div class="container mx-auto px-4 py-12 space-y-16">
      <section class="grid gap-10 md:grid-cols-2 items-start">
        <div class="space-y-5" data-aos="fade-up">
          <p class="uppercase text-sm tracking-[0.25em] text-primary/80 font-semibold">
            {{ t('leisure_page.hero.title') }}
          </p>
          <h2 class="text-3xl md:text-4xl font-bold">
            {{ t('leisure_page.intro.title') }}
          </h2>
          <p v-for="(paragraph, idx) in introParagraphs" :key="idx" class="text-lg leading-relaxed text-gray-700">
            {{ paragraph }}
          </p>
        </div>

        <div class="grid gap-4" data-aos="fade-up" data-aos-delay="150">
          <div v-for="(item, idx) in highlights" :key="idx" class="card shadow-lg bg-base-100 border border-base-200">
            <div class="card-body">
              <div class="flex items-start gap-4">
                <div
                  class="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {{ idx + 1 }}
                </div>
                <div class="space-y-2">
                  <h3 class="text-xl font-semibold">{{ item.title }}</h3>
                  <p class="text-base text-gray-700 leading-relaxed">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-6">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div class="space-y-2">
            <h3 class="text-2xl md:text-3xl font-bold">
              {{ t('leisure_page.gallery.title') }}
            </h3>
            <p class="text-gray-700 max-w-2xl">
              {{ t('leisure_page.gallery.caption') }}
            </p>
          </div>
          <div class="flex gap-2">
            <button class="btn btn-outline btn-primary" :aria-label="t('leisure_page.gallery.prev_label')"
              @click="prevSlide">
              ‹
            </button>
            <button class="btn btn-primary" :aria-label="t('leisure_page.gallery.next_label')" @click="nextSlide">
              ›
            </button>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-2xl shadow-2xl border border-base-200 touch-pan-y select-none"
          @touchstart="onTouchStart" @touchend="onTouchEnd">
          <transition :name="`slide-${direction}`" mode="out-in">
            <img :key="leisureImages[currentIndex]" :src="leisureImages[currentIndex]"
              class="w-full h-[22rem] md:h-[28rem] object-cover" />
          </transition>

        </div>
      </section>

      <section class="grid gap-6 md:grid-cols-[1.1fr_1fr] items-center">
        <div class="space-y-4" data-aos="fade-up">
          <h3 class="text-2xl md:text-5xl font-bold">
            {{ t('leisure_page.cta.title') }}
          </h3>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ t('leisure_page.cta.text') }}
          </p>
        </div>
        <FormComp data-aos="fade-up" data-aos-delay="120" />
      </section>
    </div>

    <FooterComp />
  </div>
</template>

<style scoped>
/* NEXT → */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease;
}

/* NEXT */
.slide-next-enter-from {
  transform: translateX(40px);
  opacity: 0;
}

.slide-next-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}

/* PREV */
.slide-prev-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}

.slide-prev-leave-to {
  transform: translateX(40px);
  opacity: 0;
}
</style>
