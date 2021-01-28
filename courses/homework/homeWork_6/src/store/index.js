import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        info: [
            {
                name: 'name',
                value: '',
                pattern: /^[a-zA-Z]{2,30}$/
            },
            {
                name: 'email',
                value: '',
                pattern: /.+/
            },
            {
                name: 'phone',
                value: '',
                pattern: /^[0-9]{7,14}$/
            },
            {
                name: 'some',
                value: '',
                pattern: /.+/
            }
        ],
        count: 0,
        btnName: 'Submit'
    },
    getters: {
        name(state) {
            return state.info[0];
        },
        info(state) {
            return state.info;
        },
        count(state) {
            return state.count;
        },
        btnName(state) {
            return state.btnName;
        }
    },
    mutations: {
        changeValue(state, payload) {
            //записывываем значение переданное от "ребенка" в data
            state.info[payload.index].value = payload.value;
        },
        changeCount(state, payload) {
            state.count = payload/state.info.length;
        },
        formDone(state) {
            state.btnName = 'done';
        },
        formSend(state) {
            state.btnName = 'loading...';
        }
    },
    actions: {
        sendForm(store) {
            store.commit('formSend');

            setTimeout(() => {
                store.commit('formDone');
            }, 1000);
        }
    }
});