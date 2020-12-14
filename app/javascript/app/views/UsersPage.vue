<template>
  <div class="container users-page">
    <SearchBar @change="updateRoute"/>
    <!-- <Users :users="users"/> -->
    <Users :users="filteredList"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Users from '../components/Users'
  import SearchBar from '../components/SearchBar'
  import { filterByValue } from '../utils'

  export default {
    name: 'UsersPage',
    components: {
      Users,
      SearchBar
    },
    data() {
      return {
        query: ''
      }
    },
    // data() {
    // return {
    //   users: [{"name":"Ms. Alfonzo Stoltenberg","email":"keven@grady.net","title":"Direct Implementation Producer","city":"Norvalville","address":"9138 Stiedemann Ports","avatar":"https://robohash.org/possimusdoloresid.png?size=300x300\u0026set=set1"},{"name":"Lelia Willms","email":"clementina_ryan@dooley.com","title":"Internal Security Assistant","city":"Melisaton","address":"166 Waters Falls","avatar":"https://robohash.org/perferendissapienteodit.png?size=300x300\u0026set=set1"},{"name":"Jermain Gorczany","email":"betsyGorczany@walsh.io","title":"National Tactics Designer","city":"Nealburgh","address":"1846 Murazik Hill","avatar":"https://robohash.org/voluptatibusearumconsequatur.png?size=300x300\u0026set=set1"},{"name":"Zakary White","email":"maximilliaZakary@bednar.net","title":"Dynamic Web Associate","city":"Terrellview","address":"3764 Kyler Grove","avatar":"https://robohash.org/solutaametminima.png?size=300x300\u0026set=set1"},{"name":"Rosa Cronin DVM","email":"dale@reichel.name","title":"Future Configuration Designer","city":"Port Ottisstad","address":"73918 Roxanne Port","avatar":"https://robohash.org/nesciuntetmaxime.png?size=300x300\u0026set=set1"},{"name":"Mortimer Haley","email":"flavie@sanford.co","title":"National Program Manager","city":"Darianside","address":"58813 Kuvalis Knolls","avatar":"https://robohash.org/blanditiisvoluptatescupiditate.png?size=300x300\u0026set=set1"},{"name":"Peggie Nitzsche","email":"geo.gleichner@roobheller.net","title":"District Response Strategist","city":"Port Judd","address":"9686 Alysa Point","avatar":"https://robohash.org/veniamaccusamusminus.png?size=300x300\u0026set=set1"}, {"name":"Peggie Nitzsche","email":"geo.gleichner@roobheller.net","title":"District Response Strategist","city":"Port Judd","address":"9686 Alysa Point","avatar":"https://robohash.org/veniamaccusamusminus.png?size=300x300\u0026set=set1"}, {"name":"Peggie Nitzsche","email":"geo.gleichner@roobheller.net","title":"District Response Strategist","city":"Port Judd","address":"9686 Alysa Point","avatar":"https://robohash.org/veniamaccusamusminus.png?size=300x300\u0026set=set1"}, {"name":"Peggie Nitzsche","email":"geo.gleichner@roobheller.net","title":"District Response Strategist","city":"Port Judd","address":"9686 Alysa Point","avatar":"https://robohash.org/veniamaccusamusminus.png?size=300x300\u0026set=set1"}]
    // }
    // },
    mounted() {
      this.$store.dispatch('GET_USERS')
    },
    computed: {
      filteredList() {
        return filterByValue(this.users, this.searchQuery)
      },
      ...mapGetters(['users', 'searchQuery'])
    },
    methods: {
      searchUsers(query) {
        this.$store.dispatch('SEARCH_USERS', query)
      },
      updateRoute(query) {
        this.$router.push({ name: 'Search', path: '/search/', params: { search: query }, addToHistory: false });
        this.searchUsers(query)
      }
    }
  }
</script>
<style>
  .container {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
  }
  .users-page {
    padding: 0 3%;
    flex: 1 1 auto;
    backface-visibility: hidden;
    flex-direction: column;
    max-height: 100vh;
    max-width: 100%;
    position: relative;
    margin: 0;
  }
</style>