<template>
    <div class="card mt-2">
        <div class="card-image">
            <figure class="image is-5by4">
                <img src="src\assets\pictures\bracelet.jpg" alt="product-pic" />
            </figure>
        </div>
        <div class="card-content p-2 has-text-centered">
            <h5 class="title is-5">{{ name }}</h5>
            <h6 class="subtitle is-6">PHP {{ finalPrice }}</h6>
            <b-numberinput
                v-model="quantity"
                min="0"
                size="is-small"
                controls-rounded>
            </b-numberinput>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            discount: '0',
            name: '',
            price: 0,
            quantity: 0
        };
    },

    watch: {
        item: {
            handler(item) {
                if (!item) return;

                const { discount, name, price, quantity } = this.item;

                this.discount = discount;
                this.name = name;
                this.price = price;
                this.quantity = quantity;
            },
            immediate: true
        },

        quantity(quantity) {
            const payload = { itemId: this.item.pk, quantity };
            this.$emit('quantity-changed', payload);
        }
    },

    computed: {
        discountRate() {
            return 1 - this.discount;
        },

        itemPrice() {
            return this.price * this.discountRate
        },

        finalPrice() {
            return this.formatMoney(this.itemPrice * this.quantity);
        }
    },

    methods: {
        formatMoney(amount) {
            return amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    }
}
</script>