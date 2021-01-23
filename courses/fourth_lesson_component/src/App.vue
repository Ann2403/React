<template>
	<div id="app" class="container">
		<div class="row">
			<div class="progress col-6 mx-auto mt-3">
				<div class="progress-bar" role="progressbar" :style='widthProgress'></div>
			</div>
			<br>
			<form v-if='showForm' class='col-7 mx-auto mt-3' v-on:submit.prevent="onSubmit">
				<app-input class="form-group" v-for='(obj, index) in info'
				:name='obj.name' :pattern='obj.pattern' :value='obj.value' :key='index'
				@changevalue='onChange(index, $event)'>

				</app-input>
				<button :disabled="count != 1" type="submit" class="btn btn-dark" @click='showForm=false'>Submit</button>
			</form>

			<div v-else class='col-7 mx-auto mt-3'>
				<table class="table table-bordered">
					<tbody>
						<tr v-for='obj in info'>
							<th>{{obj.name}}</th>
							<td> {{obj.value}} </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import AppInput from './components/Input.vue';

export default {
	components: {
		'appInput': AppInput
	},
	data() {
		return {
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
			showForm: true,
			disabledBtn: true,
			control: [],
			count: 0
		}
	},
	created() {
		for(let i = 0; i < this.info.length; i++) {
			this.control.push(false);
		}
	},
	methods: {
		onChange(index, data) {
			//записывываем значение переданное от "ребенка" в data
			this.info[index].value = data.value;
			this.control[index] = data.valid;
			let count = 0;
			for (let i = 0; i < this.control.length; i++) {
				if(this.control[i]) {
					count++;
				}
				this.count = count/this.info.length;
			}
		}
	},
	computed: {
		widthProgress() {
			let width = Math.floor(this.count * 100);
			return 'width: ' + width + '%';
		}
	}
};
</script>