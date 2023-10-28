<template>
    <div>{{ data }}</div>
</template>

<script setup lang="ts">
    import { useCV } from '../composables/use-cv';

    const { data } = useCV();
</script>

<style scoped></style>
