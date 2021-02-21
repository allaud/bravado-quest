<template>
<div class="result-container" v-infinite-scroll="onChangePage">
  <div class="results-wrapper">
    <Profile
        v-for="profile in profiles"
        :key="profile.email"
        :profile="profile"
        :highlight-text="searchString"
    />
  </div>
</div>
</template>

<script>
import Profile from './Profile';

export default {
  name: 'ResultBox',
  components: { Profile },
  created() {
    this.getNextPage();
  },
  props: {
    searchString: String,
    profiles: Array,
    onChangePage: Function,
  },
};
</script>

<style lang="scss" scoped>
.result-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  background: transparent;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 15px;
  padding: 0 15px 0 15px;

  .results-wrapper {
    width: 100%;
  }

  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>
