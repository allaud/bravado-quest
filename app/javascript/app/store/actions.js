import axios from 'axios';

let actions = {
  SEARCH_USERS({ commit }, query) {
    commit('SET_SEARCH_QUERY', query);
  },
  SET_LOADING({ commit }, state) {
    commit('SET_LOADING', state);
  },
  async GET_USERS({ commit }) {
    try {
      commit('SET_LOADING', true);
      const { data } = await axios.get('/users.json');
      commit('SET_USERS', data);
      commit('SET_LOADING', false);
    } catch (error) {
      return error;
    }
  }
};

export default actions;
