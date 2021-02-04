<template>
    <div class="container is-max-widescreen">
        <div></div>
        <Navbar />
    </div>
</template>

<script>
import Navbar from './Navbar.vue';

export default {
    name: 'App',

    components: {
        Navbar
    },

    data() {
        return {
            greeting: 'Greetings from Vue 2'
        };
    }
};
</script>
