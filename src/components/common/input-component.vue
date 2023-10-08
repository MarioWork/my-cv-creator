<template>
    <div class="input-group">
        <input
            :type="type"
            :name="name"
            class="input"
            :value="value"
            required=""
        />
        <label class="label" :for="name">{{ name }}</label>
    </div>
</template>

<script setup>
    import { toRefs } from 'vue';
    import { inputTypes } from '../../utils/input-types';

    const props = defineProps({
        type: {
            type: String,
            required: true,
            validator: value => [Object.values(inputTypes)].includes(value)
        },
        value: { type: String, required: false, default: '' },
        name: { type: String, required: true }
    });

    const { type, value, name } = toRefs(props);
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
