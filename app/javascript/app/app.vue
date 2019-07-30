<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './styles/app.css';

export default {
  name: 'app'
}
</script>

<style scoped>
  .app {
    position: relative;
  }
</style>
