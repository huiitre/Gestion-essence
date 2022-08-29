<template>
	<div class="detail-popup">
    <div class="detail name">Nom</div>
    <div class="detail amount">Montant : 65.85 €</div>
    <div class="detail date">22/08/2022</div>
    <div class="detail vehicle">Ford Fiesta</div>
    <div class="detail conso">Consommation : 6.52L/100</div>
    <div class="detail km-parcouru">585.52km parcouru</div>
    <div class="detail fuel">Carburant : SP98</div>
    <div class="detail prix-litre">1.75 € / litre</div>
    <div class="detail litre-ajoute">Ajout de 38L</div>
		<!-- Nom -->
    <!-- montant -->
    <!-- date -->
    <!-- vehicule -->
    <!-- consommation -->
    <!-- km parcouru -->
    <!-- carburant -->
    <!-- prix au litre -->
    <!-- nombre de litres injectés -->
	</div>
</template>
=
<script>
export default {
	name: 'DetailTransaction',
	props: ['isOpen'],
};
</script>

<style lang="scss" scoped>
/* Positionnez la forme Popup */
.detail-popup {
	position: fixed;
  left: calc(50% - 125px);
  top: 45%;
	text-align: center;
	width: 100%;
  max-width: 250px;
  border: 2px solid $grey-light;
  background-color: $header-background;
}
</style>
