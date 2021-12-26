<template>
  <main>
    <standard-header>The Gym</standard-header>
    <div id="text-container">
      <p class="grey-text text-darken-2 lighten-4">
        We have a full equipped facility, with a nice reception to welcome
        newcomers, 2 clean locker rooms, one for women and one for men equipped
        with showers on both, and a big training area with more than 150 meters
        square of professional tatami.
      </p>
    </div>
    <section>
      <image-card v-for="img in imagesUrl" :key="img" :path="img"></image-card>
    </section>
  </main>
</template>

<script>
import ImageCard from "../util/ImageCard.vue";
import StandardHeader from "../util/StandardHeader.vue";

export default {
  data() {
    return {
      imagesUrl: [
        "/img/icon-reception.jpg",
        "/img/bjj-gym-reception_orig.jpg",
        "/img/icon-mats.jpg",
        "/img/bjj-tatami_orig.jpg",
        "/img/female-bjj-locker-room-shower_orig.jpg",
        "/img/linedup-team-picture.jpg",
        "/img/bjj-locker-room_orig.jpg",
        "/img/bjj-shower_orig.jpg",
      ],
    };
  },
  components: {
    ImageCard,
    StandardHeader,
  },
};
</script>

<style scoped>
p {
  font-size: large;
}
#text-container {
  margin: 2rem;
}
</style>
