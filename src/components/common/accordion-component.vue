<template>
    <button @click.prevent="onClickHandler" class="header">
        {{ title }}
        <ChevronDown v-if="!showContent" class="icon"></ChevronDown>
        <ChevronUp v-else class="icon"></ChevronUp>
    </button>
    <div v-if="showContent" class="content">
        <slot></slot>
    </div>
</template>

<script setup>
    import ChevronDown from '../common/icons/chevron-down.vue';
    import ChevronUp from '../common/icons/chevron-up.vue';
    import { toRefs, ref } from 'vue';

    const showContent = ref(false);

    const props = defineProps({
        title: { type: String, required: true }
    });

    const { title } = toRefs(props);

    const onClickHandler = () => (showContent.value = !showContent.value);
</script>

<style scoped>
    .icon {
        margin-left: auto;
        width: 1.5rem;
    }
    .header {
        width: 100%;
        background-color: gray;
        color: white;
        font-size: 1rem;
        text-align: left;
        border: 0;
        padding: 1em 1em 1em 0.5em;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .content {
        background-color: gray;
        padding: 0.5em;
    }
</style>
