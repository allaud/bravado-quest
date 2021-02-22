<template>
  <div class="card">
    <div class="name">
      <text-highlight :queries="highlightText">{{name}}</text-highlight>
    </div>
    <div class="title">
      <text-highlight :queries="highlightText">{{title}}</text-highlight>
    </div>
    <div class="address">
      <text-highlight :queries="highlightText">{{`${address}, ${city}`}}</text-highlight>
    </div>
    <div class="email">
      <text-highlight :queries="highlightText">{{email}}</text-highlight>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    name: String,
    email: String,
    title: String,
    city: String,
    address: String,
    highlightText: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  position: relative;
  margin: 0 0 15px 10px;

  .name {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 5px;
  }
  .title {
    color: rgba(0, 0, 0, 0.5438);
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .address {
    color: rgba(0, 0, 0, 0.5438);
    line-height: 20px;
  }
  .email {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 14px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.54);
  }
}
</style>
