<template>
	<div class="login">
		<h1 class="login__title">Gestion Essence</h1>
		<form action="" class="login__form">
			<div class="login__form__username">
				<label for="username">Identifiant</label>
				<input id="username" type="email" />
        <span class="login__form__username-error hidden">Identifiant incorrect</span>
			</div>
			<div class="login__form__password">
				<label for="password">Mot de passe</label>
				<input id="password" type="password" />
        <span class="login__form__password-error hidden">Mot de passe incorrect</span>
			</div>
			<div class="login__form__submit">
				<button type="submit" class="login__form__submit-button">Se connecter</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'Login',
};
</script>

<style lang="scss" scoped>
//* composant login
.login {
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	//* titre H1
	&__title {
		margin: 3rem auto 0 auto;
		font-size: 2.5rem;
		text-align: center;
		border: 1px solid #fff;
		width: 90%;
		padding: 0.5rem;
		font-weight: bold;
	}

	//* formulaire
	&__form {
		height: 50%;
		width: 60%;
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		//* bloc email & bloc password
		&__username,
		&__password {
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
        font-size: 1.5rem;
        font-weight: bold;
        border: none;
        border-radius: 10px;
        color: #fff;
			}
		}
	}
}
</style>
