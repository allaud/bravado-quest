<template>
  <div class="container users-wrapper">
    <RecycleScroller page-mode :items="users" :item-size="200" item-height="420" class="scroller" keyField="name" v-slot="{ item }">
        <User :user="item" class="item" />
    </RecycleScroller>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { RecycleScroller } from 'vue-virtual-scroller';

  import User from '../components/User'

  export default {
    name: 'Users',
    props: ['users'],
    components: {
      User,
      RecycleScroller
    }
  }
</script>
<style lang="scss" scoped>
  .users-wrapper {
    flex-direction: column;
    margin-top: 10%;
    max-height: calc(100% - 20px);

      .scroller {
        height: 100%;
        width: 100%;
      }
  
      .item {
        margin-top: 20px;
        border: 1px solid;
        border-radius: 2px;
        background:#fafafa;
      }
  }
  </style>
