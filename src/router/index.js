import {
	createRouter,
	createWebHashHistory,
	createWebHistory,
} from 'vue-router';
import store from '@/store';
import client from '@/services/axiosInstance';

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
			component: () => import('@/views/HomeView.vue'),
		},
		{
			path: '/spinner',
			name: 'spinner',
			meta: { requireAuth: true },
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
	window.scrollTo(0, 0);

	//* debug
	/* console.log('to : ', to);
	console.log('from : ', from);
	console.log('token : ', User.user.token);
	console.log('env : ', process.env.NODE_ENV); */

	//* Si on est pas connecté, on reste sur la page "login"
	if (to.meta.requireAuth && !User.user.token) {
		return {
			path: '/login',
		};
	}

	//* Si on est connecté, on ne retourne pas sur la page "login"
	//? pas faire attention au signe #, c'est pour la version android
	if (
		(to.fullPath == '#/login' || to.fullPath == '/login') &&
		User.user.token
	) {
		return {
			path: from.fullPath || '/',
		};
	}

	//? si isLogged & token sont false dans le store
	//? ET qu'on a bien un token en localstorage

	//? les deux premières sont pas forcément utiles
	//? puisqu'à l'init de l'app, le store est vide ...
	if (!User.isLogged && !User.user.token && localStorage.getItem('token')) {
		//* On check avec la route profile
		//* qui va juste nous renvoyer les infos de l'utilisateur
		//* si le token est valide
		// const response = store.dispatch('User/checkUser')
		store.commit('User/setLoadingCheckUser', true)
		client.get('/user/profile')
			.then((response) => {
				store.commit('User/initUser', {
					token: localStorage.getItem('token'),
					username: response.data.email,
					name: response.data.name,
				})
				router.push('/')
			})
			.catch((e) => {
				router.push('/login')
			})
			.finally(() => {
				setTimeout(() => {
					store.commit('User/setLoadingCheckUser', false)
				}, 200);
			});


		//todo A voir pour faire d'autres choses ici
		//todo en fonction de ce que nous retournera l'action
	}
});

export default router;
