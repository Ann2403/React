<template>
	<div>
		<app-header></app-header>
		<div class="container">
			<div class="row" v-if='showForm'>
				<div class="progress col-6 mx-auto mt-3">
					<div class="progress-bar" role="progressbar" :style='widthProgress'></div>
				</div>
				<br>
				<app-form>
				</app-form>
			</div>
			<div v-else class='row col-7 mx-auto mt-3'>
				<table class="table table-bordered">
					<tbody>
						<tr v-for='(obj,index) in info' :key='index'>
							<th>{{obj.name}}</th>
							<td>{{obj.value}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	
</template>

<script>
import AppHeader from './components/Header';
import AppForm from './components/Form';
import {mapGetters} from 'vuex';

export default {
	components: {
		AppHeader,
		AppForm
	},
	computed: {
		...mapGetters([
			'info',
			'count',
			'btnName'
		]),
		widthProgress() {
			let width = Math.floor(this.count * 100);
			return 'width: ' + width + '%';
		},
		showForm() {
			return this.btnName != 'done' ? true : false
		}
	}
};
</script>