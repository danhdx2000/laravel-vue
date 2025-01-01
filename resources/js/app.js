import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
import { createApp } from 'vue';
import ComponentA from './components/ComponentA.vue';
import ProductComponent from './Pages/products/ProductComponent.vue';

const app = createApp({});

app.component('ComponentA', ComponentA)
    .component('ProductComponent', ProductComponent);

app.mount("#app");