<template>
<div class="result-container" v-infinite-scroll="loadMore">
  <div class="results-wrapper">
    <Profile v-for="profile in filteredProfiles"
             :key="profile.email"
             :profile="profile"
             :highlight-text="searchString"
    />
  </div>
</div>
</template>

<script>
import fetchProfiles from 'app/api/profiles';
import Profile from './Profile';

const PROFILES_PER_PAGE = 20;

export default {
  name: 'ResultBox',
  components: { Profile },
  created() {
    this.fetchData();
  },
  data() {
    return {
      page: 1,
      renderedProfiles: [],
      allProfiles: [],
    };
  },
  props: {
    searchString: String,
  },
  computed: {
    filteredProfiles() {
      if (this.searchString) {
        return this.renderedProfiles.filter((profile) => this.searchStringFoundInProfile(profile, this.searchString));
      }

      return this.renderedProfiles;
    },
  },
  methods: {
    fetchData() {
      fetchProfiles()
        .then((result) => {
          this.allProfiles = result;
          this.renderedProfiles.push(...this.allProfiles.slice(0, PROFILES_PER_PAGE));
        });
    },
    loadMore() {
      setTimeout(() => {
        const startIndex = this.page * PROFILES_PER_PAGE;
        const endIndex = startIndex + PROFILES_PER_PAGE - 1;
        this.renderedProfiles.push(...this.allProfiles.slice(startIndex, endIndex));
        this.page += 1;
      }, 50);
    },
    searchStringFoundInProfile(profile, searchString) {
      const regex = new RegExp(searchString.toUpperCase(), 'g');
      return JSON.stringify(profile).toUpperCase().match(regex);
    },
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
