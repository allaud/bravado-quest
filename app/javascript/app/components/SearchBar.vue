<template>
  <div class="search-bar">
      <i class="fa fa-search" style="font-size:24px;width:5%"></i>
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
  import { debounce } from '../utils'

  export default {
    name: 'SearchBar',
    data() {
      return {
        query: ''
      }
    },
    watch: {
      query: {
        handler: debounce(function () {
          this.$emit('change', this.query)
        }, 400)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .search-bar {
    transform: translateX(-50%);
    left: 50%;
    right: 0px;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
    position: fixed;
    width: 90%;
    background-color: #f5f5f5;
    z-index: 5;
    transition: transform .2s cubic-bezier(.4,0,.2,1),background-color .2s cubic-bezier(.4,0,.2,1),left .2s cubic-bezier(.4,0,.2,1),right .2s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1),max-width .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1);
  
    .fa-search {
      font-weight: 900;
      width: 18px;
      height: 18px;
      position: absolute;
      z-index: 10;
      left: 20px;
      top: 50%;
      margin-top: -10px;
    }

    input {
      width: 100%;
      padding: 1%;
      text-align: center;
      font-size: 1.4rem;
      line-height: 1.16;
      outline: none;
      @media (max-width: 727px) {
          width: 90%;
      }
    }
  }
</style>

