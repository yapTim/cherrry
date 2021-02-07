import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: () => import('./components/App.vue') },
    { path: '/', component: () => import('./components/Products.vue'), name: 'products-page' },
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
