<template>
  <div class="section scrollspy" id="fees">
    <div id="header-container">
      <h2 class="header">Fees</h2>
      <div class="header-highlight"></div>
    </div>
    <div id="fee-adults" class="section scrollspy col s12">
      <h3 class="header grey-text text-darken-4">Adult Classes</h3>
      <div id="general">
        <p class="grey-text text-darken-3">
          3x pr. week - 65€ pr. month (3 month commitment) or 75€ pr. month
          (monthly payments)
        </p>
        <p class="grey-text text-darken-3">
          All classes - 75€ pr. month (3 month commitment) or 85€ pr. month
          (monthly payments)
        </p>
        <span class="red-text text-lighten-1">
          You save 30€ by committing for 3 months.
        </span>
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
      <div>
        <p class="grey-text text-darken-3">
          All classes - 60€ (3 month commitment) or 70€ pr. month (monthly
          payments)
        </p>
        <span class="red-text text-lighten-1">
          You save 75€ from the normal price if you are eligible for reduction
          and you commit for 3 months
        </span>
      </div>
    </div>
    <div id="fee-kids" class="section scrollspy col s12">
      <h3 class="header grey-text text-darken-4">Kid's Class</h3>
      <div>
        <p class="grey-text text-darken-3 lighten-3">
          2x pr.week - 150€ for 3 months membership
        </p>
        <p class="grey-text text-darken-3 lighten-3">
          3x pr.week - 225€ for 3 months membership
        </p>
        <p class="grey-text text-darken-3 lighten-3">
          6x pr.week - 330€ for 3 months membership
        </p>
        <span class="red-text text-lighten-1">
          You are required to choose which days of the week your kid is going to attend class
        </span>
      </div>
    </div>
    <div id="fee-private" class="section scrollspy col s12">
      <h3 class="header grey-text text-darken-4">Private Class</h3>
      <p class="grey-text text-darken-3 lighten-3">
        For more information about Private classes, call or send an Email to
        coach Pablo.
      </p>
      <a
        href="#contact"
        class="btn grey darken-4 waves-effect waves-light col m2 offset-m5 offset-s4"
      >
        Contact
      </a>
    </div>
    <warning-cards></warning-cards>
  </div>
</template>

<script>
import WarningCards from "../layout/WarningCards.vue";

export default {
  components: {
    WarningCards
  },
  computed: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
h2.header {
  margin-bottom: 0;
  letter-spacing: 1px;
  font-size: 5rem;
}
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
  margin: 3rem;
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
  font-size: x-large;
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
#header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
}
.header-highlight {
  width: 10rem;
  border-top: 4px orange solid;
}
.highlight-line {
  width: 35rem;
  border-top: 3px orange solid;
}
.header {
  font-weight: bold;
  margin: 2rem;
}
</style>
