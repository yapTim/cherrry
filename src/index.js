import App from './components/App.vue';
import Beufy from 'buefy';
import Vue from 'vue';
import router from './router.js';
import 'buefy/dist/buefy.css';

Vue.use(Beufy);

new Vue({
    router,
    el: "#app",
    render: h => h(App)
});
