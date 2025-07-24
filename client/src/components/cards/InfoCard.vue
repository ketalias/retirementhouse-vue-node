<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: false,
        default: null
    }
})
</script>
<template>
    <div class="card p-6 shadow rounded-xl space-y-3" data-aos="fade-up">
        <img v-if="icon" :src="icon" alt=""
            class="mx-auto h-15 w-15 text-primary transition-transform duration-500 hover:scale-110" />
        <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
        <p>{{ description }}</p>
    </div>
</template>
<style scoped>
.card {
    transition: transform 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
}
</style>
