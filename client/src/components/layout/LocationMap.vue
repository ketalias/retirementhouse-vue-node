<script setup>
const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.5477764067433!2d22.297063376703575!3d48.62079321926145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473918f9ff25b231%3A0x8f3a7139b83b4e93!2z0YPQuy4g0J3QsNC00L7Qv9C-0YHRjNC60LAgMjMsINCh0L7QvdCw0YDRltCy0YHQutC-0LPQviwg0KPQutGA0LDRl9C90LAsINCa0LjRl9CyLCDQoNC10YHQvy4g0JfQsNCy0YDQuNC80LAg0YHRgtCw0LUsIDI5ODAw!5e0!3m2!1suk!2sua!4v1718280000001`
</script>
<template>
    <div class="shadow-xl overflow-hidden" data-aos="fade-up">
        <div class="card-body bg-white rounded-t-lg">
            <h2 class="card-title text-2xl mb-4">Наше місцезнаходження</h2>
        </div>
        <iframe :src="mapSrc" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>
