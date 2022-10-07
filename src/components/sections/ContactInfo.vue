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
                <p>
                  <i
                    class="fa fa-instagram fa-lg"
                    style="margin-right: 5px"
                    aria-hidden="true"
                  ></i>
                  IconBjjBelgium
                </p>
                <p>
                  <i
                    class="fa fa-facebook fa-lg"
                    style="margin-right: 10px"
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
                    style="margin-right: 3px"
                    aria-hidden="true"
                  ></i>
                  IconBrussels@gmail.com
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
};
</script>
