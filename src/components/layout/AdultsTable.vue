<template>
	<div id="header-container">
		<h2 :class="header">Adult Classes</h2>
		<div :class="headerHl"></div>
	</div>
	<table class="striped hide-on-small-and-down">
		<thead>
			<tr>
				<th class="center-align" v-for="day in days" :key="day">{{ day }}</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td></td>
				<td class="center-align orange lighten-1 z-depth-2">
					<p>BJJ</p>
					<p>All Levels</p>
					<p>7:30 - 8:30</p>
				</td>
				<td></td>
				<td class="center-align orange lighten-1 z-depth-2">
					<p>BJJ</p>
					<p>All Levels</p>
					<p>7:30 - 8:30</p>
				</td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td class="center-align orange lighten-1 z-depth-2">
					<p>BJJ</p>
					<p>All Levels</p>
					<p>12:00 - 13:00</p>
				</td>
				<td></td>
				<td class="center-align orange lighten-1 z-depth-2">
					<p>BJJ</p>
					<p>All Levels</p>
					<p>12:00 - 13:00</p>
				</td>
				<td></td>
				<td class="center-align orange darken-4 z-depth-2">
					<p>NoGi</p>
					<p>All Levels</p>
					<p>12:00 - 13:00</p>
				</td>
				<td></td>
			</tr>
			<tr>
				<td v-for="day in days" :key="day"></td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td class="center-align orange lighten-1 z-depth-2">
					<p>BJJ</p>
					<p>All Levels</p>
					<p>14:00 - 15:30</p>
				</td>
			</tr>
			<tr>
				<td v-for="day in days" :key="day"></td>
			</tr>
			<tr>
				<td v-for="day in days" :key="day"></td>
			</tr>
			<tr>
				<td class="center-align pink lighten-2 z-depth-2">
					<p>Women's Only</p>
					<p>18:00 - 19:00</p>
				</td>
				<!-- tuesday -->
				<td></td>
				<!-- WED -->
				<td class="center-align pink lighten-2 z-depth-2">
					<p>Women's Only</p>
					<p>18:00 - 19:00</p>
				</td>
				<!-- Thur -->
				<td></td>
				<!-- Fri -->
				<td></td>
				<!-- Sat -->
				<td></td>
			</tr>
			<tr>
				<!--  Monday -->
				<td class="center-align orange darken-2 z-depth-2">
					<p>BJJ Basics</p>
					<p>19:00 - 20:00</p>
				</td>
				<!-- tuesday -->
				<td class="center-align orange lighten-1 z-depth-2">
					<p>BJJ</p>
					<p>All Levels</p>
					<p>19:00 - 20:00</p>
				</td>
				<!-- thr -->
				<td class="center-align orange darken-2 z-depth-2">
					<p>BJJ Basics</p>
					<p>19:00 - 20:00</p>
				</td>
				<!-- fri -->
				<td class="center-align orange lighten-1 z-depth-2">
					<p>BJJ</p>
					<p>All Levels</p>
					<p>19:00 - 20:00</p>
				</td>
				<td class="center-align orange lighten-3 z-depth-2">
					<p>BJJ</p>
					<p>All Levels</p>
					<p>19:00 - 20:30</p>
				</td>
				<td></td>
			</tr>
			<tr>
				<td class="center-align orange lighten-1 z-depth-2">
					<p>BJJ</p>
					<p>Intermediate / Advanced</p>
					<p>20:00 - 21:30</p>
				</td>
				<!-- <td class="center-align orange darken-4 z-depth-2">
					<p>NoGi</p>
					<p>Intermediate / Advanced</p>
					<p>20:00 - 21:30</p>
				</td> -->
				<!-- <td class="center-align orange lighten-1 z-depth-2">
					<p>BJJ</p>
					<p>Intermediate / Advanced</p>
					<p>20:00 - 21:30</p>
				</td> -->
				<td class="center-align orange darken-4 z-depth-2">
					<p>NoGi</p>
					<p>All Levels</p>
					<p>20:00 - 21:00</p>
				</td>
				<td class="center-align orange lighten-1 z-depth-2">
					<p>BJJ</p>
					<p>Intermediate / Advanced</p>
					<p>20:00 - 21:30</p>
				</td>
				<td class="center-align orange darken-4 z-depth-2">
					<p>NoGi</p>
					<p>All Levels</p>
					<p>20:00 - 21:00</p>
				</td>
				<td></td>
				<td></td>
			</tr>
		</tbody>
	</table>
	<img
		class="hide-on-med-and-up"
		@click.stop
		src="/img/timetable_icon-adults.png"
	/>
</template>

<script>
export default {
	data() {
		return {
			days: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			],
		};
	},
	computed: {
		header() {
			if (this.isMobile) {
				return "header-mobile";
			} else {
				return "header";
			}
		},
		isMobile() {
			return this.$store.getters.getMobile;
		},
		headerHl() {
			if (this.isMobile) {
				return "header-highlight-mobile";
			} else {
				return "header-highlight";
			}
		},
	},
};
</script>

<style scoped>
img {
	width: 100%;
	margin: 2px;
	height: 100%;
}
td.center-align {
	font-size: small;
	border-radius: 10px;
}
td p {
	padding: 0;
	margin: 0;
}
h2.header {
	margin-bottom: 0;
	letter-spacing: 1px;
	font-size: 3.5rem;
}
.header {
	font-weight: bold;
	margin: 2rem;
}
h2.header-mobile {
	margin-bottom: 0;
	letter-spacing: 1px;
	font-size: 3rem;
}
.header-mobile {
	font-weight: bold;
	margin: 2rem;
}
#header-container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-bottom: 5rem;
}
.header-highlight {
	width: 20rem;
	border-top: 4px orange solid;
}
.header-highlight-mobile {
	width: 18rem;
	border-top: 4px orange solid;
}
</style>
