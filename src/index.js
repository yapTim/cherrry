import { Vue } from 'vue';
import App from './components/App.vue';

Vue.createApp({
    template: `<h1>{{ greeting }}</h1>`,
    data() {
        return {
            greeting: 'Hello World'
        }
    }
}).mount('#app');
