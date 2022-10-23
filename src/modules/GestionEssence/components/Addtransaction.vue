<template>
  <main class="add-transaction">
    <div class="add-transaction__header">
      <ReturnButton path="/gestion-essence" />
      <div>
        <ValidateButton @callback="validateForm" />
        <ResetButton :callback="resetForm" />
      </div>
    </div>
    <Separator />
    <form ref="add-transaction__form" class="add-transaction__form">
      <div class="add-transaction__elem add-transaction__form__location">
        <Input name="location" label="Nom" inputClass="" inputType="text" inputPlaceHolder="Nom de la transaction" inputId="location" @onChangeValue="handleChangeInput" />
      </div>
      <div class="add-transaction__elem add-transaction__form__price_liter">
        <Input name="price_liter" label="Prix au litre" inputClass="" inputType="number" inputPlaceHolder="Prix au litre" inputId="price_liter" @onChangeValue="handleChangeInput" />
      </div>
      <div class="add-transaction__elem add-transaction__form__tank">
        <Input name="tank" label="Litres ajoutés" inputClass="" inputType="number" inputPlaceHolder="Litres ajoutés" inputId="tank" @onChangeValue="handleChangeInput" />
      </div>
      <div class="add-transaction__elem add-transaction__form__km_travelled">
        <Input name="km_travelled" label="KM parcouru" inputClass="" inputType="number" inputPlaceHolder="KM parcouru" inputId="km_travelled" @onChangeValue="handleChangeInput" />
      </div>
      <div class="add-transaction__elem add-transaction__form__vehicle">
        <label class="field__label" for="vehicle">Vehicule</label>
        <select @change="handleChangeSelect" id="vehicle" v-model="vehicle" class="field__select" name="vehicle">
          <option v-for="val in dataVehicle" :key="val.v_id" :value="val.v_id">
            {{ val.v_marque + ' ' + val.v_modele + ' ' + val.v_annee }}
          </option>
        </select>
      </div>
      <div class="add-transaction__elem add-transaction__form__fuel">
        <label class="field__label" for="fuel">Carburant</label>
        <select @change="handleChangeSelect" id="fuel" v-model="fuel" class="field__select" name="fuel">
          <option v-for="val in dataFuel" :key="val.f_id" :value="val.f_id">
            {{ val.f_name }}
          </option>
        </select>
      </div>
      <div class="add-transaction__elem add-transaction__form__date">
        <Input name="transaction_date" label="Date (non obligatoire)" inputClass="" inputType="date" inputPlaceHolder="Date" inputId="date" @onChangeValue="handleChangeInput" />
      </div>
    </form>
  </main>
</template>

<script>
import useFetchVehicle from '@/modules/GestionEssence/Vehicle/hooks/useFetchVehicle';
import useFetchFuel from '@/modules/GestionEssence/Fuel/hooks/useFetchFuel';

import ValidateButton from '@/modules/common/components/form/buttons/ValidateButton.vue';
import ReturnButton from '@/modules/common/components/form/buttons/ReturnButton.vue';
import ResetButton from '@/modules/common/components/form/buttons/ResetButton.vue';
import Input from '@/modules/common/components/form/fields/Input.vue'
import Separator from '@/modules/common/components/Separator.vue';

export default {
  name: 'AddTransaction',
  components: {
    Separator,
    ReturnButton,
    ValidateButton,
    ResetButton,
    Input
  },
  data() {
    return {
      credentials: {
        location: '',
        price_liter: 0,
        tank: 0,
        km_travelled: 0,
        transaction_date: null,
        vehicle: 1,
        fuel: 1
      }
    }
  },
  setup(props, { attrs, slots, emit }) {
    const { data: dataVehicle, isError: isErrorVehicle, isLoading: isLoadingVehicle } = useFetchVehicle('list');

    //* ------------------------------------------

    const { data: dataFuel, isError: isErrorFuel, isLoading: isLoadingFuel } = useFetchFuel('list');

    //* ------------------------------------------

    return {
      dataVehicle,
      isErrorVehicle,
      isLoadingVehicle,
      dataFuel,
      isErrorFuel,
      isLoadingFuel
    };
  },
  methods: {
    handleChangeInput(data) {
      this.credentials[data.name] = data.value
    },
    handleChangeSelect(select) {
      this.credentials[select.target.name] = select.target.value
    },
    resetForm() {
      //* on vide les champs
      this.$refs['add-transaction__form'].reset();
      //* on vide les credentials
      this.credentials = {
        location: '',
        price_liter: 0,
        tank: 0,
        km_travelled: 0,
        transaction_date: null,
        vehicle: 1,
        fuel: 1
      }
    },
    validateForm() {
      this.$store.dispatch('GestionEssence/addTransaction', this.credentials)
    }
  }
};
</script>

<style lang="scss" scoped>
.add-transaction {
  &__header {
    display: flex;
    justify-content: space-between;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__location,
    &__price_liter,
    &__tank,
    &__km_travelled,
    &__date,
    &__vehicle,
    &__fuel {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;

      font-size: 1.5rem;
			text-align: center;
			justify-content: space-evenly;
    }
  }
  &__elem {
    text-align: center;

    & input,
    .field__input {
      height: 2rem;
      font-size: 1.5rem;
      text-align: center;
      font-weight: bold;
      border-radius: 10px;
    }
  }
}
</style>