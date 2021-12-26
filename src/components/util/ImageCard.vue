<template>
  <div class="col s6 m3">
    <img :src="path" class="materialboxed"/>
  </div>
</template>

<script>
export default {
  props: ['path']
}
</script>

<style scoped>
div {
  margin-top: 9px;
}
img {
  width: 100%;
  height: 100%;
}
</style>