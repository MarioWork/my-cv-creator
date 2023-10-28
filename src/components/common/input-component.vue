<template>
    <div class="input-group">
        <input
            :type="type"
            :name="name"
            class="input"
            required="false"
            v-model="inputValue"
        />
        <label class="label" :for="name">{{ name }}</label>
    </div>
</template>

<script setup lang="ts">
    import { watch, ref, toRefs, defineEmits } from 'vue';
    import { inputTypes } from '../../types/input-types';
    import { infoInputNames } from '../../types/section-inputs';
    import { sectionNames } from '../../types/section-names';

    interface propsType {
        type: inputTypes;
        name: infoInputNames;
    }

    const emits = defineEmits<{
        (
            e: 'on-change',
            section: sectionNames,
            field: infoInputNames,
            value: string
        ): void;
    }>();

    const props = defineProps<propsType>();

    const { type, name } = toRefs<propsType>(props);

    const inputValue = ref('');

    watch(inputValue, newValue => {
        emits('on-change', sectionNames.INFO, name.value, newValue);
    });
</script>

<style scoped>
    .input-group {
        position: relative;
        width: 80%;
    }

    .input {
        width: 100%;
        border: solid 0.1em var(--secondaryColor);
        border-radius: 1rem;
        background: none;
        padding: 1rem;
        font-size: 1rem;
        color: var(--textColor);
        transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .label {
        position: absolute;
        left: 1em;
        color: var(--textColor);
        pointer-events: none;
        transform: translateY(1em);
        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .input:focus,
    input:valid {
        outline: none;
        background-color: var(--backgroundColor);
    }

    .input:focus ~ label,
    input:valid ~ label {
        transform: translateY(-50%) scale(0.8);
        background-color: var(--backgroundColor);
        padding: 0 0.2em;
        color: var(--textColor);
    }
</style>
../../types/input-types
