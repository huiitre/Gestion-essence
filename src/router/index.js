import { createRouter, createWebHistory } from 'vue-router';

//? La route / est temporaire, le temps de créer tous les composants, on s'occupera de l'authentification à la fin je pense
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			// meta: { requireAuth: true},
			component: () => import('@/views/HomeView.vue'),
		},
		{
			path: '/login',
			name: 'login',
			// meta: { requireAuth: false },
			component: () => import('@/views/LoginView.vue'),
		},
	],
});

/* router.beforeEach((to, from) => {
	console.log('to : ', to);
	console.log('from : ', from);
}); */

export default router;
