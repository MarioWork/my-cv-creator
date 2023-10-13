<template>
    <div class="input-group">
        <input
            :type="type"
            :name="name"
            class="input"
            :value="value"
            required="false"
        />
        <label class="label" :for="name">{{ name }}</label>
    </div>
</template>

<script setup lang="ts">
    import { toRefs } from 'vue';
    import type { inputTypes } from '../../types/input-types';

    const props = withDefaults(
        defineProps<{ type: inputTypes; value?: string; name: string }>(),
        { value: '' }
    );

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
../../types/input-types
