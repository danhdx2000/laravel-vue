<script setup>
const props = defineProps({
    user: Object
});
</script>

<template>
    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <h1 class="p-6 text-gray-900">Hello, {{ user.name }}</h1>
    </div>
</template>