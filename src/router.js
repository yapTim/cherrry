import App from './components/App.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: App }
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
