<template>
  <div class="section white">
    <div class="row center container">
      <div class="center-align center col s12">
        <div :id="id" class="section scrollspy">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>
