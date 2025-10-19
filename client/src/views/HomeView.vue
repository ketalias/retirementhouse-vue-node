<script setup>
/* --- External --- */
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

/* --- Composables --- */
import { useContact } from '@/composables/useContact'

/* --- API --- */
import { sendCalculatorForm } from '@/api'

/* --- Components --- */
import HeroSection from '@/components/sections/HeroSection.vue'
import GuestsTestimonials from '@/components/sections/GuestsTestimonials.vue'
import GalleryMasonry from '@/components/sections/GalleryMasonry.vue'
import FormSection from '@/components/sections/FormSection.vue'
import FooterComp from '@/components/layout/FooterComp.vue'
import FloatingFormButton from '@/components/ui/FloatingFormButton.vue'
import PriceCalcForm from '@/components/forms/PriceCalcForm.vue'
import InfoSection from '@/components/sections/InfoSection.vue'
import CareFeaturesGrid from '@/components/grids/CareFeaturesGrid.vue'


/* --- Data --- */
const { handleCall } = useContact()
const { t } = useI18n()

/* --- State --- */
const isFormOpen = ref(false)

/* --- Methods --- */
const handleFormSubmit = (formData) => {
  sendCalculatorForm(formData)
    .then(() => {
      alert(t('common.form_submission_success'))
      isFormOpen.value = false
    })
    .catch((error) => {
      console.error('Помилка при надсиланні даних:', error)
      alert(t('common.form_submission_error'))
    })
}

function handleCalculatePrice() {
  const element = document.querySelector('#form-block')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <main>
    <div class="fixed left-6 bottom-40 flex flex-col gap-2 z-30">
      <FloatingFormButton @open="isFormOpen = true" type="calculator" label="Розрахуйте вартість" />
      <FloatingFormButton type="call" />
    </div>
    <PriceCalcForm mode="modal" :isOpen="isFormOpen" @close="isFormOpen = false" @submitted="handleFormSubmit" />

    <!-- Hero Section -->
    <HeroSection 
      id="hero" 
      titleKey="home_page.hero.title"
      subtitleKey="home_page.hero.subtitle"
      background="/img/hero-background.jpg">
      
      <div class="buttons flex flex-col md:flex-row gap-2 w-full md:w-auto" data-aos="fade-up" data-aos-delay="400">
        <button @click="handleCalculatePrice" class="btn btn-primary w-full md:w-auto">
          {{ t('common.calculate_cost') }}
        </button>
        <button @click="handleCall" class="btn btn-secondary w-full md:w-auto" type="button"
          
          :title="t('home_page.hero.call_tooltip')">
          
          {{ t('common.call_us') }}
        </button>
      </div>
    </HeroSection>

    <CareFeaturesGrid />

    <FormSection @formSubmitted="handleFormSubmit" />

    <GuestsTestimonials />

    <InfoSection />

    <GalleryMasonry />

    <FooterComp />
  </main>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  [data-aos] {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>
