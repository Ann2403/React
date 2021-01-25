<template>
	<div>
		<h3>Что нужно делать для ее достижения?</h3>
		<br>
		<div class="form-check" v-for="(value, key) in info" :key='key'>
			<input class="form-check-input" :id='key' type="checkbox" :value="value"
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
				'Дальше псешить и думать что что-то изменится',
				'Начать хоть как-то пытаться юороться с негативными мыслями',
				'Учитсься и надеятся что само запомнится, при этом постоянно псешить',
				'Найти подход который позволить переключиться огда тебе говорят что ты псих',
				'Кричать на вою любовь когда она пытается помочь',
				'Начать читать инфушку как перестать зацикливаться на негативе',
				'Надеяться что кто-то поможет побороь псих и выучиться',
				'Во время учебы откидывать постороние мысли',
				'Взять все в свои руки и принять ответсвенность за свою жизнь'
			]
		}
	},
	methods: {
		answerChange(e) {
			this.$emit('changeCheckbox', e.target.value);
		},
		btn(e) {
			this.$emit('clickBtn', 'answer');
		}
	}
}
</script>