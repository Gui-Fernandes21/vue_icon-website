<template>
  <li>
    <div class="collapsible-header">
      <i class="fa fa-question-circle"></i>{{ faqObject.question }}
    </div>
    <div class="collapsible-body">
      <span>{{ faqObject.answer }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    faqObject: Object
  }
};
</script>
