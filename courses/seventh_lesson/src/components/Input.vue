<template>
    <div class="mt-3">
        <label>
            {{name}}
            <i v-if='activated' :class="validClass"></i>
        </label>  
        <input type="text" class="form-control" v-on:input='change'>
    </div>
</template>

<script>
export default {
    props: ['value', 'pattern', 'name'],
    data() {
        return {
            activated: this.value !== ''
        }
    },
    computed: {
        validClass() {
            //проверяем валидность данных и меняем класс иконки
            return this.pattern.test(this.value) ? 'bi bi-check-circle-fill' : 'bi bi-exclamation-circle-fill'
        }
    },
    methods: {
        change(e) {
            this.activated = true;
            this.$emit('changeValid', {
                value: e.target.value,
                valid: this.pattern.test(e.target.value)
            });
        }
    }
};
</script>