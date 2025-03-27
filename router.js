import { createRouter, createWebHistory } from 'vue-router';
import App from './app.vue';

const routes = [
	{
		path: '/',
		component: App,
		children: [{ path: '', redirect: '/home' }],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
