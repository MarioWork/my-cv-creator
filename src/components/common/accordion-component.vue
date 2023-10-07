<template>
    <button @click.prevent="onClickHandler" class="header">
        {{ title }}
    </button>
    <div v-if="showContent" class="content">
        <slot></slot>
    </div>
</template>

<script setup>
    import { toRefs, ref } from 'vue';

    const showContent = ref(false);

    const props = defineProps({
        title: { type: String, required: true }
    });

    const { title } = toRefs(props);

    const onClickHandler = () => (showContent.value = !showContent.value);
</script>

<style scoped>
    .header {
        width: 100%;
        background-color: gray;
        color: white;
        font-size: 1rem;
        text-align: left;
        border: none;
        padding: 1em 1em 1em 0.5em;
        cursor: pointer;
    }

    .content {
        background-color: gray;
        padding: 5em;
    }
</style>
