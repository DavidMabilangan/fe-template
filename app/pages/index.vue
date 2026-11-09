<script setup>
    import { defineAsyncComponent } from 'vue';

    const PageContent = defineAsyncComponent(() => import('~/components/pages/home/PageContent'))
</script>


<template>
    <PageContent/>
</template>