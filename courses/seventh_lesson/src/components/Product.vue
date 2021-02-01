<template>
    <div>
        <router-link :to="{name: 'products'}">Back to products</router-link>
        <hr>
        <h2 class="mt-3">{{product.title}}</h2>
        <div class="alert alert-dark">
            {{product.price}}
        </div>
    </div> 
</template>

<script>
    export default {
        computed: {
            id() {
                return this.$route.params.id;
            },
            product() {
                return this.$store.getters['products/product'](this.id);
            }
        }
    }
</script>