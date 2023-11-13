<template>
    <Accordion title="Work Experience">
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
    import { workExperienceInputNames } from '../../../types/section-inputs';

    import Accordion from '../../common/accordion-component.vue';
    import CustomInput from '../../common/input-component.vue';

    import { useCV } from '../../../composables/use-cv';

    const { updateField } = useCV();

    const inputs = [
        {
            name: workExperienceInputNames.start,
            type: inputTypes.DATE
        },
        {
            name: workExperienceInputNames.end,
            type: inputTypes.DATE
        },
        {
            name: workExperienceInputNames.title,
            type: inputTypes.TEXT
        }
    ];
</script>

<style scoped></style>
