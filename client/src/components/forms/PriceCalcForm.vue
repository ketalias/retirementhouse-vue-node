<template>
    <div v-if="mode === 'inline' || isOpen" :class="wrapperClass" @click="handleClickOutside">
        <div :class="formContainerClass" @click.stop>
            <div class="p-6 space-y-4">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-800">{{ t('price_calculator.title') }}</h2>
                    <button v-if="mode === 'modal'" @click="close" class="btn btn-ghost btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form @submit.prevent="submitForm" class="space-y-4">
                    <!-- Age -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('price_calculator.age_label') }}</label>
                        <div class="flex items-center space-x-4">
                            <input v-model="formData.age" type="range" min="50" max="100"
                                class="range range-primary range-xs flex-1" />
                            <span class="text-lg font-semibold">{{ formData.age }}</span>
                        </div>
                    </div>

                    <!-- Gender -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('price_calculator.gender_label') }}</label>
                        <div class="flex space-x-4">
                            <label class="flex items-center cursor-pointer">
                                <input v-model="formData.gender" type="radio" value="female"
                                    class="radio radio-primary mr-2" />
                                <span>{{ t('price_calculator.gender_options.female') }}</span>
                            </label>
                            <label class="flex items-center cursor-pointer">
                                <input v-model="formData.gender" type="radio" value="male"
                                    class="radio radio-primary mr-2" />
                                <span>{{ t('price_calculator.gender_options.male') }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- Mobility -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('price_calculator.mobility_label') }}</label>
                        <div class="flex flex-wrap gap-2">
                            <label v-for="option in mobilityOptions" :key="option.value"
                                class="flex items-center cursor-pointer">
                                <input v-model="formData.mobility" type="radio" :value="option.value"
                                    class="radio radio-primary mr-2" />
                                <span>{{ t('price_calculator.mobility_options.' + option.value) }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- Mental Health -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('price_calculator.mental_health_label') }}</label>
                        <div class="flex flex-wrap gap-2">
                            <label v-for="option in mentalHealthOptions" :key="option.value"
                                class="flex items-center cursor-pointer">
                                <input v-model="formData.mentalHealth" type="radio" :value="option.value"
                                    class="radio radio-primary mr-2" />
                                <span>{{ t('price_calculator.mental_health_options.' + option.value) }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- Room capacity -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('price_calculator.room_capacity_label') }}</label>
                        <div class="flex space-x-2">
                            <label v-for="num in [1, 2, 3, 4]" :key="num" class="flex items-center cursor-pointer">
                                <input v-model="formData.roomCapacity" type="radio" :value="num"
                                    class="radio radio-primary mr-2" />
                                <span>{{ num }}</span>
                            </label>
                        </div>
                    </div>

                    <!-- Telephone -->
                    <input v-model="formData.phone" type="tel" :placeholder="t('price_calculator.phone_placeholder')"
                        class="input input-bordered w-full" required ref="phoneInputRef" />

                    <!-- Submit -->
                    <div class="pt-4">
                        <button type="submit" class="btn btn-primary w-full" :disabled="!isFormValid">
                            {{ t('price_calculator.submit_button') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import IMask from 'imask'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
    isOpen: Boolean,
    mode: {
        type: String,
        default: 'inline'
    }
})
const emit = defineEmits(['close', 'submitted'])

const phoneInputRef = ref(null)
let phoneMask = null

const mobilityOptions = [
    { value: 'yes' },
    { value: 'no' },
    { value: 'with_help' }
]

const mentalHealthOptions = [
    { value: 'low' },
    { value: 'medium' },
    { value: 'high' }
]

watch(
    () => props.isOpen,
    (newVal) => {
        if (props.mode !== 'modal') return
        if (newVal) {
            initPhoneMask()
        } else {
            destroyPhoneMask()
            resetForm()
        }
    }
)

onMounted(() => {
    if (props.mode === 'inline') initPhoneMask()
})

onUnmounted(() => {
    destroyPhoneMask()
})

const initPhoneMask = () => {
    nextTick(() => {
        if (phoneInputRef.value) {
            phoneMask = IMask(phoneInputRef.value, {
                mask: '+{38}(000)000-00-00'
            })
        }
    })
}

const destroyPhoneMask = () => {
    if (phoneMask) {
        phoneMask.destroy()
        phoneMask = null
    }
}

const formData = ref({
    age: 75,
    gender: '',
    mobility: '',
    mentalHealth: '',
    roomCapacity: null,
    phone: ''
})

const isFormValid = computed(() => {
    return formData.value.gender &&
        formData.value.mobility &&
        formData.value.mentalHealth &&
        formData.value.roomCapacity &&
        formData.value.phone.length >= 17
})

const submitForm = () => {
    if (isFormValid.value) {
        emit('submitted', formData.value)
        if (props.mode === 'modal') emit('close')
    }
    resetForm()
}

const resetForm = () => {
    formData.value = {
        age: 75,
        gender: '',
        mobility: '',
        mentalHealth: '',
        roomCapacity: null,
        phone: ''
    }
}

const handleClickOutside = () => {
    if (props.mode === 'modal') emit('close')
}
const close = () => emit('close')

const wrapperClass = computed(() => {
    return props.mode === 'modal'
        ? 'fixed inset-0 z-40 flex items-center justify-center bg-gray-950/35 p-4 mt-15'
        : ''
})

const formContainerClass = computed(() => {
    return props.mode === 'modal'
        ? 'bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto'
        : 'bg-white rounded-xl shadow-md p-4 w-full max-w-3xl mx-auto m-4'
})
</script>
