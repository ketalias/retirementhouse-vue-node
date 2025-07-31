<script setup>
import { ref } from 'vue'
import PriceCalcForm from '@/components/forms/PriceCalcForm.vue'
import { sendUserData } from '@/api'

const isFormOpen = ref(true)

const handleFormSubmit = (formData) => {
    sendUserData(formData)
        .then(() => {
            alert('Дані успішно надіслані!')
            isFormOpen.value = false
        })
        .catch((error) => {
            console.error('Помилка при надсиланні даних:', error)
            alert('Сталася помилка. Спробуйте ще раз.')
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
                <h2 class="text-4xl font-bold mb-4">Залиште заявку прямо зараз</h2>
                <p class="text-lg leading-relaxed">
                    Ми підберемо найкращі умови розміщення для ваших близьких — з турботою, комфортом і
                    увагою до кожної деталі.
                </p>
            </div>

            <div class="p-0 rounded-xl w-full md:w-[auto] max-w-full" data-aos="fade-up">
                <PriceCalcForm v-if="isFormOpen" mode="inline" @submitted="handleFormSubmit" />
                <p v-else class="text-white text-center text-xl font-semibold">
                    Дякуємо! Ваша заявка прийнята.
                </p>
            </div>
        </div>
    </section>
</template>
