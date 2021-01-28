<template>
    <form class='col-7 mx-auto mt-3' v-on:submit.prevent>
        <app-input v-for='(obj, index) in info' :key='index' :index='index' @changeValid='changeValid($event)'>
            
        </app-input>
        <button :disabled="count != 1" type="submit" class="btn btn-dark mt-3" @click='btn'>{{btnName}}</button>
    </form>
</template>

<script>
import AppInput from './Input';
import {mapGetters} from 'vuex';

export default {
	components: {
		AppInput
    },
    computed: {
        ...mapGetters([
            'info',
            'count',
            'btnName'
        ])
    },
	data() {
		return {
            disabledBtn: true,
            control: []
		}		
    },
    created() {
		for(let i = 0; i < this.info.length; i++) {
			this.control.push(false);
		}
	},
	methods: {
		changeValid(index) {
            this.control[index] = this.info[index].pattern.test(this.info[index].value);
            let count = 0;
            for (let i = 0; i < this.control.length; i++) {
                if(this.control[i]) {
                    count++;
                }
                this.$store.commit('changeCount', count);
            }
        },
        btn(e) {
            this.$store.dispatch('sendForm');
        }
	}	
};
</script>