import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';

Vue.use(VueRouter);

import ProductsLict from '../components/ProductsList';
import Cart from '../components/Cart';
import E404 from '../components/E404';
import Checkout from '../components/Checkout';
import Product from "@/components/Product";

const routes = [
	{
		path: '',
		redirect: {name: 'products'}
	},
	{
		path: '/products',
		name: 'products',
		component: ProductsLict,
		beforeEnter(from, to, next) {
			store.dispatch('products/loadProducts');
			next();
		}
	},
	{
		path: '/products/:id',
		component: Product
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/checkout',
		component: Checkout
	},
	{
		path: '*',
		component: E404
	}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
