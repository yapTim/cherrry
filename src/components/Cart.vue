<template>
    <section>
        <b-sidebar
            v-model="open"
            type="is-light"
            :fullheight="true"
            :right="true"
            :on-cancel="cancelHandler"
        >
            <div class="p-3">
                <div class="is-flex is-align-items-center">
                    <h3 class="cart-title">Cart</h3>
                    <button class="button is-small is-primary checkout-button">Checkout</button>
                </div>
                <div class="is-flex">
                    <h4 class="subtitle">Total</h4>
                    <h4 class="subtitle total-price">PHP {{ formattedTotal }}</h4>
                </div>
                <div class="column">
                    <CartItem
                        v-for="item in cartItems"
                        :key="item.pk"
                        :item="item"
                        @quantity-changed="quantityChangedHandler"
                    />
                </div>
            </div>
        </b-sidebar>
    </section>
</template>

<script>
import CartItem from './CartItem.vue';

export default {
    name: 'Cart',

    components: {
        CartItem
    },

    props: {
        openSidebar: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            open: false,
            // Prolly getting this from store later
            cartItems: [
                {
                    pk: 1,
                    name: 'Product Name',
                    price: 100,
                    discount: '0.5',
                    quantity: 1
                },
                {
                    pk: 2,
                    name: 'Product Name',
                    price: 200,
                    discount: '0.5',
                    quantity: 2
                }
            ]
        };
    },

    computed: {
        cartTotal() {
            return this.cartItems
                .reduce((total, item) => total += this.computeItemTotal(item), 0);
        },

        formattedTotal() {
            return this.formatMoney(this.cartTotal);
        }
    },

    watch: {
        openSidebar(openSidebar) {
            this.open = openSidebar;
        }
    },

    methods: {
        cancelHandler() {
            this.$emit('cancel');
        },

        formatMoney(amount) {
            return amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },

        computeItemTotal({ discount, price, quantity }) {
            const discountRate = 1 - discount;
            const finalPrice = price * discountRate;
            return finalPrice * quantity
        },

        quantityChangedHandler({ itemId, quantity }) {
            let item = this.cartItems.find(item => item.pk === itemId);
            if (!item) return;
            item.quantity = quantity;
        }
    }
}
</script>

<style scoped>
.checkout-button {
    margin-left: auto;
}

.cart-title {
    font-size: 1.75rem;
    font-weight: bold;
}

.total-price {
    margin-left: auto;
    font-weight: bold;
}
</style>