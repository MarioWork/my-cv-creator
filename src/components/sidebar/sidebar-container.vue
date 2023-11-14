<template>
    <div class="container">
        <InfoSection></InfoSection>
        <SocialsSection></SocialsSection>
        <WorkExpSection></WorkExpSection>
    </div>
</template>

<script setup lang="ts">
    import InfoSection from './sidebar-sections/info-section.vue';
    import SocialsSection from './sidebar-sections/socials-section.vue';
    import WorkExpSection from './sidebar-sections/work-experience.vue';
</script>

<style scoped>
    .container {
        padding: 0.1em 0 0.1em 0;
        display: flex;
        flex-direction: column;
        gap: 0.1em;
        overflow-y: scroll;
    }

    .container:first-child {
        padding-top: 0;
    }
</style>
