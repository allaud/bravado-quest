import axios from 'axios'

let actions = {
  SEARCH_USERS({ commit }, query) {
    commit('SET_SEARCH_QUERY', query)
  },
  async GET_USERS({ commit }) {
    try {
      const { data } = await axios.get('/users.json')
      commit('SET_USERS', data)
    } catch (error) {
      console.log('error>>>>', error)
    }
  }
}

export default actions
