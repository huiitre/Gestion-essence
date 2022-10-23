<script>
import Input from '@/modules/common/components/form/Input.vue'

export default {
	name: 'Login',
	components: {
		Input,
	},
	data() {
		return {
			credentials: {
				username: '',
				password: ''
			},
		}
	},
	computed: {
		protocol: {
			get() {
				return this.$store.state.protocol
			},
			set(value) {
				this.$store.commit('Core/setProtocol', value)
			}
		}
	},
	methods: {
		handleChangeInput(data) {
			this.credentials[data.name] = data.value
		},
		handleSubmit() {
			//* on envoie les credentials utilisateur
			this.$store.dispatch('User/login', this.credentials);
		},
		setApiUrl(data) {
			this.$store.commit('Core/setApiUrl', data.value);
		},
		setProtocol(data) {
			this.$store.commit('Core/setProtocol', data.value);
		}
	}
};
</script>

<template>
	<div class="login">
		<!-- <h1 class="login__title">Gestion Essence</h1> -->
		<form @submit.prevent="handleSubmit" class="login__form">
			<div class="login__form__username">
				<Input
					name="username"
					label="Identifiant"
					inputClass=""
					inputType="text"
					inputPlaceHolder="Identifiant"
					inputId="username"
					@onChangeValue="handleChangeInput"
				/>
			</div>
			<div class="login__form__password">
				<Input
					name="password"
					label="Mot de passe"
					inputClass=""
					inputType="password"
					inputPlaceHolder="Mot de passe"
					inputId="password"
					@onChangeValue="handleChangeInput"
				/>
			</div>
			<div class="login__form__apiUrl">
				<Input
					name="apiUrl"
					label="URL API"
					inputClass=""
					inputType="text"
					inputPlaceHolder="Url de l'api"
					inputId="apiUrl"
					@onChangeValue="setApiUrl"
				/>
			</div>
			<div class="login__form__protocol">
				<input v-model="protocol" value="http" id="http" type="radio" name="protocol" />
				<label for="http">HTTP</label>

				<input v-model="protocol" value="https" id="https" type="radio" name="protocol" />
				<label for="https">HTTPS</label>
			</div>
			<div class="login__form__submit">
				<button type="submit" class="login__form__submit-button">Se connecter</button>
			</div>
		</form>
	</div>
</template>

<style lang="scss">
//* composant login
.login {
	// height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	//* titre H1
	/* &__title {
		margin: 3rem auto 0 auto;
		font-size: 2.5rem;
		text-align: center;
		border: 1px solid #fff;
		width: 90%;
		padding: 0.5rem;
		font-weight: bold;
	} */

	//* formulaire
	&__form {
		height: 50%;
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		&__protocol {
			& input[type="radio"] {
				opacity: 0;
    		position: fixed;
    		width: 0;
			}
			& label {
				background: linear-gradient(#365fcf, #1b3785);
				box-shadow: 0px 2px 10px grey;
				font-size: 2rem;
				border: 2px solid #444;
				text-align: center;
				width: 100%;
			}
			& input[type="radio"]:checked + label {
				background: linear-gradient(#1b3785, #365fcf);
    		box-shadow: 0px 1px 5px grey;
			}
		}

		//* bloc email & bloc password
		&__username,
		&__password,
		&__apiUrl {
			font-size: 1.5rem;
			display: flex;
			flex-direction: column;
			text-align: center;
			height: 8rem;
			justify-content: space-evenly;
      margin-bottom: 2rem;

			//* input username & input password
			& input {
				height: 2rem;
				font-size: 1.5rem;
				text-align: center;
				font-weight: bold;
        border-radius: 10px;
			}
		}

		//* bloc submit (avec bouton)
		&__submit {
			width: 100%;
			height: 8rem;
			display: flex;
			flex-direction: column;
			justify-content: center;

			//* Bouton submit
			&-button {
				width: 100%;
        background-color: #476382;
				height: 2.5rem;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 10px;
        color: #fff;
			}
		}
	}
}
</style>
