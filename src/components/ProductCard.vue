<template>
    <div class="product-card card mt-4">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="src\assets\pictures\bracelet.jpg" alt="product-image" />
            </figure>
        </div>
        <div class="card-content is-flex">
            <div class="details">
                <h3 class="title is-4">{{ name }}</h3>
                <h5 class="subtitle">
                    PHP <span class="discounted">{{ formattedPrice }}</span> {{ discountedPrice }}
                </h5>
            </div>
            <div class="extra-tags">
                <span class="tag is-success">
                    {{ discountPercentage }}% Off!
                </span>
                <span class="tag is-warning">
                    Free Delivery!
                </span>
            </div>
        </div>
        <footer class="card-footer">
            <div class="card-footer-item">Buy Now</div>
            <div class="card-footer-item">Add to Cart</div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',

    props: {
        product: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            discount: '0',
            name: '',
            price: 0
        };
    },

    computed: {
        discountRate() {
            return 1 - parseFloat(this.discount);
        },

        discountPercentage() {
            return this.discountRate * 100;
        },

        discountedPrice() {
            return this.formatMoney(this.price * this.discountRate);
        },

        formattedPrice() {
            return this.formatMoney(this.price);
        }
    },

    watch: {
        product: {
            handler(product) {
                if (!product) return;

                const { discount, name, price } = product;

                this.discount = discount;
                this.name = name;
                this.price = price;
            },
            immediate: true
        }
    },

    methods: {
        formatMoney(amount) {
            return amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    }
}
</script>

<style>
.discounted {
    text-decoration: line-through;
    color: hsl(0, 0%, 76%);
}

.extra-tags {
    margin-left: auto;
    font-weight: bold;
}
</style>