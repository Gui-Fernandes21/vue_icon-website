<template>
  <standard-header> Location </standard-header>
  <p>
    Our Gym is located at:
    <br />Rue Dodonée 70, 1180 Uccle, Belgium
  </p>
  <a
    class="btn waves-effect waves-light grey darken-3 lighten-3"
    target="_blank"
    href="https://goo.gl/maps/nNvJzYjVFfxirpat5"
    >Google Maps<i class="material-icons red-text right">place</i></a
  >
</template>

<script>
import StandardHeader from "../util/StandardHeader.vue";

export default {
  components: {
    StandardHeader,
  },
};
</script>

<style scoped>
p {
  margin: 2rem;
  font-size: large;
  color: #424242;
}
</style>
