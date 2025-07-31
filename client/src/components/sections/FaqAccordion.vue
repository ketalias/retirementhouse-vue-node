<template>
  <div class="faq-container max-w-6xl mx-auto" data-aos="fade-up">
    <h2 class="text-4xl font-bold mb-6 text-center" data-aos="fade-up">Поширені запитання</h2>
    <ul class="space-y-4" data-aos="fade-up">
      <li v-for="(faq, index) in faqs" :key="index">
        <div class="collapse collapse-arrow border border-base-300 bg-white rounded-lg">
          <input type="checkbox" :id="`faq-${index + 1}`" class="peer" />
          <label :for="`faq-${index + 1}`"
            class="collapse-title text-xl font-medium flex items-center cursor-pointer peer-checked:text-primary">
            {{ faq.question }}
          </label>
          <div class="collapse-content peer-checked:block hidden" :aria-labelledby="`faq-${index + 1}`">
            <template v-if="faq.isHtml">
              <p v-html="faq.answer"></p>
              <router-link v-if="faq.link" :to="faq.link" class="text-primary hover:underline">
                {{ faq.linkText || 'Детальніше' }}
              </router-link>
            </template>
            <template v-else>
              <p>{{ faq.answer }}</p>
            </template>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  faqs: {
    type: Array,
    required: true,
    validator(arr) {
      return arr.every(faq => 'question' in faq && 'answer' in faq)
    }
  }
})
</script>
