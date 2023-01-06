<template>
	<section>
		<standard-header> Our Coaches </standard-header>

		<section id="carousel-container">
			<div class="carousel" data-carousel>
				<button class="carousel-button prev" data-carousel-button="prev">
					<ion-icon name="chevron-back-outline"></ion-icon>
				</button>
				<button class="carousel-button next" data-carousel-button="next">
					<ion-icon name="chevron-forward-outline"></ion-icon>
				</button>
				<ul data-slides>
					<li class="slide pablo" data-active>
						<img src="../../../public/img/pablo_pic.jpg" />
						<div class="backdrop"></div>
						<h1>Pablo Cerino</h1>
						<p>
							Our main coach is Pablo Cerino, He holds a 4th degree black belt
							in Brazilian Jiu Jitsu and has been practicing BJJ since 1993.
							Pablo actively competes in the biggest competitions and achieve
							great results. Pablo is a Brazilian native but has lived in
							Brussels since 2008 and speaks Portugese, French and English
							fluently.
						</p>
					</li>
					<li class="slide gui">
						<img src="../../../public/img/gui_ajpBrussels_doubleGold.jpg" />
						<div class="backdrop"></div>
						<h1>Gui Fernandes</h1>
						<p>
							Gui is a high level purple belt competitor from our team. He has
							been achieving great results in competitions around Europe. He
							also is a part of our coaching staff in our dojo.
						</p>
						<span>AJP Brussels Competition 2022</span>
					</li>
					<li class="slide max">
						<img src="../../../public/img/max_picture.jpg" />
						<div class="backdrop"></div>
						<h1>Max Koning</h1>
						<p>
							Max is a high level purple belt from our team. He has
							been achieving great results in competitions around Europe. He
							also is a part of our coaching staff in our dojo.
						</p>
            <span>Competition in Flanders, Belgium 2021</span>
					</li>
				</ul>
			</div>
		</section>

		<!-- <section id="desc">
      <div class="new-container">
        <div id="paragraphs">
          <p :class="pClass">
            Our main coach is Pablo Cerino, He holds a 4th degree black belt in
            Brazilian Jiu Jitsu and has been practicing BJJ since 1993.
          </p>
          <p :class="pClass">
            Pablo actively competes in the biggest competitions and achieve
            great results
          </p>
          <p :class="pClass">
            He has an extensive knowledge about BJJ and self defense and years
            of coaching experience.
          </p>
          <p :class="pClass">
            Pablo is a Brazilian native but has lived in Brussels since 2008 and
            speaks Portugese, French and English fluently.
          </p>
        </div>
        <img
          src="/img/pablo_pic.jpg"
          class="responsive-img materialboxed"
        />
      </div>
    </section> -->
	</section>
</template>

<script>
import StandardHeader from "../util/StandardHeader.vue";
export default {
	computed: {
		pClass() {
			return "grey-text text-darken-4";
		},
	},
	components: {
		StandardHeader,
	},
};
</script>

<style scoped>
/* p {
  font-size: 20px;
  margin: 5px;
} */
#paragraphs {
	margin: 2rem;
	flex: 2;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	max-width: 30vw;
	text-align: justify;
}

#desc {
	margin: 0 10vw;
	display: flex;
	align-items: center;
	justify-content: center;
}

.new-container {
	width: calc(100% - 10vw);
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

section {
	margin: 4rem 0;
}
</style>

<style scoped>
#carousel-container {
	margin: auto;
	width: 75vw;
	min-height: 100vh;
	user-select: none;
}

.carousel {
	width: 100%;
	height: 50vw;
	position: relative;
	background: 50% 50% / cover;
}

.carousel ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.slide {
	position: absolute;
	inset: 0;
	opacity: 0;
	transition: 500ms opacity ease-in-out;
	transition-delay: 200ms;
}

.slide img {
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	object-fit: cover;
	object-position: center;
	z-index: 1;
}

.slide[data-active] {
	opacity: 1;
	z-index: 1;
	transition-delay: 0ms;
}

.carousel-button {
	position: absolute;
	z-index: 3;
	top: 50%;
	transform: translateY(-50%);
	font-size: 4rem;
	background: none;
	border: none;
	color: rgba(255, 255, 255, 0.589);
	cursor: pointer;
}

.carousel-button:hover,
.carousel-button:focus {
	color: rgb(255, 255, 255);
}

.carousel-button.prev {
	left: 1rem;
}

.carousel-button.next {
	right: 1rem;
}
</style>

<style scoped>
img {
  z-index: 0;
  /* position: relative; */
}
.backdrop {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.274);
	border-radius: 10px;
	z-index: 333;
}

.slide.pablo p {
	font-family: "Oswald", sans-serif;
	position: absolute;
	top: 51%;
	transform: translateY(-50%);
	left: 6rem;
	width: 50%;
}

.slide.pablo h1 {
	font-family: "Poppins", sans-serif;
	font-weight: bold;
	position: absolute;
	top: 28%;
	left: 6rem;
}

.slide.gui h1 {
	font-family: "Poppins", sans-serif;
	font-weight: 600;
	font-size: 3rem;
	position: absolute;
	color: #fff;
	top: 30%;
	left: 6rem;
}

.slide.max h1 {
	font-family: "Poppins", sans-serif;
	font-weight: 600;
	font-size: 3rem;
	position: absolute;
	color: #000;
	top: 30%;
	left: 6rem;
}

.slide.gui img {
	width: 100%;
}
.slide.gui p {
	font-family: "Oswald", sans-serif;
	color: #fff;
	/* font-size: 1.5rem; */
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 6rem;
	width: 35%;
}
.slide.max p {
	font-family: "Oswald", sans-serif;
	color: #000;
	/* font-size: 1.5rem; */
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: 6rem;
	width: 35%;
}
.slide.gui span {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	color: #fff;
}
.slide.max span {
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	color: #fff;
}
</style>
