<script setup>
import { defineProps, computed } from 'vue'
import * as icons from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
const { t, te } = useI18n() 

const props = defineProps({
  title: { type: String, required: true },
  description: { type: [String, Array], required: true },
  icon: { type: String, required: false, default: null }
})

const IconComponent = computed(() => (props.icon && icons[props.icon] ? icons[props.icon] : null))

const isPhone = (text) => typeof text === 'string' && text.includes('+38')
const isEmail = (text) => typeof text === 'string' && text.includes('@')
const cleanPhone = (phone) => phone.replace(/[^\d+]/g, '')

const renderText = (val) => {
  if (typeof val !== 'string') return val
  return te(val) ? t(val) : val
}
</script>

<template>
  <div class="card p-6 shadow rounded-xl space-y-3 transition-transform duration-300 hover:-translate-y-1 bg-white text-center">
    
    <component :is="IconComponent" v-if="IconComponent" class="mx-auto h-10 w-10 text-primary" />

    <h3 class="text-xl font-semibold">{{ renderText(title) }}</h3>

    <div class="text-base-content/80">
      <template v-if="Array.isArray(description)">
        <div v-for="(item, i) in description" :key="i">
          <a v-if="isPhone(item)" :href="`tel:${cleanPhone(item)}`" class="block hover:text-primary">
            {{ item }}
          </a>
          <a v-else-if="isEmail(item)" :href="`mailto:${item}`" class="block hover:text-primary">
            {{ item }}
          </a>
          <span v-else>{{ renderText(item) }}</span>
        </div>
      </template>

      <p v-else>
        <a v-if="isEmail(description)" :href="`mailto:${description}`">{{ description }}</a>
        <span v-else>{{ renderText(description) }}</span>
      </p>
    </div>
  </div>
</template>