<template>
  <div class="search-bar">
    <i class="fa fa-search"></i>
    <input
      v-model="query"
      type="text"
      class="fa form-control__input"
      placeholder="User name or description"
      aria-label="User name or description"
      aria-describedby="basic-addon2"
    />
  </div>
</template>

<script>
import { debounce } from "../utils";

export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  watch: {
    query() {
      this.$store.dispatch("SET_LOADING", true);
      this.debounceFunction();
    },
  },
  methods: {
    debounceFunction: debounce(function () {
      return this.$emit("change", this.query);
    }, 400),
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  transform: translateX(-50%);
  left: 50%;
  right: 0px;
  top: 3rem;
  box-shadow: var(--box-shadow);
  position: fixed;
  width: 83%;
  background-color: #f5f5f5;
  z-index: 5;
  @media (max-width: 727px) {
    width: 90%;
  }
  .fa-search {
    font-size: 24px;
    font-weight: 900;
    width: 5%;
    position: absolute;
    left: 20px;
    top: 36%;
  }

  input {
    width: 95%;
    padding: 1%;
    text-align: center;
    font-size: 1.4rem;
    line-height: 1.16;
    outline: none;
    border: none;
    height: 4rem;
    background-color: #f5f5f5;
    @media (max-width: 727px) {
      width: 90%;
    }
  }
}
</style>

