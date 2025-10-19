<template>
    <button @click="handleClick"
        class="p-1 gap-0 btn btn-primary rounded-[10px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center overflow-hidden"
        :class="[
            showText ? 'expanded' : '',
            props.type === 'call' ? 'w-9' : 'w-auto'
        ]">
        <component :is="iconComponent" class="h-7 w-7 flex-shrink-0" />

        <span v-if="label"
            class="hidden sm:inline-block w-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out text-left"
            :class="{ 'w-34 opacity-100': showText }">
            <span class="ml-1 whitespace-nowrap font-medium">{{ computedLabel }}</span>
        </span>
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useContact } from '@/composables/useContact'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    type: { type: String, required: true },
    label: { type: String },
    phoneNumber: { type: String, default: '+380961234567' }
})

const emit = defineEmits(['open'])

const showText = ref(false)
const { handleCall: baseCall } = useContact(props.phoneNumber)

const computedLabel = computed(() => {
    if (props.type === 'calculator') {
        return t('floating_buttons.calculate_cost_label')
    } else if (props.type === 'call') {
        return t('common.call_us')
    }
    return props.label
})

const handleClick = () => {
    if (props.type === 'call') {
        baseCall()
    } else if (props.type === 'calculator') {
        emit('open')
    }
}

const iconComponent = computed(() => {
    if (props.type === 'call') return PhoneIcon
    return CalculatorIcon
})

const handleScroll = () => {
    showText.value = window.scrollY > 100
}
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<script>
import { h } from 'vue'

export const PhoneIcon = {
    render() {
        return h('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            class: 'h-7 w-7',
            fill: 'none',
            viewBox: '0 0 24 24',
            stroke: 'currentColor'
        }, [
            h('path', {
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '1.5',
                d: 'M3 5a2 2 0 012-2h3.586a1 1 0 01.707.293l2.414 2.414a1 1 0 010 1.414L9.414 9.414a16.001 16.001 0 006.172 6.172l2.293-2.293a1 1 0 011.414 0l2.414 2.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
            })
        ])
    }
}

export const CalculatorIcon = {
    render() {
        return h('svg', {
            xmlns: 'http://www.w3.org/2000/svg',
            class: 'h-7 w-7',
            fill: 'none',
            viewBox: '0 0 24 24',
            stroke: 'currentColor'
        }, [
            h('path', {
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '1.5',
                d: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
            })
        ])
    }
}
</script>
