<template>
<div class="wrapper">
  <slot/>
</div>
</template>

<script>
export default {
  name: 'Wrapper',
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-items: center;
  align-content: center;
  background: #eee;
}
</style>
