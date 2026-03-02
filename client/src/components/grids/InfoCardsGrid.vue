<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
    <InfoCard
      v-for="(card, key) in localizedCards"
      :key="key"
      :title="card.title"
      :description="card.description"
      :icon="card.icon"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import InfoCard from '../cards/InfoCard.vue'

const { tm, rt } = useI18n()

const iconMap = {
  address: 'MapPin',
  phone: 'Phone',
  email: 'Mail'
}

const localizedCards = computed(() => {
  const rawCards = tm('contact_page.cards') 

  return Object.keys(rawCards).map((key) => {
    const card = rawCards[key]
    
    return {
      title: rt(card.title), 
      
      description: Array.isArray(card.description) 
        ? card.description 
        : rt(card.description),
        
      icon: iconMap[key] || 'Info'
    }
  })
})
</script>