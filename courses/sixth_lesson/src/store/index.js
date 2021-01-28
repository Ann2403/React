import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cnt: 0,
        price: 1000,
        orderState: null
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
        },
        orderState(state) {
            return state.orderState;
        }
    },
    mutations: {
        plus(state) {
            state.cnt++;
        },
        minus(state) {
            if(state.cnt > 0) {
                state.cnt--;
            }
        },
        orderDone(state) {
            state.orderState = 'done';
        },
        orderSend(state) {
            state.orderState = 'pending';
        },
        setCnt(state, payload) {
            payload = payload.replace(/[^0-9]/g, '');
            
            if(payload < 0) {
                payload = 0;
            }

            state.cnt = payload;
        }
    }, 
    actions: {
        sendOrder(store, payload) {
            store.commit('orderSend');

            setTimeout(() => {
                console.log(payload);
                store.commit('orderDone');
            }, 1000);
        }
    }
});