<template>
<div class="search-box-wrapper">
  <div class="search-box">
    <Icon/>
    <input v-model="searchString" @input="onChangeInputHandler">
  </div>
</div>
</template>

<script>
import Icon from './Icon';

export default {
  name: 'SearchBox',
  components: { Icon },
  data() {
    return {
      searchString: this.initialValue,
    };
  },
  props: {
    initialValue: String,
    onChange: Function,
  },
  methods: {
    onChangeInputHandler({ target }) {
      const searchString = target.value;
      this.onChange(searchString);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-box-wrapper {
  padding: 15px;

  .search-box {
    height: 48px;
    width: 100%;
    background: #FAFAFA;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 2px;
    display: flex;

    input {
      width: 100%;
      border: none;
      background: transparent;

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
