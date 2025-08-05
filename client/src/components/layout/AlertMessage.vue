<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info', // success, error, warning, info
  },
  message: {
    type: String,
    required: true,
  },
  closable: {
    type: Boolean,
    default: true,
  }
})

const visible = ref(true)

const alertClass = computed(() => {
  return {
    success: 'alert-success',
    error: 'alert-error',
    warning: 'alert-warning',
    info: 'alert-info',
  }[props.type] || 'alert-info'
})
</script>

<template>
  <div v-if="visible" :class="['alert', alertClass, 'shadow-lg', 'text-sm']">
    <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
      viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M5 13l4 4L19 7" />
    </svg>

    <svg v-else-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
      viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M6 18L18 6M6 6l12 12" />
    </svg>

    <svg v-else-if="type === 'warning'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6"
      fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 9v2m0 4h.01M4.93 19h14.14a2 2 0 001.79-2.9L13.4 4.6a2 2 0 00-2.8 0L3.14 16.1a2 2 0 001.79 2.9z" />
    </svg>

    <svg v-else xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
      viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
    </svg>

    <span class="flex-1">{{ message }}</span>

    <button v-if="closable" class="btn btn-sm btn-ghost" @click="visible = false">✖</button>
  </div>
</template>
