<script>
export default {
  name: 'Popup',
  props: ['handleClosePopup', 'item']
};
</script>

<template>
  <div id="modal">
    <div class="mask"></div>
    <div class="container auto">
      <div class="message">
        Nom : {{ item.t_location }}<br />
        <br />Montant : {{ item.t_montant }} €<br />
        <br />Prix au litre : {{ item.t_price_liter }} €<br />
        <br />Moy conso : {{ item.t_conso }}<br />
        <br />Km parcouru : {{ item.t_km_travelled }} km<br />
        <br />Date : {{ item.t_date }}<br />
        <br />Litres ajoutés : {{ item.t_tank }} L<br />
        <br />Réservoir max VL : {{ item.v_reservoir }}
      </div>
      <span v-on:click="handleClosePopup()" href="#" class="close">&times;</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#modal {
  color: #000;
	position: fixed;
	z-index: 99999;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	// display: none;

  & .mask {
    // background: black;
    opacity: 0.8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & .container {
    position: relative;
    background: white;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 300px;
    height: auto;
    min-height: 50px;

    & .message {
      padding: 15% 15% 5% 5%;
    }

    & .close {
      position: absolute;
      right: 5%;
      top:2%;
      color: #444;
      font-size: 30px;
    }
  }
}
</style>