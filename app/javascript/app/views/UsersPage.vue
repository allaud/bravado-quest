<template>
  <div class="container users-page">
    <SearchBar @change="updateRoute" />
    <div class="container users-wrapper">
      <pulse-loader v-if="loading" color="#9acac3" size="20px"></pulse-loader>
      <Users :users="filteredList" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

import Users from "../components/Users";
import SearchBar from "../components/SearchBar";
import { filterByValue } from "../utils";

export default {
  name: "UsersPage",
  components: {
    Users,
    SearchBar,
    PulseLoader,
  },
  data() {
    return {
      query: ""
    };
  },
  mounted() {
    this.$store.dispatch("GET_USERS");
  },
  computed: {
    filteredList() {
      const filtered = filterByValue(this.users, this.searchQuery);
      this.$store.dispatch("SET_LOADING", false);
      return filtered;
    },
    ...mapGetters(["users", "searchQuery", "loading"]),
  },
  methods: {
    searchUsers(query) {
      this.$store.dispatch("SEARCH_USERS", query);
    },
    updateRoute(query) {
      this.$router.push({
        name: "Search",
        path: "/search/",
        params: { search: query },
        addToHistory: false,
      });
      this.searchUsers(query);
    },
  },
};
</script>
<style lang="scss">
.container {
  display: flex;
  text-align: center;
}
.users-page {
  padding: 3%;
  flex-direction: column;
  align-items: center;
  max-height: calc(100vh - 9rem);
  overflow: scroll;
  margin-top: 3rem;
  @media (max-width: 727px) {
    max-height: calc(100vh - 5rem);
  }

  .users-wrapper {
    flex-direction: column;
    margin-top: 8%;
    width: 90%;
    @media (max-width: 727px) {
      margin-top: 25%;
      width: 97%;
    }
  }

  @media (max-width: 727px) {
    .v-spinner {
      margin-top: 5%;
    }
  }
}
</style>