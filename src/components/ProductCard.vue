<template>
    <div class="product-card card mt-4">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="src\assets\pictures\bracelet.jpg" alt="product-image" />
            </figure>
        </div>
        <div class="card-content is-flex">
            <div class="details">
                <h3 class="title is-4">Product Title</h3>
                <h5 class="subtitle">PHP <span class="discounted">100.00</span> 50.00</h5>
            </div>
            <span class="tag discount-tag is-success">
                50% Off!
            </span>
        </div>
        <footer class="card-footer">
            <div class="card-footer-item">Buy Now</div>
            <div class="card-footer-item">Add to Card</div>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',

    props: {
        idx: {
            type: Number,
        }
    }
}
</script>

<style>
.discounted {
    text-decoration: line-through;
    color: hsl(0, 0%, 76%);
}

.discount-tag {
    margin-left: auto;
}
</style>