<template>
    <div class="columns mt-2">
        <div class="column">
            <ProductCard
                v-for="(product, index) in evenProducts"
                :key="index"
                :idx="index"
            />
        </div>
        <div class="column">
            <ProductCard
                v-for="(product, index) in oddProducts"
                :key="index"
                :idx="index"
            />
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
    name: 'Products',

    components: {
        ProductCard
    },

    data() {
        return {
            products: [{}, {}, {}, {}, {}, {}]
        };
    },

    computed: {
        // Broke products to display them in grid. Should be refactored to something more simple

        evenProducts() {
            return this.products.filter((_, index) => index % 2 === 0);
        },

        oddProducts() {
            return this.products.filter((_, index) => index % 2 !== 0);
        }
    }
};
</script>