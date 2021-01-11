<template>
    <div class="container">
        <my-header></my-header>
        <h1> This is the id {{ $route.params.id}} </h1>
        <div class="row row-cols-1 row-cols-md-3">
            <div class="col-md-4 mt-3">
                <div class='card h-100'>
                    <img v-bind:src="product.image" class="card-img">
                    <div class="card-body">
                        <h2 v-text='product.title'></h2>
                        <p v-html='product.description'></p>
                    </div>
                    <div class="card-footer">
                        <p class="price">
                            {{ product.price }}
                        </p>
                        <button @click='edit'>Edit product</button>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myHeader from './Header.vue'
export default {
    components: { myHeader },
    data() {
        return {
            product: ''
        }
    },
    created: function() {
        axios.get('/static/products.json').then(response => {
            this.product = response.data.products.filter(data => data.id == this.$route.params.id)[0]
            this.product.image = '/' + this.product.image;
        });
    },
    methods: {
        edit() {
            this.$router.push({name: 'Edit'})
        }
    }
}
</script>