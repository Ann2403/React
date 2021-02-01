<template>
    <div>
        <h2>Cart</h2>
        <div v-if="empty" class="alert alert-dark">
            Your cart is empty
        </div>
        <template v-else>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in products">
                    <th>{{product.title}}</th>
                    <th>{{product.price}}</th>
                </tr>
                </tbody>
            </table>
            <button class="btn btn-dark" @click="onOrder">
                Order now
            </button>
        </template>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    computed: {
        ...mapGetters('cart', {
            productsInCart: 'products'
        }),
        ...mapGetters('products', {
            productsAll: 'items'
        }),
        products() {
            return this.productsAll.filter((elem) => {
                return this.productsInCart.indexOf(elem.id_product) !== -1;
            });
        },
        empty() {
            return this.products.length === 0;
        }
    },
    methods: {
        onOrder() {
            this.$router.push('/checkout');
        }
    }
}
</script>