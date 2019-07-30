<template>
  <div class="search">
    <input type="text" placeholder="Search.." class="search__input" @input="handleInput" />
  </div>
</template>

<script>
import { debounce } from '../utils/core/delay';

export default {
  props: {

  },
  methods: {
    handleInput: debounce(function (event) {
      const value = (event.target.value || '').trim();
      this.$emit('change', value);
    }, 300)
  }
};
</script>

<style scoped>
  .search {
    background: url('../images/search.svg');

    &__input {
      background: #FAFAFA;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
      border-radius: 2px;
      font-size: 2.4rem;
      line-height: 1.16;
      color: rgba(0, 0, 0, 0.75);
      padding: 12px;
      width: 100%;
      border: none;
      outline: none;
    }
  }
</style>
