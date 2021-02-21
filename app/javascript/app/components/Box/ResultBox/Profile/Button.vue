<template>
<button>
  <p>{{label}}</p>
</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  background: none;
  padding-left: 15px;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #009688;
    text-transform: capitalize;
    text-align: left;
  }
}
</style>
