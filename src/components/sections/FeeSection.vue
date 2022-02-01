<template>
  <standard-header>Fees</standard-header>

  <div id="fee-adults" class="section scrollspy col s12">
    <h3 class="grey-text text-darken-4">Adult Classes</h3>
    <div id="general">
      <p>
        Per Month - 120€
      </p>
      <p>
        Per Trimester - 285€
      </p>
      <p>
        Per Semester - 510€
      </p>
      <p>
        Per Year - 900€
      </p>
      <span> We offer more than 10 classes a week </span>
    </div>
    <div id="reduced" v-if="!isMobile">
      <p class="grey-text text-darken-2">
        REDUCED PRICES FOR STUDENTS AND WOMEN
      </p>
      <div class="highlight-line"></div>
    </div>
    <div id="reduced-mobile" v-else>
      <p class="grey-text text-darken-2">
        REDUCED PRICES FOR STUDENTS AND WOMEN
      </p>
    </div>
    <div id="students">
      <p>
        Per Month - 100€
      </p>
      <p>
        Per Trimester - 255€
      </p>
      <p>
        Per Semester - 450€
      </p>
      <p>
        Per Year - 780€
      </p>
    </div>
  </div>

  <div id="fee-kids" class="section scrollspy col s12">
    <h3 class="grey-text text-darken-4">Kid's Class</h3>
    <div>
      <p>
        Per Semester - 390€
      </p>
      <p>
        Per Year - 660€
      </p>
    </div>
  </div>

  <div id="fee-private" class="section scrollspy col s12">
    <h3 class="grey-text text-darken-4">Private Class</h3>
    <p class="grey-text text-darken-3 lighten-3">
      For more information about Private classes, call or send an Email to coach
      Pablo.
    </p>
    <a
      href="#contact"
      class="btn grey darken-4 waves-effect waves-light col m2 s4 offset-m5 offset-s4"
    >
      Contact
    </a>
  </div>
  <warning-cards></warning-cards>
</template>

<script>
import WarningCards from "../layout/WarningCards.vue";
import StandardHeader from "../util/StandardHeader.vue";

export default {
  components: {
    WarningCards,
    StandardHeader,
  },
  computed: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.grey-text.text-darken-3 {
  font-size: large;
}
span {
  font-size: medium;
}
#general {
  margin-bottom: 3rem;
}
#reduced {
  margin: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#reduced-mobile {
  margin: 3rem;
  border: 3px orange solid;
}
#reduced-mobile p {
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0;
}
#reduced p {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}
#fee-adults {
  margin-bottom: 3rem;
}
#fee-private p {
  margin: 2rem;
}
#fee-private {
  margin-bottom: 5rem;
}
#fee-kids {
  margin: 4rem 0;
  padding: 0;
}
.highlight-line {
  height: 3px;
  width: calc(100% - 32vw);
  background: orange;
}

h3 {
  font-size: 32px;
  font-weight: 600;
  margin: 2rem;
}

span {
  color: #ef5350;
  font-weight: bold;
}

#general p,
#students p,
#fee-kids p {
  color: #424242;
  font-size: large;
}
</style>
