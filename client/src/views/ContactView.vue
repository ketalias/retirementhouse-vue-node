<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import FormComp from '../components/forms/FormComp.vue'
import FooterComp from '../components/layout/FooterComp.vue'
const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5433.541424373785!2d22.26879347623141!3d48.582473796251676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739193a81cfd231%3A0x47dbc078d8a27779!2z0LLRg9C7LiDQodCy0L7QsdC-0LTQuCwgNTAsINCg0L7Qt9GW0LLQutCwLCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDg5NDI0!5e0!3m2!1suk!2sua!4v1761415028864!5m2!1suk!2sua`
import InfoCardsGrid from '@/components/grids/InfoCardsGrid.vue';
import { getCardsListInfo } from '@/data/cardsData.js'
import FaqAccordion from '@/components/sections/FaqAccordion.vue';
import { getFaqsContactItems } from '@/data/faqsData';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { computed } from 'vue'

const cardsListInfo = computed(() => getCardsListInfo(t))
const faqsContactItems = computed(() => getFaqsContactItems(t))
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
        <img src="/img/home-gallery/item1.JPG" class="rounded-xl shadow" />
        <img src="/img/home-gallery/item7.JPG" class="rounded-xl shadow" />
      </div>
  <FaqAccordion :faqs="faqsContactItems" />
      <FormComp />
    </div>
    <FooterComp />
  </div>
</template>
