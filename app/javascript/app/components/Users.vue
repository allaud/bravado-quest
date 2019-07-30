<template>
  <div class="users">
    <user-card v-for="user in users" :key="user.id" :user="user" :highlighted="filter" class="users__item" />
  </div>
</template>

<script>
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
  },
};
</script>

<style scoped>
  .users {
    position: relative;

    & > div {
      overflow-y: hidden !important;
    }

    &__item {
      margin-top: 20px;
    }
  }
</style>
