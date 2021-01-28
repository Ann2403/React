<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col col-sm-12">
                    <app-product>
                    </app-product>
                    <div class="form-group mt-3">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model='name'>
                    </div>
                    <div class="form-group mt-3">
                        <label>Phone</label>
                        <input type="text" class="form-control" v-model='phone'>
                    </div>
                    <hr>
                    <button class='btn btn-dark' :disabled='btnDisabled' @click='onOrder'>
                        {{btnText}}
                    </button>
                    <div class="alert alert-dark mt-3" v-if="showResult">
                        Your order is done!
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import AppProduct from './Product';
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                name: '',
                phone: ''
            }
        },
        computed: {
            ...mapGetters([
                'cnt',
                'orderState'
            ]),
            btnDisabled() {
                return this.cnt < 1 || this.orderState !== null;
            },
            btnText() {
                return this.orderState == null ? 'Order now' : this.orderState;
            },
            showResult() {
                return this.orderState == 'done'
            }
        },
        components: {
            AppProduct
        },
        methods: {
            onOrder() {
                this.$store.dispatch('sendOrder', {
                    name: this.name,
                    phone: this.phone
                });
            }
        }
    }
</script>