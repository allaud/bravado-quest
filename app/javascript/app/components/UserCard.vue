<template>
  <div class="user-card">
    <div class="user-card__image">
      <img :src="user.avatar" class="user-card__avatar" />
    </div>

    <div class="user-card__info">
      <div class="user-card__bio">
        <div class="user-card__name" v-html="name"></div>
        <div class="user-card__email" v-html="email"></div>
      </div>
      <div class="user-card__title" v-html="title"></div>
      <div class="user-card__address" v-html="address"></div>
      <div class="user-card__actions">
        <button class="user-card__button">Mark as suitable</button>
      </div>
    </div>
  </div>
</template>

<script>
import highlight from '../filters/highlight';

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    highlighted: {
      type: String,
      default: '',
    },
  },
  computed: {
    name() {
      return highlight(this.user.name, this.highlighted, { className: 'user-card__hightlight' });
    },
    email() {
      return highlight(this.user.email, this.highlighted, { className: 'user-card__hightlight' });
    },
    title() {
      return highlight(this.user.title, this.highlighted, { className: 'user-card__hightlight' });
    },
    address() {
      const fullAddress = `${this.user.address}, ${this.user.city}`;
      return highlight(fullAddress, this.highlighted, { className: 'user-card__hightlight' });
    }
  }
};
</script>

<style scoped>
  .user-card {
    background: var(--gallery);
    display: flex;
    flex-direction: row;
    align-items: center;

    &__avatar {
      max-width: 100%;
    }

    &__image {
      width: 134px;
      line-height: 0;
      background: var(--silver-chalice);
    }

    &__info {
      flex: 1;
      padding: 10px;
      overflow: hidden;

      @media (min-width: 992px) {
        padding: 10px 9px 19px 27px;
      }
    }

    &__name {
      flex: 1;
      font-size: 2.4rem;
      line-height: 1.33;
      max-width: 100%;
      color: var(--black-1);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__title {
      font-size: 1.4rem;
      line-height: 1.42;
      font-weight: bold;
      color: var(--black-2);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__address {
      font-size: 1.4rem;
      line-height: 1.42;
      color: var(--black-2);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__bio {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow: hidden;

      @media (min-width: 992px) {
        flex-direction: row;
      }
    }

    &__email {
      font-size: 1.4rem;
      line-height: 1.14;
      color: var(--black-3);

      @media (min-width: 992px) {
        margin-left: 10px;
      }
    }

    &__button {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.14;
      color: var(--persian-green);
      border: none;
      background: none;
      text-transform: uppercase;
      padding: 0;
      margin: 0;
    }

    &__actions {
      margin: 3px -9px 0 -27px;
      padding: 14px 9px 0 27px;
      border-top: 1px solid var(--black-4);
    }

    /deep/ &__hightlight {
      background-color: var(--yellow);
    }
  }
</style>
