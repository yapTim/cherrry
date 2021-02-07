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
                    <div class="is-flex is-align-items-center" @click="openSidebar = true">
                        <b-icon icon="cart-variant" size="is-medium"></b-icon>
                        <h5><strong>Cart</strong></h5>
                        <b-tag
                            class="ml-1"
                            rounded
                            type="is-primary"
                        >
                            12
                        </b-tag>
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
