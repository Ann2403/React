import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        items(state) {
            return state.items;
        },
        productMap(state) {
            let productMap = {};

            for (let i = 0; i < state.items.length; i++) {
                let product = state.items[i];
                productMap[product.id_product] = product;
            }
            return productMap;
        },
        product: (state, getters) => (id) => {
            return getters.productMap[id];
        }
    },
    mutations: {
        loadProducts(state, data) {
            state.items = data;
        }
    },
    actions: {
        loadProducts(store) {
            Vue.http.get('products.php')
                .then(response => response.json())
                .then(data => {
                    store.commit('loadProducts', data)
                });
        }
    }
};

/*function getProducts() {
    return [
        {
            id_product: 15,
            title: 'Iphone 5',
            price: 20000
        },
        {
            id_product: 27,
            title: 'Iphone 6',
            price: 25000
        },
        {
            id_product: 38,
            title: 'Iphone 7',
            price: 30000
        }
    ]
}*/