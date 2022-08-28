<template>
	<main class="gestion-essence">
		<Overlay
			:opened="false"
			:visible="false"
			@opened="someCallback"
		>
			<span>My popup</span>
		</Overlay>
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
				<div class="infos__conso">Consommation : 6.5L/100</div>
			</div>
			<Separator />
			<div class="date">Juin 2022</div>
			<div class="list">
				<Transaction :openDetail="openDetail" />
				<Transaction :openDetail="openDetail" />
				<Transaction :openDetail="openDetail" />
				<Transaction :openDetail="openDetail" />
				<Transaction :openDetail="openDetail" />
				<Transaction :openDetail="openDetail" />
				<Transaction :openDetail="openDetail" />
				<Transaction :openDetail="openDetail" />
				<Transaction :openDetail="openDetail" />
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
import Detailtransaction from '@/modules/GestionEssence/components/popup/DetailTransaction.vue';

export default {
	components: {
		ReturnButton,
		AddButton,
		RemoveButton,
		Separator,
		Transaction,
		Detailtransaction,
	},
	name: 'GestionEssence',
	computed: {},
	methods: {
		openDetail() {
			console.log('heree');
		},
	},
	data() {
		return {
			opened: false,
			visible: false,
		};
	},
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
