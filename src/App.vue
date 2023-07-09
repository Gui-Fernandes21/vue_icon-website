<template>
  <main>
    <section>
      <the-nav></the-nav>
    </section>

    <parallax imageUrl="/img/icon-team-picture.jpg" />

    <div class="row">
      <section>
        <logo-cards></logo-cards>
        <introduction-section></introduction-section>
        <benefits-cards></benefits-cards>
      </section>

      <section>
        <head-coach-section v-if="!isMobile"></head-coach-section>
        <mobile-head-coach v-else></mobile-head-coach>
      </section>

      <parallax imageUrl="/img/bjj-training-brussels_orig.jpg" />

      <grid-helper :id="'location'">
        <location-section></location-section>
      </grid-helper>

      <grid-helper>
        <gym-section></gym-section>
      </grid-helper>

      <parallax imageUrl="/img/seminar-2018.jpg" />

      <grid-helper :id="'time-table'">
        <adults-table></adults-table>
      </grid-helper>

      <grid-helper :id="'kids-time-table'">
        <kids-table></kids-table>
      </grid-helper>

      <grid-helper :id="'fees'">
        <fee-section></fee-section>
      </grid-helper>

      <parallax imageUrl="/img/icon-team-precorona.jpg" />

      <grid-helper :id="'faq'">
        <faq-section></faq-section>
      </grid-helper>
      <!-- End -->
    </div>
    <!-- footer with contact info -->
    <contact-info-section></contact-info-section>
  </main>
  <!-- sidenav for mobile -->
  <side-nav></side-nav>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import Parallax from "./components/Parallax.vue";

import SideNav from "./components/mobile/SideNav.vue";
import MobileHeadCoach from "./components/mobile/MobileHeadCoach.vue";

import LogoCards from "./components/layout/LogoCards.vue";
import BenefitsCards from "./components/layout/BenefitsCards.vue";
import KidsTable from "./components/layout/KidsTable.vue";
import AdultsTable from "./components/layout/AdultsTable.vue";

import IntroductionSection from "./components/sections/IntroductionSection.vue";
import FeeSection from "./components/sections/FeeSection.vue";
import FaqSection from "./components/sections/FaqSection.vue";
import HeadCoachSection from "./components/sections/HeadCoachSection.vue";
import ContactInfoSection from "./components/sections/ContactInfo.vue";
import GymSection from "./components/sections/GymSection.vue";
import LocationSection from "./components/sections/LocationSection.vue";

import GridHelper from "./components/util/GridHelperScroll.vue";

export default {
  components: {
    TheNav,
    Parallax,
    SideNav,
    LogoCards,
    KidsTable,
    AdultsTable,
    FeeSection,
    FaqSection,
    HeadCoachSection,
    MobileHeadCoach,
    ContactInfoSection,
    BenefitsCards,
    GymSection,
    IntroductionSection,
    LocationSection,
    GridHelper,
  },
  data() {
    return {
      isMobile: this.$store.getters.getMobile,
    };
  },
  beforeCreate() {
    this.$store.dispatch("checkMobile");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

* {
  font-family: "Barlow Semi Condensed", sans-serif;
  box-sizing: border-box;
}
</style>