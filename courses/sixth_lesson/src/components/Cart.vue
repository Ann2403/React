<template>
    <div>
        Count product: {{ cnt }}
        <br>
        Total price: {{ totalPrice }}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: mapGetters([
            'cnt',
            'totalPrice'
        ])
    }
</script>