<template>
    <div>
        <b-navbar>
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>
            <template #end>
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <button class="button is-primary" @click="openSidebar = true">
                            <strong>Cart</strong>
                        </button>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <Cart
            :open-sidebar="openSidebar"
            @cancel="cancelHandler"
        />
    </div>
</template>

<script>
import Cart from './Cart.vue';

export default {
    name: 'Navbar',

    components: {
        Cart
    },

    data() {
        return {
            openSidebar: false
        };
    },

    methods: {
        cancelHandler() {
            this.openSidebar = false;
        }
    }
}
</script>
