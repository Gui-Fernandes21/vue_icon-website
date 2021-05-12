<template>
  <main>
    <div>
      <the-nav></the-nav>
    </div>
    <div class="row">
      <parallax imageUrl="/img/icon-team-picture.jpg" />
      <logo-cards></logo-cards>

      <div class="section white">
        <div class="row center container">
          <div class="center-align center col m12 s12">
            <div class="section scrollspy" id="what-bjj">
              <h2 class="header">What is Brazilian Jiu Jitsu?</h2>
              <p
                style="font-size: large;"
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
              <br />
              <section class="section section-icons grey lighten-4 center">
                <div class="container">
                  <div class="row">
                    <div class="col s12 m4">
                      <div class="card-panel">
                        <i class="material-icons large orange-text"
                          >fitness_center</i
                        >
                        <h6 class="header">Great For Exercising</h6>
                      </div>
                    </div>
                    <div class="col s12 m4">
                      <div class="card-panel">
                        <i class="material-icons large orange-text">group</i>
                        <h6 class="header">Great For Social Networking</h6>
                      </div>
                    </div>
                    <div class="col s12 m4">
                      <div class="card-panel">
                        <i class="material-icons large orange-text"
                          >self_improvement</i
                        >
                        <h6 class="header">Great For Self Improvement</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <br />
              <h2 class="header">About our Head Coach</h2>
              <br />
              <img
                style="display: unset; border-radius: 10px; max-width: 45%;"
                src="/img/pablo_picture.jpg"
                class="responsive-img materialboxed"
              />
              <p
                style="font-size: large;"
                class="grey-text text-darken-3 lighten-3"
              >
                Our main coach is Pablo Cerino, He holds a 4rd degree black belt
                in Brazilian Jiu Jitsu and has been practicing BJJ since 1993.
                <br />
                Pablo actively competes in the biggest competitions and achieve
                great results <br />
                He has an extensive knowledge about BJJ and self defense and
                years of coaching experience. <br />
                Pablo is a Brazilian native but has lived in Brussels since 2008
                and speaks Portugese, French and English fluently.
              </p>
            </div>
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
                style="font-size: large;"
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
              <h2 class="header">The Gym</h2>
              <br />
              <p
                style="font-size: large;"
                class="grey-text text-darken-2 lighten-4"
              >
                We have a full equipped facility, with a nice reception to
                welcome newcomers, 2 clean locker rooms, one for women and one
                for men equipped with showers on both, and a big training area
                with more than 150 meters square of professional tatami.
              </p>
              <br />
              <div style="margin-top: 9px;" class="col s6 m3">
                <img
                  src="/img/icon-reception.jpg"
                  class="materialboxed"
                  width="100%"
                />
              </div>
              <div style="margin-top: 9px;" class="col s6 m3">
                <img
                  src="/img/bjj-gym-reception_orig.jpg"
                  class="materialboxed"
                  width="100%"
                />
              </div>
              <div style="margin-top: 9px;" class="col s6 m3">
                <img
                  src="/img/icon-mats.jpg"
                  class="materialboxed"
                  width="100%"
                />
              </div>
              <div style="margin-top: 9px;" class="col s6 m3">
                <img
                  src="/img/bjj-tatami_orig.jpg"
                  class="materialboxed"
                  width="100%"
                />
              </div>
              <div style="margin-top: 9px;" class="col s6 m3">
                <img
                  src="/img/bjj-locker-room_orig.jpg"
                  class="materialboxed"
                  width="100%"
                />
              </div>
              <div style="margin-top: 9px;" class="col s6 m3">
                <img
                  src="/img/female-bjj-locker-room-shower_orig.jpg"
                  class="materialboxed"
                  width="100%"
                />
              </div>
              <div style="margin-top: 9px;" class="col s6 m3">
                <img
                  src="/img/bjj-shower_orig.jpg"
                  class="materialboxed"
                  width="100%"
                />
              </div>
              <div style="margin-top: 9px;" class="col s6 m3">
                <img
                  src="/img/linedup-team-picture.jpg"
                  class="materialboxed hide-on-med-and-down"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div style="height: 150px;"></div>
      </div>
      <parallax imageUrl="/img/seminar-2018.jpg" />
      <section>
        <div class="section white">
          <div class="row container">
            <div class="col s12 center center-align">
              <kids-table></kids-table>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="section white">
          <div class="row container">
            <div class="col s12 center center-align">
              <adults-table></adults-table>
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
    <section id="contact">
      <footer class="section page-footer nav-color">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <div class="section scrollspy" id="contact">
                <div class="col s12">
                  <h3 class="header">Contact</h3>
                  <br />
                  <p>
                    <i
                      class="fa fa-instagram fa-lg"
                      style="margin-right: 5px;"
                      aria-hidden="true"
                    ></i>
                    IconBjjBelgium
                  </p>
                  <p>
                    <i
                      class="fa fa-facebook fa-lg"
                      style="margin-right: 10px;"
                      aria-hidden="true"
                    ></i
                    >Pablo Cerino
                  </p>
                  <p>
                    <i class="fa fa-phone fa-lg" aria-hidden="true"></i> +32 (0)
                    494 18 13 63
                  </p>
                  <p>
                    <i
                      class="fa fa-at fa-lg"
                      style="margin-right: 3px;"
                      aria-hidden="true"
                    ></i>
                    pcerinorj@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div class="col s12 m6 right-align">
              <form action="/send-email" method="POST">
                <div class="row">
                  <div class="input-field col s6 m6">
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      class="white-text validate"
                    />
                    <label for="first_name">First Name</label>
                  </div>
                  <div class="input-field col s6 m6">
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      class="white-text validate"
                    />
                    <label for="last_name">Last Name</label>
                  </div>
                  <div class="input-field col s12 m12">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      class="white-text validate"
                    />
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field col s12">
                    <textarea
                      name="content"
                      id="content"
                      cols="30"
                      rows="10"
                      class="materialize-textarea white-text"
                    ></textarea>
                    <label for="content">Content</label>
                  </div>
                  <!-- <div
                    style="background-color: rgba(255, 126, 126, 0.541); border-radius: 10px;"
                    class="center-align col s12"
                  ></div> -->
                  <div
                    style="margin-top: 10px;"
                    class="col s6 offset-s2 m5 offset-m3"
                  >
                    <button
                      type="submit"
                      class="center-align orange darken-1 btn waves-effect waves-light"
                    >
                      Send Email
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container center-align">
            Copyright © 2020 IconBrussels
          </div>
        </div>
      </footer>
    </section>
  </main>

  <!-- sidenav for mobile -->
  <side-nav></side-nav>

  <div style="margin-top: 700px;"></div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import Parallax from "./components/Parallax.vue";
import SideNav from "./components/mobile/SideNav.vue";

import LogoCards from "./components/layout/LogoCards.vue";
import KidsTable from "./components/layout/KidsTable.vue";
import AdultsTable from "./components/layout/AdultsTable.vue";

import FeeSection from "./components/sections/FeeSection.vue";
import FaqSection from './components/sections/FaqSection.vue';

export default {
  components: {
    TheNav,
    Parallax,
    SideNav,
    LogoCards,
    KidsTable,
    AdultsTable,
    FeeSection,
    FaqSection
  }
};
</script>

<style></style>
