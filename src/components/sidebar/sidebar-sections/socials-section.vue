<template>
    <Accordion title="Socials"></Accordion>
    <div class="container">
        <CustomInput
            v-for="{ name, type } in inputs"
            :key="name"
            :name="name"
            :type="type"
            @on-change="updateField"
        />
    </div>
</template>

<script setup lang="ts">
    import { inputTypes } from '../../../types/input-types';
    import { socialInputNames } from '../../../types/section-inputs';

    import Accordion from '../../common/accordion-component.vue';
    import CustomInput from '../../common/input-component.vue';

    import { useCV } from '../../../composables/use-cv';

    const { updateField } = useCV();

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

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
</style>
