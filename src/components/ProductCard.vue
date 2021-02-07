<template>
    <div class="product-card card mt-4">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="src\assets\pictures\bracelet.jpg" alt="product-image" />
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                This is a product {{ idx }}
            </div>
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