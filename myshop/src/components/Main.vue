<template>
    <div>
        <my-header :cartItemCount='cartItemCount'></my-header>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col-md-4 mt-3" v-for='product in sortedProducts'>
                    <div class='card h-100'>
                        <img v-bind:src="product.image" class="card-img">
                        <div class="card-body">
                            <router-link tag='h2' :to="{ name: 'Id', params: {id: product.id}}"> 
                                {{ product.title }}
                            </router-link>
                            <p v-html='product.description'></p>
                        </div>
                        <div class="card-footer">
                            <p class="price">
                                {{ product.price | formatPrice }}
                            </p>
                            <button type="button" class="btn btn-warning" v-on:click='addToCart(product)'
                                v-if="canAddToCart(product)">
                                Add
                            </button>
                            <button type="button" class="btn btn-warning" disabled v-else>
                                Add
                            </button>
                            <transition name='bounce' mode='out-in'>
                                <span class="ml-3 font-weight-bold"
                                v-if='product.availableInventory - cartCount(product.id) === 0' key='0'>
                                All Out!
                                </span>
                                <span class="ml-3 font-weight-bold"
                                    v-else-if='product.availableInventory - cartCount(product.id) < 3' key=''>
                                    Only {{product.availableInventory - cartCount(product.id)}} left!
                                </span>
                                <span class="ml-3 font-weight-bold" v-else>
                                    Buy Now!
                                </span>
                            </transition>
                            <div class="rating">
                                <span v-bind:class="{'rating-active' : checkRating(n, product)}"
                                    v-for="n in 5">☆</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import myHeader from './Header.vue';
import { mapGetters } from 'vuex';
import { productsRef } from '../firebase.js';
export default {
    name: 'iMain',
    firebase: {
        products: productsRef
    },
    data() {
        return {
            cart: []
        };
    },
    components: { myHeader },
    methods: {
        addToCart: function (aProduct) {
            this.cart.push(aProduct.id);
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            alert('Submitted');
        },
        checkRating(n, myProduct) {
            return myProduct.rating - n >= 0;
        },
        canAddToCart: function (aProduct) {
            return aProduct.availableInventory > this.cartCount(aProduct.id);
        },
        cartCount(id) {
            let count = 0;
            for (var i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        }
    },
    filters: {
        formatPrice: function (price) {
            if (!parseInt(price)) { return ""; }
            if (price > 99999) {
                var priceString = (price / 100).toFixed(2);
                var priceArray = priceString.split('').reverse();
                var index = 3;
                while (priceArray.length > index + 3) {
                    priceArray.splice(index + 3, 0, ',');
                    index += 4;
                }
                return priceArray.reverse().join('') + "грн";
            } else {
                return (price / 100).toFixed(2) + "грн";
            }
        }
    },
    computed: {
        ...mapGetters([
            'session'
        ]),
        cartItemCount: function () {
            return this.cart.length || '';
        },
        sortedProducts() {
            if (this.products.length > 0) {
                let productsArray = this.products.slice(0);
                function compare(a, b) {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
                    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
                    return 0;
                }
                return productsArray.sort(compare);
            }
        }
    },
    created: function() {
        this.$store.dispatch('initStore');
    }
}
</script>

<style scoped>
    .bounce-enter-active {
        animation: shake 0.72s cubic-bezier(.37, .07, .19, .97) both;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
    }

    @keyframes shake {
        10%, 90% {
            color: red;
            transform: translate3d(-1px, 0, 0);
        }

        20%, 80% {
            transform: translate3d(2px, 0, 0);
        }

        30%, 50%, 70% {
            color: red;
            transform: translate3d(-4px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(4px, 0, 0);
        }
    }
</style>