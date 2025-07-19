<template>
    <div>
        <!-- Floating Button -->
        <button @click="toggleForm"
            class="fixed bottom-60 left-6 z-30 btn btn-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center overflow-hidden"
            :class="{ 'expanded': showText }">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 flex-shrink-0" fill="none" viewBox="0 0 18 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span class="w-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out"
                :class="{ 'w-35 opacity-100': showText }">
                <span class="inline-block ml-2 whitespace-nowrap font-medium">Розрахуйте вартість</span>
            </span>
        </button>

        <!-- Form Modal -->
        <div v-if="isFormOpen" class="fixed inset-0 z-40 flex items-center justify-center bg-gray-950/35 p-4 mt-15"
            @click="closeForm">
            <div class="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto" @click.stop>
                <div class="p-6 space-y-4">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-gray-800">
                            Розрахунок вартості розміщення
                        </h2>
                        <button @click="closeForm" class="btn btn-ghost btn-circle btn-sm">
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
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Вік
                            </label>
                            <div class="flex items-center space-x-4">
                                <input v-model="formData.age" type="range" min="50" max="100"
                                    class="range range-primary range-xs flex-1" />
                                <span class="text-lg font-semibold">{{ formData.age }}</span>
                            </div>
                        </div>

                        <!-- Gender -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Стать
                            </label>
                            <div class="flex space-x-4">
                                <label class="flex items-center cursor-pointer">
                                    <input v-model="formData.gender" type="radio" value="female"
                                        class="radio radio-primary mr-2" />
                                    <span>Жіночий</span>
                                </label>
                                <label class="flex items-center cursor-pointer">
                                    <input v-model="formData.gender" type="radio" value="male"
                                        class="radio radio-primary mr-2" />
                                    <span>Чоловічий</span>
                                </label>
                            </div>
                        </div>

                        <!-- Mobility -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Може пересуватися?
                            </label>
                            <div class="flex flex-wrap gap-2">
                                <label class="flex items-center cursor-pointer">
                                    <input v-model="formData.mobility" type="radio" value="yes"
                                        class="radio radio-primary mr-2" />
                                    <span>Так</span>
                                </label>
                                <label class="flex items-center cursor-pointer">
                                    <input v-model="formData.mobility" type="radio" value="no"
                                        class="radio radio-primary mr-2" />
                                    <span>Ні</span>
                                </label>
                                <label class="flex items-center cursor-pointer">
                                    <input v-model="formData.mobility" type="radio" value="with_help"
                                        class="radio radio-primary mr-2" />
                                    <span>З допомогою</span>
                                </label>
                            </div>
                        </div>

                        <!-- Mental Health -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Ступінь психічних захворювань
                            </label>
                            <div class="flex flex-wrap gap-2">
                                <label class="flex items-center cursor-pointer">
                                    <input v-model="formData.mentalHealth" type="radio" value="low"
                                        class="radio radio-primary mr-2" />
                                    <span>Низька</span>
                                </label>
                                <label class="flex items-center cursor-pointer">
                                    <input v-model="formData.mentalHealth" type="radio" value="medium"
                                        class="radio radio-primary mr-2" />
                                    <span>Середня</span>
                                </label>
                                <label class="flex items-center cursor-pointer">
                                    <input v-model="formData.mentalHealth" type="radio" value="high"
                                        class="radio radio-primary mr-2" />
                                    <span>Висока</span>
                                </label>
                            </div>
                        </div>

                        <!-- Room Capacity -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Місць у кімнаті
                            </label>
                            <div class="flex space-x-2">
                                <label v-for="num in [1, 2, 3, 4]" :key="num" class="flex items-center cursor-pointer">
                                    <input v-model="formData.roomCapacity" type="radio" :value="num"
                                        class="radio radio-primary mr-2" />
                                    <span>{{ num }}</span>
                                </label>
                            </div>
                        </div>

                        <!-- Phone -->
                        <input v-model="formData.phone" type="tel" placeholder="+38(0__)___-__-__"
                            class="input input-bordered w-full" required ref="phoneInputRef" />

                        <!-- Submit Button -->
                        <div class="pt-4">
                            <button type="submit" class="btn btn-primary w-full" :disabled="!isFormValid">
                                Розрахувати вартість
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import IMask from 'imask'

const showText = ref(false)

const phoneInputRef = ref(null)
let phoneMask = null

const initPhoneMask = () => {
    nextTick(() => {
        if (phoneInputRef.value) {
            phoneMask = IMask(phoneInputRef.value, {
                mask: '+{38}(000)000-00-00'
            })
        }
    })
}

const handleScroll = () => {
    showText.value = window.scrollY > 100
}

const isFormOpen = ref(false)

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

const toggleForm = () => {
    isFormOpen.value = !isFormOpen.value
    if (isFormOpen.value) initPhoneMask()
}

const closeForm = () => {
    isFormOpen.value = false
    if (phoneMask) {
        phoneMask.destroy()
        phoneMask = null
    }
    resetForm()
}

const submitForm = () => {
    if (isFormValid.value) {
        console.log('Form submitted:', formData.value)
        emit('formSubmitted', formData.value)
        closeForm()
        resetForm()
    }
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

const emit = defineEmits(['formSubmitted'])
onMounted(() => {
    window.addEventListener('scroll', handleScroll)

})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.btn-circle {
    transition: all 0.3s ease;
}

.fixed {
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.bg-white {
    animation: slideUp 0.3s ease;
}

@keyframes slideUp {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>