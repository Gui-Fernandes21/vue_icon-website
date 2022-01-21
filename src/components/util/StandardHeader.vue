<template>
  <header id="header-container">
    <div>
      <h2 class="header">
        <slot></slot>
      </h2>
      <div :class="highlightToggle"></div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['highlight'],
  computed: {
    highlightToggle() {
      if (this.highlight === false) {
        return '';
      } else if (this.highlight === true) {
        return 'header-highlight';
      } else {
        return 'header-highlight';
      }
    }
  }
}
</script>

<style scoped>
h2.header {
  margin-bottom: 0;
  letter-spacing: 1px;
  font-size: 3.5rem;
}
.header {
  font-weight: bold;
}
#header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 4rem;
}
.header-highlight {
  height: 3px;
  width: calc(100% - 3rem);
  margin-left: 1.5rem;
  background: orange;
}
</style>
