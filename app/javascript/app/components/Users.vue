<template>
  <div class="users">
    <recycle-scroller :items="users" :item-size="154" class="users__scroller" keyField="email" v-slot="{ item }">
      <user-card :user="item" :highlighted="filter" class="users__item" />
    </recycle-scroller>
  </div>
</template>

<script>
import { RecycleScroller } from 'vue-virtual-scroller';
import UserCard from './UserCard';

export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
    filter: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      item: UserCard,
    }
  },
  components: {
    UserCard,
    RecycleScroller,
  },
};
</script>

<style scoped>
  .users {
    position: relative;

    &__item {
      margin-top: 20px;
    }

    &__scroller {
      height: 100%;
      width: 100%;
    }
  }
</style>
