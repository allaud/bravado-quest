<template>
  <div class="container card">
    <div class="card-img">
      <img class="card-img-top" :src="user.avatar" :alt="user.name" />
    </div>
    <div class="container card-body">
      <div class="container card-topic">
        <div class="card-name" v-html="highlight(user.name)"></div>
        <div class="card-text" v-html="highlight(user.email)"></div>
      </div>
      <div class="card-title" v-html="highlight(user.title)"></div>
      <div
        class="card-address"
        v-html="highlight(`${this.user.address}, ${this.user.city}`)"
      ></div>
      <div class="card-link">
        <a>Mark as suitable</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  props: ["user"],
  methods: {
    highlight(value) {
      const searchQuery = this.$store.getters.searchQuery;
      if (!searchQuery) {
        return value;
      }
      return value.replace(new RegExp(searchQuery, "gi"), (match) => {
        return (
          '<span class="highlight" style="background: yellow;">' +
          match +
          "</span>"
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  flex-direction: row;
  justify-content: space-between;
  .card-img {
    background: #bbbbbb;
    width: 36%;
    img {
      height: 10rem;
      width: 100%;
    }
  }
  .card-body {
    width: 60%;
    padding: 2%;
    flex-direction: column;
    text-align: justify;
    white-space: nowrap;
    overflow: scroll;
    .card-topic {
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;

      .card-name {
        font-size: 1.4rem;
        line-height: 1.5;
      }
    }
    .card-title {
      font-size: 1rem;
      line-height: 1.5;
      font-weight: bold;
      font-family: var(--font-family-bellefair);
    }
    .card-address {
      font-size: 1rem;
      line-height: 1;
      font-family: var(--font-family-montserrat);
    }
    .card-link > a {
      font-weight: 500;
      font-size: 1rem;
      line-height: 3;
      text-transform: uppercase;
      color: #9acac3;
    }
  }
}
</style>
