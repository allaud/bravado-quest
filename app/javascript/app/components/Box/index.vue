<template>
  <div class="box">
    <SearchBox :initial-value="currentSearchString" :on-change="updateSearchString"/>
    <ResultBox
        :search-string="currentSearchString"
        :profiles="profiles"
        :on-change-page="loadMore"
    />
  </div>
</template>

<script>
import fetchProfiles from 'app/api/profiles';
import SearchBox from './SearchBox';
import ResultBox from './ResultBox';

export default {
  name: 'Box',
  components: { ResultBox, SearchBox },
  data() {
    return {
      currentSearchString: '',
      profiles: [],
      page: 0,
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
    clearProfiles() {
      this.page = 0;
      this.profiles = [];
    },
    updateSearchString(newValue) {
      const newPath = `/search/${newValue}`;
      window.history.pushState({}, '', newPath);
      this.currentSearchString = newValue;
      this.clearProfiles();
      this.getNextPage();
    },
    getNextPage() {
      fetchProfiles(this.currentSearchString, this.page)
        .then((profiles) => {
          this.profiles.push(...profiles);
          this.page += 1;
        });
    },
    loadMore() {
      setTimeout(() => {
        this.getNextPage();
      }, 50);
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
