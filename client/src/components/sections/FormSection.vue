<script setup>
import { ref } from 'vue'
import PriceCalcForm from '@/components/forms/PriceCalcForm.vue'
import { sendCalculatorForm } from '@/api'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const isFormOpen = ref(true)

const handleFormSubmit = (formData) => {
    sendCalculatorForm(formData)
        .then(() => {
            alert(t('home_page.form_section.thank_you_message'))
            isFormOpen.value = false
        })
        .catch((error) => {
            console.error('Помилка при надсиланні даних:', error)
            alert(t('common.form_submission_error'))
        })
}
</script>

<template>
    <section id="form-block" class="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center"
        style="background-image: url('/img/form-background.jpg');">
        <div class="absolute inset-0 bg-black/40"></div>
        <div
            class="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="text-white max-w-xl hidden md:block" data-aos="fade-right">
                <h2 class="text-4xl font-bold mb-4">{{ t('home_page.form_section.title') }}</h2>
                <p class="text-lg leading-relaxed">
                    {{ t('home_page.form_section.description') }}
                </p>
            </div>
            <div class="p-0 rounded-xl w-full md:w-[auto] max-w-full" data-aos="fade-up">
                <PriceCalcForm v-if="isFormOpen" mode="inline" @submitted="handleFormSubmit" />
                <p v-else class="text-white text-center text-xl font-semibold">
                    {{ t('home_page.form_section.thank_you_message') }}
                </p>
            </div>
        </div>
    </section>
</template>
