<template>
    <div>
        <h2>Product</h2>
        <div class="row">
            <div class="col col-sm-4 mt-3" v-for="product in products">
                <router-link tag="h3" :to="'/products/' + product.id_product">
                    <a>{{product.title}}</a>
                </router-link>
                <div>{{product.price}}</div>
                <button v-if="inCart.indexOf(product.id_product) === -1" class="btn btn-dark" @click="addToCart(product.id_product)">
                    Add to cart
                </button>
                <button v-else class="btn btn-dark" @click="removeFromCart(product.id_product)">
                    Remove to cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
    /*created() {
        this.$store.dispatch('products/loadProducts');
    },*/
    computed: {
        ...mapGetters('products', {
            products: 'items'
        }),
        ...mapGetters('cart', {
            inCart: 'products'
        })
    },
    methods: {
        ...mapActions('cart', {
            addToCart: 'add',
            removeFromCart: 'remove'
        })
    }
}
</script>

<style scoped>
.row {
    padding-left: 15px;
}
</style>