import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cnt: 1,
        price: 1000
    },
    getters: {
        cnt(state) {
            return state.cnt;
        },
        price(state) {
            return state.price;
        },
        totalPrice(state) {
            return state.cnt * state.price;
        }
    },
    mutations: {
        plus(state) {
            state.cnt++;
        },
        minus(state) {
            if(state.cnt > 1) {
                state.cnt--;
            }
        }
    }
});