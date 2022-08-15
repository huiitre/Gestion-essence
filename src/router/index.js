import { createRouter, createWebHistory } from 'vue-router';

//? La route / est temporaire, le temps de créer tous les composants, on s'occupera de l'authentification à la fin je pense
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/components/LoginView.vue'),
		},
	],
});

export default router;
