let mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_SEARCH_QUERY(state, searchQuery) {
    state.searchQuery = searchQuery
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  RESET_USERS(state) {
    state.users = null
  }
}

export default mutations