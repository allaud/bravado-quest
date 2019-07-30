<template>
  <div class="placeholder">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Nothing found...',
    },
  },
};
</script>

<style scoped>
  .placeholder {
    font-size: 1.6rem;
    text-align: center;
    padding: 20px;
  }
</style>
