<template>
    <main>
        <SideBarContainer></SideBarContainer>
        <CvContainer></CvContainer>
    </main>
</template>

<script setup lang="ts">
    import SideBarContainer from './components/sidebar/sidebar-container.vue';
    import CvContainer from './components/cv-container.vue';
</script>

<style scoped>
    main {
        display: grid;
        grid-template-columns: 30% 70%;
        height: 100dvh;
        width: 100dvw;
    }
</style>
