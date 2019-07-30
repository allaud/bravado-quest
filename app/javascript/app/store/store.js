import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutationTypes/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: {
      list: [],
      filtered: [],
      filter: '',
      loading: false,
    },
  },
  actions: {
    [types.ToggleLoading](context, payload) {
      context.commit(types.ToggleLoading, payload);
    },
    [types.UsersLoaded](context, payload) {
      context.commit(types.UsersLoaded, payload);
    },
    [types.SearchUsers](context, payload) {
      context.commit(types.SearchUsers, payload);
    },
  },
  mutations: {
    [types.UsersLoaded](state, payload) {
      state.users.list = payload.users;
      state.users.filtered = state.users.list;
    },
    [types.ToggleLoading](state, { loading }) {
      state.users.loading = loading;
    },
    [types.SearchUsers](state, { value }) {
      state.users.filter = value;

      if (!value) {
        state.users.filtered = state.users.list;
      } else {
        state.users.filtered = state.users.list.filter(u => {
          const searchString = `${u.name} ${u.city} ${u.address} ${u.title} ${u.email} ${u.address}`.toLowerCase();
          return searchString.includes(value.toLowerCase());
        });
      }
    },
  },
});
