<template>
    <div class="container is-fluid">
        <Navbar />
        <div class="container is-max-widescreen">
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
import Products from './Products.vue';

export default {
    name: 'App',

    components: {
        Footer,
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
