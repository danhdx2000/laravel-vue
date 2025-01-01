<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="overflow-hidden overflow-x-auto p-6 bg-white border-b border-gray-200">
                    <div class="min-w-full align-middle">
                        <table class="min-w-full divide-y divide-gray-200 border">
                            <thead>
                                <tr>
                                    <th class="px-6 py-3 bg-gray-50 text-left">
                                        <span
                                            class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</span>
                                    </th>
                                    <th class="px-6 py-3 bg-gray-50 text-left">
                                        <span
                                            class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Content</span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                                <tr class="bg-white" v-for="product in products">
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                        {{ product.name }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                                        {{ product.content }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="mt-2">
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const products = ref([]);


onMounted(async () => {
    await axios.get('/api/products')
        .then(response => {
            products.value = response.data.data;
        })
        .catch(error => {
            console.log(error);
        });
})

</script>