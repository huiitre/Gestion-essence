<template>
	<div class="list">
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
		<Transaction />
	</div>
</template>

<script>
import Transaction from '@/modules/GestionEssence/components/Transaction.vue';

export default {
	name: 'TransactionsList',
  components: {
    Transaction
  }
};
</script>

<style lang="scss" scoped></style>
