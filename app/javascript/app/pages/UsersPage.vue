<template>
  <div class="users-page">
    <div class="users-page__container">
      <search :value="filter" @change="handleSearch" />
      <loader v-if="loading" />
      <placeholder text="Nothing found, please try to change your searching criteria..." v-if="notFound" />
      <users :users="users" :filter="filter" class="users-page__users" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from '../store';
import * as types from '../store/mutationTypes/types';
import { Search, Loader, Placeholder, Users } from '../components';
import api from '../utils/api';

export default {
  components: {
    Search,
    Loader,
    Placeholder,
    Users,
  },
  async created() {
    const { search = '' } = this.$route.params;

    store.dispatch({ type: types.ToggleLoading, loading: true });
    const users = await api.users.list();
    store.dispatch({ type: types.UsersLoaded, users });
    store.dispatch({ type: types.SearchUsers, value: search });
    store.dispatch({ type: types.ToggleLoading, loading: false });
  },
  computed: {
    ...mapState({
      loading: state => state.users.loading,
      users: state => state.users.filtered,
      filter: state => state.users.filter,
    }),
    notFound() {
      return !this.loading && !this.users.length && !!this.filter;
    },
  },
  methods: {
    handleSearch(value) {
      store.dispatch({ type: types.SearchUsers, value });
    }
  }
}
</script>

<style scoped>
  .users-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: var(--gallery);

    &__container {
      background: var(--white);
      padding: 19px 12px;
      width: 564px;
      max-width: 100%;
      height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;

      @media (min-width: 992px) {
        height: 90vh;
      }
    }

    &__loader {
      font-size: 1.6rem;
      padding: 10px;
      text-align: center;
    }

    &__users {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>
