<template>
  <section>
    <header id="header-container">
      <h2 class="header">About our Head Coach</h2>
      <div class="header-highlight"></div>
    </header>
    <section id="desc">
      <div id="paragraphs">
        <p :class="pClass">
          Our main coach is Pablo Cerino, He holds a 4th degree black belt in
          Brazilian Jiu Jitsu and has been practicing BJJ since 1993.
        </p>
        <p :class="pClass">
          Pablo actively competes in the biggest competitions and achieve great
          results
        </p>
        <p :class="pClass">
          He has an extensive knowledge about BJJ and self defense and years of
          coaching experience.
        </p>
        <p :class="pClass">
          Pablo is a Brazilian native but has lived in Brussels since 2008 and
          speaks Portugese, French and English fluently.
        </p>
      </div>
      <img src="/img/pablo_picture.jpg" class="responsive-img materialboxed" />
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    pClass() {
      return "grey-text text-darken-4";
    }
  }
};
</script>

<style scoped>
p {
  font-size: 24px;
  margin: 5px;
}
#paragraphs {
  margin: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
img {
  display: unset;
  border-radius: 10px;
  max-height: 80vh;
  flex: 2;
  cursor: default;
}
#desc {
  display: flex;
  justify-content: space-around;
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

section {
  margin: 4rem 0;
}

</style>
