<template>
    <main>
        <SideBarContainer></SideBarContainer>
        <CvContainer></CvContainer>
    </main>
</template>

<script setup>
    import SideBarContainer from '../components/sidebar-container';
    import CvContainer from '../components/cv-container';
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
</style>
