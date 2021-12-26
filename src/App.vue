<template>
  <main>
    <div>
      <the-nav></the-nav>
    </div>

    <parallax imageUrl="/img/icon-team-picture.jpg" />

    <div class="row">
      
      <logo-cards></logo-cards>

      <div class="section white">
        <div class="row center container">
          <div class="center-align center col m12 s12">
            <div class="section scrollspy" id="what-bjj">
              <h2 class="header">What is Brazilian Jiu Jitsu?</h2>
              <p
                style="font-size: large"
                class="grey-text text-darken-3 lighten-3"
              >
                Brazilian Jiu Jitsu or BJJ is a martial art, focused on self
                defense and ground fighting. <br />
                BJJ was developed to allow people to effectively defend
                themselves against larger opponents or attackers. <br />
                Brazilian Jiu Jitsu is a game of techniques with the goal to get
                your opponent to surrender by utilizing leverage and locks
                without any kicks or punches. <br />
                BJJ is a great way for women, children and men to get in a great
                shape and make them ready to defend themselves if needed. It´s
                also fun and a you become a part of a great team.
              </p>
            </div>

            <benefits-cards></benefits-cards>

            <head-coach-section v-if="!isMobile"></head-coach-section>
            <mobile-head-coach v-else></mobile-head-coach>
          </div>
        </div>
      </div>
      
      <parallax imageUrl="/img/bjj-training-brussels_orig.jpg" />

      <div class="section white">
        <div class="row center container">
          <div class="center-align center col s12">
            <div id="location" class="section scrollspy">
              <h2 class="header">Where are we located?</h2>
              <p
                style="font-size: large"
                class="grey-text text-darken-3 lighten-3"
              >
                Our Gym is located at:
                <br />Rue Dodonée 70, 1180 Uccle, Belgium<br /><br />
                <a
                  class="btn waves-effect waves-light grey darken-3 lighten-3"
                  target="_blank"
                  href="https://goo.gl/maps/nNvJzYjVFfxirpat5"
                  >Google Maps<i class="material-icons red-text right"
                    >place</i
                  ></a
                >
              </p>
              <br />
              <br />
              <section>
                <gym-section></gym-section>
              </section>
            </div>
          </div>
        </div>
        <div style="height: 150px"></div>
      </div>

      <parallax imageUrl="/img/seminar-2018.jpg" />
      
      <section>
        <div class="section white">
          <div class="row container">
            <div class="col s12 center center-align">
              <adults-table></adults-table>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="section white">
          <div class="row container">
            <div class="col s12 center center-align">
              <kids-table></kids-table>
            </div>
          </div>
        </div>
      </section>

      <br />

      <section>
        <div class="section white">
          <div class="row center container">
            <div class="col s12 center-aligned">
              <fee-section></fee-section>
            </div>
          </div>
        </div>
      </section>

      <parallax imageUrl="/img/icon-team-precorona.jpg" />

      <section>
        <div class="section white">
          <div class="row center container">
            <div class="center-align col s12">
              <faq-section></faq-section>
            </div>
          </div>
        </div>
      </section>
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
import KidsTable from "./components/layout/KidsTable.vue";
import AdultsTable from "./components/layout/AdultsTable.vue";
import BenefitsCards from "./components/layout/BenefitsCards.vue";

import FeeSection from "./components/sections/FeeSection.vue";
import FaqSection from "./components/sections/FaqSection.vue";
import HeadCoachSection from "./components/sections/HeadCoachSection.vue";
import ContactInfoSection from "./components/sections/ContactInfo.vue";
import GymSection from "./components/sections/GymSection.vue";

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
    BenefitsCards,
    HeadCoachSection,
    MobileHeadCoach,
    ContactInfoSection,
    GymSection,
  },
  data() {
    return {
      isMobile: null,
    };
  },
  created() {
    if (screen.width <= 760) {
      return (this.isMobile = true);
    } else {
      return (this.isMobile = false);
    }
  },
};
</script>

<style>
* {
  font-family: "Barlow Semi Condensed", sans-serif;
}
</style>
