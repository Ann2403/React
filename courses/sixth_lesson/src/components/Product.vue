<template>
    <div>
        <h2>Product title</h2>
        <div class="price">{{price}}</div>
        <br>
        <button class="btn btn-dark" @click='onMinus'>-</button>
        <button class="btn btn-dark" @click='onPlus'>+</button>
    </div>
</template>

<script>
    export default {
        computed: {
            price() {
                return this.$store.getters.price;
            }
        },
        methods: {
            onPlus() {
                this.$store.commit('plus');
            },
            onMinus() {
                this.$store.commit('minus');
            }
        }
    }
</script>