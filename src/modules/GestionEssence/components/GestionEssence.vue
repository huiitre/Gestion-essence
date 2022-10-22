<script>
//* NPM

//* COMMON
import ReturnButton from '@/modules/common/components/form/buttons/ReturnButton.vue';
import ValidateButton from '@/modules/common/components/form/buttons/ValidateButton.vue';
import ResetButton from '@/modules/common/components/form/buttons/RefreshButton.vue';
import AddButton from '@/modules/common/components/form/buttons/AddButton.vue';
import RemoveButton from '@/modules/common/components/form/buttons/RemoveButton.vue';
import Separator from '@/modules/common/components/Separator.vue';

import pushOrSplice from '@/services/pushOrSplice';

//* GESTION ESSENCE
import Transaction from '@/modules/GestionEssence/components/Transaction.vue';

export default {
	components: {
		ReturnButton,
		ResetButton,
		AddButton,
		RemoveButton,
		Separator,
		Transaction,
		ValidateButton
	},
	name: 'GestionEssence',
	data() {
		return {
			deleteMode: false,
			deleteList: []
		}
	},
	created() {
		this.allFuelTransactions()
		window.addEventListener('scroll', this.handleScroll);
	},
	unmounted() {
		//* on détruit l'evt car il s'appliquera à toutes les autres pages
		window.removeEventListener('scroll', this.handleScroll);
	},
	computed: {
		getTransactions() {
			return this.$store.getters['GestionEssence/getTransactionsList']
		},
		getAllConso() {
			return this.$store.getters['GestionEssence/getAllConso']
		}
	},
	methods: {
		allFuelTransactions(payload) {
			this.$store.dispatch('GestionEssence/resetTransactionsList')
		},
		handleScroll() {
			const totalPageHeight = document.body.scrollHeight
			const scrollPoint = window.scrollY + window.innerHeight
			if (scrollPoint >= totalPageHeight) {
				this.$store.dispatch('GestionEssence/allFuelTransactions', { scroll: true })
			}
		},
		isDeleteMode() {
			this.deleteMode = !this.deleteMode
			//* si deleteMode passe à false, on vide la liste
			if (this.deleteMode == false)
				this.deleteList = []
		},
		handleDelete() {
			const list = this.deleteList

			const callback = () => {
				//* on passe le mode à false et on vide le tableau au cas où
				this.deleteMode = false
				this.deleteList = []
			}

			this.$store.dispatch('GestionEssence/deleteTransaction', { list, callback })
		},
		selectTransactionsForDelete(id) {
			if (this.deleteMode)
				this.deleteList = pushOrSplice(this.deleteList, id);
		}
	},
};
</script>

<template>
	<main class="gestion-essence">
		<div class="gestion-essence__header">
			<ReturnButton path="/" />
			<ResetButton />
			<div class="crud">
				<AddButton v-if="deleteMode === false" path="/gestion-essence/add-transaction" />
				<ValidateButton v-if="deleteMode" @callback="handleDelete" />
				<RemoveButton :callback="isDeleteMode" />
			</div>
		</div>
		<Separator />
		<div class="gestion-essence__content">
			<div class="infos">
				<div class="infos__vehicle">Véhicule : Ford Fiesta</div>
				<div class="infos__conso">Consommation : {{ getAllConso }} L / 100</div>
			</div>
			<Separator />
			<!-- <div class="date">Juin 2022</div> -->
			<div class="list" v-bind:class="[deleteMode && 'delete-mode']" v-if="getTransactions">
				<Transaction
					:callback="selectTransactionsForDelete"
					:deleteModeSelected="deleteList.includes(Number(val.id)) ? true : false"
					:deleteMode="deleteMode"
					v-for="val of getTransactions"
					:key="val.id"
					:item="{...val}"
				/>
			</div>
		</div>
	</main>
</template>

<style lang="scss" scoped>
.gestion-essence {
	&__header {
		display: flex;
		justify-content: space-between;
	}
	&__content {
		& .infos {
			font-size: 1rem;
			font-weight: bold;
			&__vehicle {
				padding-bottom: 0.5rem;
			}
			&__conso {
				padding-top: 0.5rem;
			}
		}
		& .date {
			font-size: 1.2rem;
			font-weight: bold;
			margin-bottom: 1.5rem;
			text-align: center;
		}

		& .list.delete-mode .transaction {
			background-color: $delete-mode;
		}
		& .list.delete-mode .transaction.delete-mode--selected {
			background-color: $delete-mode--selected;
		}
	}
}
</style>
