<script setup>
import { ref, nextTick, computed, onMounted, onUnmounted } from 'vue'
import { sendContactForm } from '@/api'
import IMask from 'imask'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const phoneInputRef = ref(null)
let phoneMask = null

const name = ref('')
const phone = ref('')
const message = ref('')
const isLoading = ref(false)
const error = ref(null)
const success = ref(false)

const isFormValid = computed(() => {
    return phone.value.trim().length >= 17 && name.value.trim() !== ''
})

async function onSubmit() {
    error.value = null
    success.value = false

    if (!phone.value) {
        error.value = t('common.form_submission_error')
        return
    }

    isLoading.value = true

    try {
        await sendContactForm({
            name: name.value,
            phone: phone.value,
            message: message.value,
        })
        success.value = true
        name.value = ''
        phone.value = ''
        message.value = ''
    } catch (e) {
        error.value = t('common.form_submission_error')
    } finally {
        isLoading.value = false
    }
}

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

onMounted(() => {
    initPhoneMask()
})

onUnmounted(() => {
    destroyPhoneMask()
})
</script>

<template>
    <div class="relative w-full min-h-[600px] py-16 flex justify-center bg-base-100 bg-cover bg-center bg-fixed items-center"
        data-aos="fade-up">
        <div class="card w-[90vw] max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl md:p-4 ">
            <div class="card-body">
                <h2 class="card-title text-3xl md:text-4xl mb-8 text-center text-primary-600 font-bold">
                    {{ t('home_page.form_section.title') }}
                </h2>
                <form class="form-control flex flex-col space-y-6 w-full" @submit.prevent="onSubmit">
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <!-- icon -->
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                            </svg>
                        </span>
                        <input type="text" :placeholder="t('form.name_placeholder')" v-model="name"
                            class="input input-bordered text-lg w-full bg-white pl-10 focus:ring-2 focus:ring-blue-500 transition duration-300" />
                    </div>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </span>
                        <input type="tel" :placeholder="t('form.phone_placeholder')" v-model="phone"
                            class="input input-bordered text-lg w-full bg-white pl-10 focus:ring-2 focus:ring-blue-500 transition duration-300"
                            required ref="phoneInputRef" />
                    </div>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-start pt-3 pl-3">
                            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </span>
                        <textarea
                            class="textarea textarea-bordered text-lg w-full bg-white pl-10 focus:ring-2 focus:ring-blue-500 transition duration-300"
                            :placeholder="t('form.message_placeholder')" rows="5" v-model="message"></textarea>
                    </div>
                    <button type="submit"
                        class="btn btn-primary text-lg w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                        :disabled="!isFormValid || isLoading">
                        {{ isLoading ? t('form.sending') : t('form.submit_button') }}
                    </button>
                    <p v-if="error" class="text-red-600 mt-2 text-center">{{ error }}</p>
                    <p v-if="success" class="text-green-600 mt-2">Дякуємо! Ваше повідомлення надіслано.</p>
                    <p v-if="success" class="text-green-600 mt-2">{{ t('form.success_message') }}</p>
                </form>
            </div>
        </div>
    </div>
</template>
