<template>
  <div class="section scrollspy" id="faq">
    <div id="header-container">
      <h2 class="header">FAQ</h2>
      <div class="header-highlight"></div>
    </div>
    <ul class="collapsible">
      <faq-item v-for="obj in DATA" :faqObject="obj" :key="obj"></faq-item>
    </ul>
  </div>
</template>

<script>
import FaqItem from "../util/FaqItem.vue";
import data from '../../../data.json';

export default {
  components: {
    FaqItem
  },
  data() {
    return {
      DATA: data
    };
  }
};
</script>

<style scoped>
h2.header {
  margin-bottom: 0;
  letter-spacing: 1px;
  font-size: 3.5rem;
}
.header {
  font-weight: bold;
  margin: 2rem;
}
#header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5rem;
}
.header-highlight {
  width: 6rem;
  border-top: 4px orange solid;
}
</style>
