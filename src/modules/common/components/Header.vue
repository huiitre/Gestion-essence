<template>
	<header class="header">
    <div class="header__options">
      <router-link class="header__option__return" :to="getPreviousPage"><i class="header__option__return-icon bi bi-arrow-left-square"></i></router-link>
    </div>
		<h1 class="header__title">
			<span class="header__title-name">{{ getName }}</span>
		</h1>
		<div v-on:click="logout" class="header__disconnect">
			<i class="header__disconnect-icon bi bi-box-arrow-right"></i>
		</div>
	</header>
</template>

<script>
import { successToast } from './toasts';
export default {
	name: 'Header',
	computed: {
		getName() {
			return this.$store.getters['User/getName'];
		},
    getPreviousPage() {
      return this.$store.getters['Core/getPreviousPage']
    }
	},
	methods: {
		logout() {
			//* on appelle la mutation Logout
			this.$store.commit('User/logout');
			//* on redirige vers /login
			this.$router.push('/login');
			successToast('Vous êtes déconnecté !');
		},
	},
};
</script>

<style lang="scss" scoped>
.header {
	height: 3rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	top: 0;
	background-color: #305d8a;

	&__title {
		font-size: 1.2rem;
    padding-left: 1rem;

		&-name {
			font-weight: bold;
		}
	}

	&__disconnect {
    padding-right: 0.5rem;

		&-icon {
			font-size: 2rem;
		}
	}

  &__option {
    &__return {
      padding-left: 0.5rem;
      &-icon {
        font-size: 2rem;
        color: #fff;
      }
    }
  }
}
</style>
