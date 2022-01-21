<template>
  <section>
    <standard-header> About our Coach </standard-header>
    <section id="desc">
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
          src="/img/pablo_picture.jpg"
          class="responsive-img materialboxed"
        />
      </div>
    </section>
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
p {
  font-size: 20px;
  margin: 5px;
}
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
img {
  display: unset;
  border-radius: 10px;
  max-height: 65vh;
  flex: 1;
  cursor: default;
}
#desc {
  /* width: calc(100% - 10vw); */
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
