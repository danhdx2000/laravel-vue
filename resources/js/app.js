import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
import { createApp } from 'vue';
import ComponentA from './components/ComponentA.vue';

const app = createApp({});

app.component('ComponentA', ComponentA);

app.mount("#app");