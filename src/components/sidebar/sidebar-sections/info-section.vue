<template>
    <Accordion title="Personal Info">
        <div class="container">
            <CustomInput
                v-for="{ name, type } in inputs"
                :key="name"
                :name="name"
                :type="type"
            />
        </div>
    </Accordion>
</template>

<script setup lang="ts">
    import type { inputTypes } from '../../../types/input-types';

    import Accordion from '../../common/accordion-component.vue';
    import CustomInput from '../../common/input-component.vue';

    const inputs = [
        {
            name: 'First Name',
            type: inputTypes.TEXT
        },
        {
            name: 'Nationality',
            type: inputTypes.TEXT
        },
        {
            name: 'Birthday',
            type: inputTypes.TEXT
        },
        {
            name: 'Phone',
            type: inputTypes.TEL
        },
        {
            name: 'Email',
            type: inputTypes.EMAIL
        },
        {
            name: 'Location',
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
