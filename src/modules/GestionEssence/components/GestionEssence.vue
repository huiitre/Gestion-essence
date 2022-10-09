<template>
	<main class="gestion-essence">
		<div class="gestion-essence__header">
			<ReturnButton path="/" />
			<div class="crud">
				<AddButton />
				<RemoveButton />
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
			<div class="list" v-if="getTransactions">
				<Transaction v-for="val of getTransactions" :key="val.id" :item="{...val}" />
			</div>
		</div>
	</main>
</template>

<script>
//* NPM

//* COMMON
import ReturnButton from '@/modules/common/components/form/buttons/ReturnButton.vue';
import AddButton from '@/modules/common/components/form/buttons/AddButton.vue';
import RemoveButton from '@/modules/common/components/form/buttons/RemoveButton.vue';
import Separator from '@/modules/common/components/Separator.vue';

//* GESTION ESSENCE
import Transaction from '@/modules/GestionEssence/components/Transaction.vue';

export default {
	components: {
		ReturnButton,
		AddButton,
		RemoveButton,
		Separator,
		Transaction,
	},
	name: 'GestionEssence',
	updated() {
		/* window.onscroll = function() {
			const totalPageHeight = document.body.scrollHeight
			const scrollPoint = window.scrollY + window.innerHeight

			if (scrollPoint >= totalPageHeight) {
				console.log('%c GestionEssence.vue #52 || scroll bas', 'background:red;color:#fff;font-weight:bold;');
				this.allFuelTransactions
			}
		} */
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
		/* handleScroll(e) {
			console.log('%c GestionEssence.vue #59 || e : ', 'background:red;color:#fff;font-weight:bold;', e.scroll);
		} */
		allFuelTransactions() {
			this.$store.dispatch('GestionEssence/allFuelTransactions')
		},
		handleScroll() {
			const totalPageHeight = document.body.scrollHeight
			const scrollPoint = window.scrollY + window.innerHeight
			if (scrollPoint >= totalPageHeight) {
				this.$store.dispatch('GestionEssence/allFuelTransactions')
			}
		}
	},
	mounted() {
		this.allFuelTransactions()

		window.addEventListener('scroll', this.handleScroll);

		/* const totalPageHeight = document.body.scrollHeight
		const scrollPoint = window.scrollY + window.innerHeight
		if (scrollPoint >= totalPageHeight) {
			console.log('%c GestionEssence.vue #80 || scroll', 'background:red;color:#fff;font-weight:bold;');
		} */
	}
};
</script>

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
	}
}
</style>
