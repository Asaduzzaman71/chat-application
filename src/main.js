import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import App from './App.vue'
import { routes } from './route'
const history = createWebHistory();
const router = createRouter({
    history,
    routes: routes,
});
createApp(App).use(router).use(VueSweetalert2).mount("#app");

