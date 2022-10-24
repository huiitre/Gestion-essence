<script>
import Popup from '@/modules/common/components/Popup.vue';
export default {
  name: 'Transaction',
  props: ['item', 'delete', 'deleteMode'],
  components: {
    Popup
  },
  mounted() {
    this.deleteModeSelected = false
    this.popup = false
  },
  computed: {
    /* transformDate() {
      const date = new Date(this.item.t_date)
      const newDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      return newDate
    } */
  },
  methods: {
    handleClick() {
      if (this.deleteMode) {
        this.delete(this.item.t_id)
        this.deleteModeSelected = !this.deleteModeSelected
      } else {
        this.popup = true
      }
    },
    handleClosePopup() {
      this.popup = false
    }
  },
  data() {
    return {
      deleteModeSelected: false,
      deleteModeComp: this.deleteMode,
      popup: false
    }
  },
};
</script>

<template>
  <Popup v-if="popup" :handleClosePopup="handleClosePopup" :item="{...this.item}" />
  <div v-bind:class="[deleteModeSelected ? 'delete-mode--selected' : '']" class="transaction" v-on:click="handleClick()">
    <span class="transaction__date">{{ item.t_date }}</span> | 
    <span class="transaction__montant">{{ item.t_montant }} €</span> | 
    <span class="transaction__conso">{{ item.t_conso }} L</span>
  </div>
</template>

<style lang="scss" scoped>
.transaction {
  display: flex;
  border: 1px solid $white;
  border-radius: 10px;
  padding: 1rem;
  justify-content: space-around;
  
  &:not(:last-child) {
    margin: 2rem 0;
  }

  &__date,
  &__montant,
  &__conso {
    font-weight: bold;
  }
}
.delete-mode .transaction {
	background-color: $delete-mode;
}
.delete-mode .transaction.delete-mode--selected {
  background-color: $delete-mode--selected;
}
</style>