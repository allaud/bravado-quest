<template>
  <div class="box">
    <SearchBox :initial-value="currentSearchString" :on-change="updateSearchString"/>
    <ResultBox :search-string="currentSearchString"/>
  </div>
</template>

<script>
import SearchBox from './SearchBox';
import ResultBox from './ResultBox';

export default {
  name: 'Box',
  components: { ResultBox, SearchBox },
  data() {
    return {
      currentSearchString: '',
    };
  },
  created() {
    this.setInitialState();
  },
  methods: {
    setInitialState() {
      const { href } = location;
      const index = href.indexOf('/search/');
      if (index === -1) return;

      this.currentSearchString = href.substring(index).replace('/search/', '');
    },
    updateSearchString(newValue) {
      const newPath = `/search/${newValue}`;
      window.history.pushState({}, '', newPath);
      this.currentSearchString = newValue;
    },
  },
};
</script>

<style scoped>
.box {
  width: 564px;
  height: 643px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-items: center;
}
</style>
