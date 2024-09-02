<template>
	<section class="z-depth-1" :class="cardStyle">
		<header>
			<h1>{{ data.title }}</h1>
		</header>

		<main>
			<ul>
				<li>{{ data.price }}€</li>
			</ul>
		</main>

		<div class="actions">
			<button @click="navigatePurchase(data.url)">sign up now</button>
			<!-- <button @click="openModal">sign up now</button> -->
		</div>
	</section>
	<teleport to="body">
		<signup-modal v-if="showModal" @close-modal="closeHandler">
			<slot name="modal"></slot>
		</signup-modal>
	</teleport>
</template>

<script>
import SignupModal from "../layout/SignupModal.vue";

export default {
	components: {
		SignupModal,
	},
	props: ["data"],
	data() {
		return {
			showModal: false,
		};
	},
	computed: {
		cardStyle() {
			return this.data.style;
		},
	},
	methods: {
		openModal() {
			this.showModal = true;
		},
		closeHandler() {
			this.showModal = false;
		},
		navigatePurchase(url) {
			window.location.href = url;
		}
	},
};
</script>

<style scoped>
section {
	border: none;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-height: 55vh;
	margin: 1rem;
	width: 70vw;
	transition: 150ms transform ease-in;
	background: #231f20;
	border-radius: 10px;
}
section:hover {
	transform: scale(1.04);
}
section.basic > header,
section.basic > .actions > button {
	background: orange;
}
section.basic > main {
	color: orange;
}
section.basic > .actions > button:hover {
	background: #ffb11f;
}

section.reduced > header,
section.reduced > .actions > button {
	background: #ff4949;
}
section.reduced > .actions > button:hover {
	background: #ff2f2f;
}
section.reduced > main {
	color: #ff4949;
}


section.women > header,
section.women > .actions > button {
	background: #ff8484;
}
section.women > .actions > button:hover {
	background: #ff7676;
}
section.women > main {
	color: #ff8484;
}


section.kids > header,
section.kids > .actions > button {
	background: #4ef24e;
}
section.kids > .actions > button:hover {
	background: #23fa23;
}
section.kids > main {
	color: #4ef24e;
}
section > main {
	font-size: 6vw;
}
header {
	width: 100%;
	padding: 1rem;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}
h1 {
	font-size: 6vw;
	text-transform: uppercase;
	margin: 0;
}
.actions {
	margin: 1rem;
}
li {
	font-size: 3em;
}
button {
	padding: 10px 20px;
	text-transform: uppercase;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 3vw;
	color: #231f20;
}
</style>
