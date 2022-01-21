<template>
  <div class="parallax-container">
    <div class="parallax">
      <img :src="imageUrl" />
      <div class="backdrop-new"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageUrl"],
};
</script>

<style scoped>
.backdrop-new {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(#00000015, #0000006b) ;
  z-index: 50;
}

.parallax img {
  z-index: 3;
}
</style>
