<template>
	<standard-header>Fees</standard-header>

	<div id="fee-adults" class="section scrollspy col s12">
		<header>
			<h1>Adult Classes</h1>
		</header>

		<section>
			<div id="general">
				<div class="desk-card" v-if="!isMobile">
					<price-card
						v-for="pricing in adultPricing"
						:key="pricing"
						:data="pricing"
					></price-card>
				</div>
				<div class="mob" v-else>
					<price-card-mob
						v-for="pricing in adultPricing"
						:key="pricing"
						:data="pricing"
					/>
				</div>
			</div>

			<header>
				<h3>REDUCED PRICES FOR STUDENTS AND WOMEN</h3>
				<ion-icon name="chevron-down-outline"></ion-icon>
			</header>

			<div id="reduced">
				<div class="desk-card" v-if="!isMobile">
					<price-card
						v-for="pricing in reducedPricing"
						:key="pricing"
						:data="pricing"
					/>
				</div>
				<div class="mob" v-else>
					<price-card-mob
						v-for="pricing in reducedPricing"
						:key="pricing"
						:data="pricing"
					/>
				</div>
			</div>

			<header>
				<h3>WOMEN'S ONLY CLASS</h3>
				<ion-icon name="chevron-down-outline"></ion-icon>
			</header>

			<div id="women">
				<div class="desk-card" v-if="!isMobile">
					<price-card
						v-for="pricing in womenPricing"
						:key="pricing"
						:data="pricing"
					/>
				</div>
				<div class="mob" v-else>
					<price-card-mob
						v-for="pricing in womenPricing"
						:key="pricing"
						:data="pricing"
					/>
				</div>
			</div>
		</section>
	</div>

	<div id="fee-kids" class="section scrollspy col s12">
		<header>
			<h1>Kid's Class</h1>
		</header>
		<section id="kids-cards">
			<div class="desk-card" v-if="!isMobile">
				<price-card
					v-for="pricing in kidsPricing"
					:key="pricing"
					:data="pricing"
				></price-card>
			</div>
			<div class="mob" v-else>
				<price-card-mob
					v-for="pricing in kidsPricing"
					:key="pricing"
					:data="pricing"
				/>
			</div>
		</section>
	</div>

	<div id="fee-private" class="section scrollspy col s12">
		<header>
			<h1>Private Class</h1>
		</header>
		<section>
			<p class="grey-text text-darken-3 lighten-3">
				For more information about Private classes, call or send an Email to
				coach Pablo.
			</p>
			<a
				href="#contact"
				class="btn grey darken-4 waves-effect waves-light col m2 s4 offset-m5 offset-s4"
			>
				Contact
			</a>
		</section>
	</div>
	<warning-cards></warning-cards>
</template>

<script>
import WarningCards from "../layout/WarningCards.vue";
import StandardHeader from "../util/StandardHeader.vue";
import PriceCard from "../layout/PriceCard.vue";
import PriceCardMob from "../mobile/PriceCardMob.vue";

export default {
	data() {
		return {
			adultPricing: [
				{
					title: "Month",
					price: 150,
					style: "basic",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1PqYYiP20CPU4adeBWrIK9X2",
				},
				{
					title: "Trimester",
					price: 390,
					style: "basic",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1PqYZnP20CPU4adeCi8rCFRO",
				},
				{
					title: "Semester",
					price: 690,
					style: "basic",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1PqYaDP20CPU4ade06b9rPhQ",
				},
				{
					title: "Year",
					price: 1200,
					style: "basic",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1PqYapP20CPU4adep9KeNcn4",
				},
			],
			reducedPricing: [
				{
					title: "Month",
					price: 100,
					style: "reduced",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1P42rmP20CPU4adetq6plLat",
				},
				{
					title: "Trimester",
					price: 255,
					style: "reduced",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1P42ptP20CPU4adeAbNFX9f3",
				},
				{
					title: "Semester",
					price: 450,
					style: "reduced",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1P42otP20CPU4adeDSXhQYuW",
				},
				{
					title: "Year",
					price: 780,
					style: "reduced",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1P42lYP20CPU4adev34BKBa0",
				},
			],
			womenPricing: [
				{
					title: "Month",
					price: 120,
					style: "women",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1PvKozP20CPU4ademxtFwcTO",
				},
				{
					title: "Trimester",
					price: 300,
					style: "women",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1PvKrWP20CPU4ade1ylOgbUu",
				},
				{
					title: "Semester",
					price: 500,
					style: "women",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1PvKqVP20CPU4ade8DO7GBjK",
				},
				{
					title: "Year",
					price: 900,
					style: "women",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1PvKruP20CPU4ademcwiFoR7",
				},
			],
			kidsPricing: [
				{
					title: "Semester",
					price: 490,
					style: "kids",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1PqYcPP20CPU4adefOyGs5uJ",
				},
				{
					title: "Year",
					price: 790,
					style: "kids",
					url: "https://checkout.joinmaat.com/?gymId=pablo_cerino_jiu_jitsu_school&priceId=price_1PqYd9P20CPU4adeapIDXf2O",
				},
			],
		};
	},
	components: {
		WarningCards,
		StandardHeader,
		PriceCard,
		PriceCardMob,
	},
	computed: {
		// isMobile() {
		//   if (screen.width <= 760) {
		//     return true;
		//   } else {
		//     return false;
		//   }
		// },
		isMobile() {
			return this.$store.getters.getMobile;
		},
	},
};
</script>

<style scoped>
.grey-text.text-darken-3 {
	font-size: large;
}
#general,
#reduced,
.desk-card,
.mob {
	margin-bottom: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
#kids-cards {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 1rem 0;
}
#reduced-mobile {
	margin: 3rem;
	border: 3px orange solid;
}
#fee-adults {
	margin-bottom: 3rem;
}
#fee-adults h3 {
	color: #212121;
	font-weight: 300;
}
#fee-private p {
	margin: 2rem;
}
#fee-private {
	margin-bottom: 5rem;
}
.highlight-line {
	height: 3px;
	width: calc(100% - 32vw);
	background: orange;
}

span {
	color: #ef5350;
	font-weight: bold;
	font-size: medium;
}

#general p,
#students p,
#fee-kids p {
	color: #424242;
	font-size: large;
}

ion-icon {
	font-size: 3em;
	font-weight: 100;
}
</style>
