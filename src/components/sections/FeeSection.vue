<template>
  <standard-header>Fees</standard-header>

  <div id="fee-adults" class="section scrollspy col s12">
    <header>
      <h1>Adult Classes</h1>
    </header>

    <section>
      <div id="general">
        <div class="desk-card" v-if="!isMobile">
          <price-card
            v-for="pricing in adultPricing"
            :key="pricing"
            :data="pricing"
          ></price-card>
        </div>
        <div class="mob" v-else>
          <price-card-mob
            v-for="pricing in adultPricing"
            :key="pricing"
            :data="pricing"
          />
        </div>
      </div>

      <header>
        <h3>REDUCED PRICES FOR STUDENTS AND WOMEN</h3>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </header>

      <div id="reduced">
        <div class="desk-card" v-if="!isMobile">
          <price-card
            v-for="pricing in reducedPricing"
            :key="pricing"
            :data="pricing"
          />
        </div>
        <div class="mob" v-else>
          <price-card-mob
            v-for="pricing in reducedPricing"
            :key="pricing"
            :data="pricing"
          />
        </div>
      </div>
    </section>
  </div>

  <div id="fee-kids" class="section scrollspy col s12">
    <header>
      <h1>Kid's Class</h1>
    </header>
    <section id="kids-cards">
      <div class="desk-card" v-if="!isMobile">
        <price-card
          v-for="pricing in kidsPricing"
          :key="pricing"
          :data="pricing"
        ></price-card>
      </div>
      <div class="mob" v-else>
        <price-card-mob
          v-for="pricing in kidsPricing"
          :key="pricing"
          :data="pricing"
        />
      </div>
    </section>
  </div>

  <div id="fee-private" class="section scrollspy col s12">
    <header>
      <h1>Private Class</h1>
    </header>
    <section>
      <p class="grey-text text-darken-3 lighten-3">
        For more information about Private classes, call or send an Email to
        coach Pablo.
      </p>
      <a
        href="#contact"
        class="btn grey darken-4 waves-effect waves-light col m2 s4 offset-m5 offset-s4"
      >
        Contact
      </a>
    </section>
  </div>
  <warning-cards></warning-cards>
</template>

<script>
import WarningCards from "../layout/WarningCards.vue";
import StandardHeader from "../util/StandardHeader.vue";
import PriceCard from "../layout/PriceCard.vue";
import PriceCardMob from "../mobile/PriceCardMob.vue";

export default {
  data() {
    return {
      adultPricing: [
        { title: "Month", price: 120, style: "basic" },
        { title: "Trimester", price: 285, style: "basic" },
        { title: "Semester", price: 510, style: "basic" },
        { title: "Year", price: 900, style: "basic" },
      ],
      reducedPricing: [
        { title: "Month", price: 100, style: "reduced" },
        { title: "Trimester", price: 255, style: "reduced" },
        { title: "Semester", price: 450, style: "reduced" },
        { title: "Year", price: 780, style: "reduced" },
      ],
      kidsPricing: [
        { title: "Semester", price: 390, style: "kids" },
        { title: "Year", price: 660, style: "kids" },
      ],
    };
  },
  components: {
    WarningCards,
    StandardHeader,
    PriceCard,
    PriceCardMob,
  },
  computed: {
    // isMobile() {
    //   if (screen.width <= 760) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    isMobile() {
      return this.$store.getters.getMobile;
    },
  },
};
</script>

<style scoped>
.grey-text.text-darken-3 {
  font-size: large;
}
#general,
#reduced,
.desk-card,
.mob {
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
#kids-cards {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1rem 0;
}
#reduced-mobile {
  margin: 3rem;
  border: 3px orange solid;
}
#fee-adults {
  margin-bottom: 3rem;
}
#fee-adults h3 {
  color: #212121;
  font-weight: 300;
}
#fee-private p {
  margin: 2rem;
}
#fee-private {
  margin-bottom: 5rem;
}
.highlight-line {
  height: 3px;
  width: calc(100% - 32vw);
  background: orange;
}

span {
  color: #ef5350;
  font-weight: bold;
  font-size: medium;
}

#general p,
#students p,
#fee-kids p {
  color: #424242;
  font-size: large;
}

ion-icon {
  font-size: 3em;
  font-weight: 100;
}
</style>
