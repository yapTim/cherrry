import App from './components/App.vue';
import Beufy from 'buefy';
import Vue from 'vue';
import 'buefy/dist/buefy.css';

Vue.use(Beufy);

new Vue({
    el: "#app",
    render: h => h(App)
});
