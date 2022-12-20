<template>
  <section id="contact">
    <footer class="section page-footer nav-color">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <div class="section scrollspy" id="contact">
              <div class="col s12">
                <h3 class="header">Contact</h3>
                <br />
                <p @click="navigateInsta">
                  <i
                    class="fa fa-instagram fa-lg"
                    style="margin-right: 5px"
                    aria-hidden="true"
                  ></i>
                  IconBjjBelgium
                </p>
                <p @click="navigateFace">
                  <i
                    class="fa fa-facebook fa-lg"
                    style="margin-right: 10px"
                    aria-hidden="true"
                  ></i
                  >Pablo Cerino
                </p>
                <p @click="test">
                  <i class="fa fa-phone fa-lg" aria-hidden="true"></i>
                  <a
                    href="tel:+32 (0) 494 18 13 63"
                    > +32 (0) 494 18 13 63</a
                  >
                </p>
                <p @click="navigateEmail">
                  <i
                    class="fa fa-at fa-lg"
                    style="margin-right: 3px"
                    aria-hidden="true"
                  ></i>
                  pcerinorj@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div class="col s12 m6 right-align">
            <contact-form></contact-form>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container center-align">Copyright © 2020 IconBrussels</div>
      </div>
    </footer>
  </section>
</template>

<script>
import ContactForm from "../util/ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
  methods: {
    navigateInsta() {
      return window.open(
        "https://www.instagram.com/iconbjjbelgium/?hl=en",
        "_blank"
      );
    },
    navigateFace() {
      return window.open(
        "https://www.facebook.com/pablo.cerino.iconbjj",
        "_blank"
      );
    },
    navigateEmail() {
      window.open('mailto:pcerinorj@gmail.com','_blank');
    }
  },
};
</script>

<style scoped>
p {
  cursor: pointer;
}
</style>
