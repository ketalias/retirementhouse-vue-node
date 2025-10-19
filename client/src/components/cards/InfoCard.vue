<script setup>
import { defineProps } from 'vue'
import * as icons from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: false, default: null }
})

const IconComponent = props.icon && icons[props.icon] ? icons[props.icon] : null
</script>

<template>
    <div class="card p-6 shadow rounded-xl space-y-3 transition-transform duration-300 hover:-translate-y-1 bg-white text-center"
        data-aos="fade-up">
        <component :is="IconComponent" v-if="IconComponent" class="mx-auto h-10 w-10 text-primary" />
    <h3 class="text-xl font-semibold">{{ t(title) }}</h3>
    <p class="text-base-content/80">{{ t(description) }}</p>
    </div>
</template>
