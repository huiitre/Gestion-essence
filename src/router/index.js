import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import store from '@/store';
import axios from 'axios';

const { User } = store.state

//? createWebHashHistory est obligatoire car android ne sait pas gérer la redirection d'url
const router = createRouter({
	history: process.env.NODE_ENV == 'development' ? createWebHistory(process.env.BASE_URL) : createWebHashHistory(process.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			meta: { requireAuth: true},
			component: () => import('@/views/HomeView.vue'),
		},
		{
			path: '/spinner',
			name: 'spinner',
			meta: { requireAuth: true},
			component: () => import('@/modules/common/components/Spinner.vue'),
		},
		{
			path: '/login',
			name: 'login',
			meta: { requireAuth: false },
			component: () => import('@/views/LoginView.vue'),
		},
	],
});

router.beforeEach((to, from) => {
	window.scrollTo(0, 0)

	//* debug
	console.log('to : ', to);
	console.log('from : ', from);
	console.log('token : ', User.user.token);
	console.log('env : ', process.env.NODE_ENV);

	//* Si on est pas connecté, on reste sur la page "login"
	if (to.meta.requireAuth && !User.user.token) {
		return {
			path: '/login',
		}
	}

	//* Si on est connecté, on ne retourne pas sur la page "login"
	//! Attention, ne pas se fier à la propriété "name" de l'objet "to" sous android, renvoie toujours "home"
	if ((to.fullPath == '#/login' || to.fullPath == '/login') && User.user.token) {
		return {
			path: from.fullPath || '/'
		}
	}
});

export default router;
