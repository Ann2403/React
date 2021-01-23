<template>
	<div class="form-group">
		<label>
			{{ name }}
			<i v-if="activated" :class="validClass"></i>
		</label>
		<input type="text" class="form-control" @input="change" />
	</div>
</template>

<script>
export default {
	props: ['name', 'value', 'pattern'],
	methods: {
		change(e) {
			this.activated = true;
			//вызываем событие changevalue и передаем параметр с значением value импута
			this.$emit('changevalue', {
				value: e.target.value, 
				valid: this.pattern.test(e.target.value)
			});
		}
	},
	data() {
		return {
			activated: this.value != ''
		}
	},
	computed: {
		validClass() {
			//проверяем валидность данных и меняем класс иконки
			return this.pattern.test(this.value) ? 'bi bi-check-circle-fill' : 'bi bi-exclamation-circle-fill'
		}
	}
}
</script>