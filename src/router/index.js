import {
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from 'vue-router';
import store from '@/store';
import client from '@/services/axiosInstance';

import HomeView from '@/views/HomeView.vue'
import Header from '@/modules/common/components/Header.vue'

const { User } = store.state;

//? createWebHashHistory est obligatoire car android ne sait pas gérer la redirection d'url
const router = createRouter({
	history:
		process.env.NODE_ENV == 'development'
			? createWebHistory(process.env.BASE_URL)
			: createWebHashHistory(process.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			meta: { requireAuth: true },
			components: {
				default: HomeView,
				Header
			},
		},
		{
			path: '/gestion-essence',
			name: 'gestion-essence',
			meta: { requireAuth: true },
			component: () => import('@/views/GestionEssence/GestionEssenceView.vue'),
		},
		{
			path: '/gestion-essence/add-transaction',
			name: 'gestion-essence__add-transaction',
			meta: { requireAuth: true },
			component: () => import('@/views/GestionEssence/AddTransactionView.vue'),
		},
		{
			path: '/login',
			name: 'login',
			meta: { requireAuth: false },
			component: () => import('@/views/LoginView.vue'),
		},
		//TODO Faire une route pour la 404 ...
	],
});

router.beforeEach((to, from) => {
	window.scrollTo(0, 0);
	
	//* si on est sur la page login, on vide le state.core.viewsHistory
	// if (to.fullPath == '#/login' || to.fullPath == '/login')

	//* debug
	// console.log('to : ', to);
	// console.log('from : ', from);
	// console.log('token : ', User.user.token);
	// console.log('env : ', process.env.NODE_ENV);

	//* Si on est connecté, on ne retourne pas sur la page "login"
	//? pas faire attention au signe #, c'est pour la version android
	if ((to.fullPath == '#/login' || to.fullPath == '/login') && User.isLogged) {
		return {
			path: from.fullPath || '/',
		};
	}

	//* Si on est pas connecté et qu'on a pas de LS token, on reste sur la page "login"
	if (to.meta.requireAuth && !localStorage.getItem('token')) {
		return {
			path: '/login',
		};
	}

	//* Si on est toujours pas connecté MAIS qu'on a un token en LS
	if (!User.isLogged && localStorage.getItem('token')) {
		//* On check avec la route profile qui va juste nous renvoyer les infos de l'utilisateur si le token est valide
		store.commit('User/setLoadingCheckUser', true)
		client.get('/user/profile')
			.then((response) => {
				store.commit('User/setUser', {
					token: localStorage.getItem('token'),
					username: response.data.email,
					name: response.data.name,
				})
				router.push(to.fullPath == '/login' ? '/' : to.fullPath)
			})
			.catch((e) => {
				router.push('/login')
				localStorage.removeItem('token')
			})
			.finally(() => {
					store.commit('User/setLoadingCheckUser', false)
			});
	}
});

export default router;
