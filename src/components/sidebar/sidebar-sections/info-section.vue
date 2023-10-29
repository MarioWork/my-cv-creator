<template>
    <Accordion title="Personal Info">
        <div class="container">
            <CustomInput
                v-for="{ name, type } in inputs"
                :key="name"
                :name="name"
                :type="type"
                @on-change="updateField"
            />
        </div>
    </Accordion>
</template>

<script setup lang="ts">
    import { inputTypes } from '../../../types/input-types';
    import { infoInputNames } from '../../../types/section-inputs';

    import Accordion from '../../common/accordion-component.vue';
    import CustomInput from '../../common/input-component.vue';

    import { useCV } from '../../../composables/use-cv';

    const { updateField } = useCV();

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

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
</style>
