<template>
    <div>Socials Section</div>
</template>

<script setup lang="ts">
    import { inputTypes } from '../../../types/input-types';
    import { socialInputNames } from '../../../types/section-inputs';

    const inputs = [
        {
            name: socialInputNames.LINKEDIN,
            type: inputTypes.TEXT
        },
        {
            name: socialInputNames.GITHUB,
            type: inputTypes.TEXT
        },
        {
            name: socialInputNames.INSTAGRAM,
            type: inputTypes.TEXT
        }
    ];
</script>

<style scoped></style>
