<template>
    <div class="container is-max-widescreen">
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Products from './Products.vue';

export default {
    name: 'App',

    components: {
        Navbar,
        Products
    },

    data() {
        return {
            greeting: 'Greetings from Vue 2'
        };
    },

    created() {
        this.$router.replace({
            name: 'products-page'
        })
    }
};
</script>
