<template>
  <div class="search-icon">
    <img :src="searchImage" alt="search"/>
  </div>
</template>

<script>
import searchImage from './search.svg';

export default {
  name: 'Icon',
  data() {
    return {
      searchImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-icon {
  padding: 10px;
  margin-right: 25px;

  img {
    height: 100%;
  }
}
</style>
