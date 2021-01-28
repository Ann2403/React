<template>
    <div class="mt-3">
        <label>
            {{info[this.index].name}}
            <i v-if='activated' :class="validClass"></i>
        </label>  
        <input type="text" class="form-control" v-on:input='change'>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    props: ['index'],
    computed: {
        ...mapGetters([
            'info'
        ]),
        validClass() {
            //проверяем валидность данных и меняем класс иконки
            return this.info[this.index].pattern.test(this.info[this.index].value) ? 'bi bi-check-circle-fill' : 'bi bi-exclamation-circle-fill'
        },
        activated() {
            return this.info[this.index].value != '';
        } 
    },
    methods: {
        change(e) {
            //вызываем событие changevalue и передаем параметр с значением value импута
            this.$store.commit('changeValue', {
                value: e.target.value, 
                index: this.index
            });
            this.$emit('changeValid', this.index);
        }
    }
};
</script>