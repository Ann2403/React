<template>
	<div id="app" class="container">
		<question-1 v-if="showQuestion == 'one'" @changeRadio='radio($event, 0)' @clickBtn='clickBtn($event)'></question-1>

		<question-2 v-if="showQuestion == 'two'" @changeCheckbox='checkbox($event, 1)' @clickBtn='clickBtn($event)'></question-2>

		<div class='col-7 mx-auto mt-3'>
			<table class="table table-bordered">
				<tbody>
					<tr v-for="(obj, i) in info">
						<th>{{obj.name}}</th>
						<td>{{obj.value}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import Question1 from './components/Question1';
import Question2 from './components/Question2';

export default {
	components: {
		'question1': Question1,
		'question2': Question2
	},
	data() {
		return {
			info: [
				{
					name: "Твоя цель",
					value: ''
				},
				{
					name: "Что ты будешь делать",
					value: []
				}
			],
			showQuestion: 'one'
		}
	},
	methods: {
		radio(value, i) {
			this.info[i].value = value;
		},
		clickBtn(value) {
			value == 'two' ? this.showQuestion = value : this.showQuestion = value;
		},
		checkbox(value, i) {
			this.info[i].value.push(value);
		}
	}	
};
</script>