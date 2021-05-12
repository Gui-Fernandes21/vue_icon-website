<template>
  <div class="parallax-container">
    <div class="parallax">
      <img :src="imageUrl"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageUrl'],
}
</script>

