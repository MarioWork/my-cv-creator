<template>
    <div class="container">
        <InfoSection></InfoSection>
    </div>
</template>

<script setup>
    import InfoSection from './sidebar-sections/info-section.vue';
</script>

<style scoped>
    .container {
        padding: 0.1em 0 0.1em 0;
        display: flex;
        flex-direction: column;
        gap: 0.1em;
    }
</style>
