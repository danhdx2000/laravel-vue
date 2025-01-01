<script setup>
const props = defineProps({
    user: Object
});
</script>

<template>
    <h1>Hello, {{ user.name }}</h1>
</template>