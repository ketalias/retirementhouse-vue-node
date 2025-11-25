<template>
    <section :aria-label="t('home_page.testimonials.aria_label')" class="py-15 px-4 bg-base-100" data-aos="fade-up">
        <div class="max-w-5xl mx-auto text-center">
            <h2 class="text-4xl font-bold mb-12" data-aos="fade-up" data-aos-delay="100">
                {{ t('home_page.testimonials.title') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <blockquote
                    v-for="(guest, idx) in guestsList"
                    :key="idx"
                    class="card bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 max-w-md mx-auto"
                    data-aos="fade-up"
                    :data-aos-delay="100 * (idx + 1)"
                >
                    <img 
                        :src="`/img/granny${idx + 1}.jpg`" 
                        class="rounded-xl h-[200px] w-full object-cover"
                        :alt="guest.author" 
                    />
                    <p class="text-base-content text-lg leading-relaxed">
                        “{{ guest.quote }}”
                    </p>
                    <footer class="text-sm text-base-content/70 font-semibold">{{ guest.author }}</footer>
                </blockquote>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t, tm } = useI18n({ useScope: 'global' })
const guestsList = computed(() => tm('home_page.testimonials.guests'));
</script>

<style scoped>
.card {
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-15px);
}
</style>
