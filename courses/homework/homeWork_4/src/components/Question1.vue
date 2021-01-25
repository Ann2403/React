<template>
	<div>
		<h3>Какая твоя цель?</h3>
		<br>
		<div class="form-check" v-for="(value, key) in info" :key='key'>
			<input class="form-check-input" :id='key' type="radio" name='checkbox' :value="value"
				@change='answerChange'>
			<label class="form-check-label" :for='key'>
				{{value}}
			</label>
		</div>
		<br>
		<button class="btn btn-dark" @click="btn">Ответить</button>
	</div>
	
</template>

<script>
export default {
	data() {
		return {
			info: [
				'Оставаться какашкой',
				'Плыть по течению',
				'Пеменять мышление и сделать своб жизнь подвласной тебе и жить как хочешь ты!',
				'Собраться и учиться'
			]
		}
	},
	methods: {
		answerChange(e) {
			this.$emit('changeRadio', e.target.value);
		},
		btn(e) {
			this.$emit('clickBtn', 'two');
		}
	}
}
</script>