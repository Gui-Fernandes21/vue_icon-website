<template>
  <grid-helper :id="'what-bjj'">
    <div id="helper">
      <standard-header :highlight="highlightClass">What is Brazilian Jiu Jitsu?</standard-header>
      <div id="paragraphs" :class="sizeClass">
        <p>
          Brazilian Jiu Jitsu or BJJ is a martial art, focused on self defense
          and ground fighting.
        </p>
        <p>
          BJJ was developed to allow people to effectively defend themselves
          against larger opponents or attackers.
        </p>
        <p>
          Brazilian Jiu Jitsu is a game of techniques with the goal to get your
          opponent to surrender by utilizing leverage and locks without any
          kicks or punches. BJJ is a great way for women, children and men to
          get in a great shape and make them ready to defend themselves if
          needed. It's also fun and a you become a part of a great team.
        </p>
      </div>
    </div>
  </grid-helper>
</template>

<script>
import StandardHeader from "../util/StandardHeader.vue";
import GridHelper from "../util/GridHelperScroll.vue";

export default {
  data() {
    return {
      isMobile: this.$store.getters.getMobile,
    };
  },
  components: {
    StandardHeader,
    GridHelper,
  },
  computed: {
    sizeClass () {
      if (!this.isMobile) {
        return 'desktop';
      } else {
        return 'mobile';
      }
    },
    highlightClass() {
      if (!this.isMobile) {
        return true;
      } else {
        return false;
      } 
    }
  }
};
</script>

<style scoped>
#helper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
p {
  margin: 10px;
}

/* #paragraphs {
  max-width: 60vw;
  margin-top: 0;
} */

#paragraphs.mobile {
  margin-top: 0;
  text-align: justify;
}

#paragraphs.mobile p {
  font-size: 1.2rem;
}

#paragraphs.desktop p {
  font-size: 1.2rem;
}
</style>
