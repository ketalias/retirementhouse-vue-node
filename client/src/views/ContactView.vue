<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import FormComp from '../components/forms/FormComp.vue'
import FooterComp from '../components/layout/FooterComp.vue'
const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16532.83428476139!2d22.26337300209888!3d48.562344675908264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84960cd28aadeae1%3A0x38aa0e663a64f9e!2zUmVzdCBIaWxsIFZpbGxhL9CR0LDRgtGM0LrRltCy0YHRjNC60LjQuSDQlNGW0Lw!5e0!3m2!1suk!2sua!4v1765827764018!5m2!1suk!2sua"
import InfoCardsGrid from '@/components/grids/InfoCardsGrid.vue';
import { getCardsListInfo } from '@/data/cardsData.js'
import FaqAccordion from '@/components/sections/FaqAccordion.vue';
import { getFaqsContactItems } from '@/data/faqsData';
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
import { computed } from 'vue'

const cardsListInfo = computed(() => getCardsListInfo(t))
const faqsContactItems = computed(() => getFaqsContactItems(t))
const requirements = computed(() => tm('contact_page.vacancies.requirements'))
const responsibilities = computed(() => tm('contact_page.vacancies.responsibilities'))
const offer = computed(() => tm('contact_page.vacancies.offer'))
</script>
<template>
  <div class="min-h-screen bg-base-100">
    <HeroSection :titleKey="t('contact_page.hero.title')" :subtitleKey="t('contact_page.hero.subtitle')"
      background="/img/contact-bg.jpg" />
    <div class="max-w-6xl mx-auto py-16 px-4 space-y-12 text-lg">
      <InfoCardsGrid :cards="cardsListInfo" />
      <div class="shadow-xl overflow-hidden" data-aos="fade-up">
        <div class="card-body bg-white rounded-t-lg">
          <h2 class="card-title text-2xl mb-4">{{ t('contact_page.location_title') }}</h2>
        </div>
        <iframe :src="mapSrc" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-up">
        <img src="/img/home-gallery/item2.JPG" class="rounded-xl shadow" />
        <img src="/img/home-gallery/item1.JPG" class="hidden sm:block rounded-xl shadow" />
        <img src="/img/home-gallery/item7.JPG" class="hidden md:block rounded-xl shadow" />
      </div>
      <FaqAccordion :faqs="faqsContactItems" />

      <!-- Vacancies Section -->
      <div class="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 class="text-4xl font-bold mb-6 text-center" data-aos="fade-up">{{ t('contact_page.vacancies.title') }}</h2>
        <div class="shadow-xl bg-white rounded-lg overflow-hidden">
          <div class="card-body p-6 md:p-8 lg:p-10">
            <h3 class="text-xl md:text-2xl font-bold mb-6 text-primary text-center border-b border-base-300 pb-4">{{
              t('contact_page.vacancies.position') }}</h3>

            <div class="space-y-6">
              <!-- Requirements -->
              <div>
                <h5 class="text-lg md:text-xl font-semibold mb-3 text-primary">{{
                  t('contact_page.vacancies.requirements_title') }}</h5>
                <ul class="space-y-2">
                  <li v-for="(req, index) in requirements" :key="index"
                    class="flex items-start space-x-2 text-base md:text-lg text-base-content">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ req }}</span>
                  </li>
                </ul>
              </div>

              <!-- Responsibilities -->
              <div>
                <h5 class="text-lg md:text-xl font-semibold mb-3 text-primary">{{
                  t('contact_page.vacancies.responsibilities_title') }}</h5>
                <ul class="space-y-2">
                  <li v-for="(resp, index) in responsibilities" :key="index"
                    class="flex items-start space-x-2 text-base md:text-lg text-base-content">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ resp }}</span>
                  </li>
                </ul>
              </div>

              <!-- Offer -->
              <div>
                <h5 class="text-lg md:text-xl font-semibold mb-3 text-primary">{{
                  t('contact_page.vacancies.offer_title') }}</h5>
                <ul class="space-y-2">
                  <li v-for="(item, index) in offer" :key="index"
                    class="flex items-start space-x-2 text-base md:text-lg text-base-content">
                    <span class="text-primary mt-1">•</span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormComp />
    </div>
    <FooterComp />
  </div>
</template>
