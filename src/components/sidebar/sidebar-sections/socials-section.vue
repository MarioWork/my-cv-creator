<template>
    <div>Socials Section</div>
</template>

<script setup lang="ts">
    import { inputTypes } from '../../../types/input-types';
    import { infoInputNames } from '../../../types/section-inputs';

    const inputs = [
        {
            name: infoInputNames.FIRST_NAME,
            type: inputTypes.TEXT
        },
        {
            name: infoInputNames.LAST_NAME,
            type: inputTypes.TEXT
        },
        {
            name: infoInputNames.NATIONALITY,
            type: inputTypes.TEXT
        },
        {
            name: infoInputNames.BIRTHDAY,
            type: inputTypes.TEXT
        },
        {
            name: infoInputNames.PHONE,
            type: inputTypes.TEL
        },
        {
            name: infoInputNames.EMAIL,
            type: inputTypes.EMAIL
        },
        {
            name: infoInputNames.LOCATION,
            type: inputTypes.TEXT
        }
    ];
</script>

<style scoped></style>
