<template>
  <section>
    <div class="center-align center col s12 m4 offset-m4">
      <div class="section orange lighten-2">
        <i class="material-icons small">priority_high</i>
        <p>First Class is Always Free!</p>
      </div>
    </div>
    <section class="section section-icons center">
      <div class="container">
        <div class="row">
          <div class="col s6 m6">
            <div class="card-panel">
              <i class="material-icons small orange-text text-lighten-2">
                warning
              </i>
              <p>
                In addition, all students need to pay a 30€ annual insurance
                fee.
              </p>
            </div>
          </div>
          <div class="col s6 m6">
            <div class="card-panel">
              <i class="material-icons small orange-text text-lighten-2">
                warning
              </i>
              <p>
                To know more about the fees, call:
              </p>
              <p class="phone">+32 (0) 494 18 13 63</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isMobile: this.$store.getters.getMobile,
    };
  },
};
</script>

<style scoped>
div.section.orange {
  border-radius: 10px;
  margin: 2rem auto 1rem;
}
.card-panel p {
  margin: 0;
  padding: 0;
}
.phone {
  font-weight: bold;
}
p {
  font-size: 13px;
}
</style>
