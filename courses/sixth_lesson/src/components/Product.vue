<template>
    <div>
        <h2>Product title</h2>
        <div class="price">{{price}}</div>
        <br>
        <button class="btn btn-dark" @click='minus'>-</button>
        <button class="btn btn-dark" @click='plus'>+</button>
        <input type="text" :value="cnt" @input='onInput'>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'price',
                'cnt'
            ]),
            price() {
                return this.$store.getters.price;
            }
        },
        methods: {
            ...mapMutations([
                'plus',
                'minus'
            ]),
            onInput(e) {
                this.$store.commit('setCnt', e.target.value);
            }
            /*onPlus() {
                this.$store.commit('plus');
            },
            onMinus() {
                this.$store.commit('minus');
            }*/
        }
    }
</script>