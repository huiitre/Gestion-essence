<template>
  <main class="add-transaction">
    <div class="add-transaction__header">
      <ReturnButton path="/gestion-essence" />
      <div>
        <ValidateButton @callback="validateForm" />
        <ResetButton @callback="resetForm" />
      </div>
    </div>
    <Separator />
    <form ref="add-transaction__form" class="add-transaction__form">
      <div class="add-transaction__elem add-transaction__form__location">
        <Input
          name="location"
          label="Nom"
          inputClass=""
          inputType="text"
          inputPlaceHolder="Nom de la transaction"
          inputId="location"
          @onChangeValue="handleChangeInput"
        />
      </div>
      <div class="add-transaction__elem add-transaction__form__price_liter">
        <Input
          name="price_liter"
          label="Prix au litre"
          inputClass=""
          inputType="number"
          inputPlaceHolder="Prix au litre"
          inputId="price_liter"
          @onChangeValue="handleChangeInput"
        />
      </div>
      <div class="add-transaction__elem add-transaction__form__tank">
        <Input
          name="tank"
          label="Litres ajoutés"
          inputClass=""
          inputType="number"
          inputPlaceHolder="Litres ajoutés"
          inputId="tank"
          @onChangeValue="handleChangeInput"
        />
      </div>
      <div class="add-transaction__elem add-transaction__form__km_travelled">
        <Input
          name="km_travelled"
          label="KM parcouru"
          inputClass=""
          inputType="number"
          inputPlaceHolder="KM parcouru"
          inputId="km_travelled"
          @onChangeValue="handleChangeInput"
        />
      </div>
      <div class="add-transaction__elem add-transaction__form__date">
        <Input
          name="date"
          label="Date (non obligatoire)"
          inputClass=""
          inputType="date"
          inputPlaceHolder="Date"
          inputId="date"
          @onChangeValue="handleChangeInput"
        />
      </div>
    </form>
  </main>
</template>

<script>
import ValidateButton from '@/modules/common/components/form/buttons/ValidateButton.vue';
import ReturnButton from '@/modules/common/components/form/buttons/ReturnButton.vue';
import ResetButton from '@/modules/common/components/form/buttons/ResetButton.vue';
import Input from '@/modules/common/components/form/Input.vue'
import Separator from '@/modules/common/components/Separator.vue';
import { errorToast } from '@/modules/common/components/toasts';

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
        price_liter: '',
        tank: '',
        km_travelled: '',
        date: null
      }
    }
  },
  methods: {
    handleChangeInput(data) {
      this.credentials[data.name] = data.value
    },
    resetForm() {
      this.$refs['add-transaction__form'].reset();
    },
    validateForm() {
      const { location, price_liter, tank, km_travelled } = this.credentials;
      let error = true;
      if (
        location == '' ||
        price_liter == '' ||
        tank == '' ||
        km_travelled == ''
      ) {
        errorToast('Des champs obligatoires sont vides !')
      } else {
        this.$store.dispatch('GestionEssence/addTransaction', this.credentials)
      }
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
    &__date {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
    }
  }
  &__elem {
    text-align: center;
  }
}
</style>