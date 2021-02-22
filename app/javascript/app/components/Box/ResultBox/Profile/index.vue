<template>
<div class="profile-box">
  <Avatar :src="profile.avatar"/>
  <div class="content">
    <Card
        :name="profile.name"
        :email="profile.email"
        :title="profile.title"
        :city="profile.city"
        :address="profile.address"
        :highlight-text="highlightText"
    />
    <Divider/>
    <Button label="MARK AS SUITABLE"/>
  </div>
</div>
</template>

<script>
import Avatar from './Avatar';
import Card from './Card';
import Divider from './Divider';
import Button from './Button';

export default {
  name: 'Profile',
  components: {
    Button, Divider, Card, Avatar,
  },
  props: {
    profile: Object,
    highlightText: String,
  },
};
</script>

<style lang="scss" scoped>
.profile-box {
  width: 524px;
  height: 136px;
  background: #FAFAFA;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  margin-bottom: 21px;
  display: flex;
  flex-wrap: wrap;

  .content {
    flex-grow: 1;
  }
}
</style>
