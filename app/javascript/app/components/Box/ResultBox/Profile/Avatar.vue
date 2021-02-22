<template>
<div class="avatar">
  <img v-lazy="src">
</div>
</template>

<script>
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);

export default {
  name: 'Avatar',
  props: {
    src: String,
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  width: 134px;
  height: 100%;
  background: #BCBCBC;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
