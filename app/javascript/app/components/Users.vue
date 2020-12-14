<template>
  <RecycleScroller
    page-mode
    :items="users"
    :item-size="200"
    item-height="420"
    class="scroller"
    keyField="name"
    v-slot="{ item, index }"
  >
    <User
      :user="item"
      class="item"
      :class="{ hightlight: selected === index }"
      @click.native="selected = index"
    />
  </RecycleScroller>
</template>

<script>
import { mapGetters } from "vuex";
import { RecycleScroller } from "vue-virtual-scroller";

import User from "../components/User";

export default {
  name: "Users",
  props: ["users"],
  components: {
    User,
    RecycleScroller,
  },
  data() {
    return {
      selected: null,
    };
  },
};
</script>
<style lang="scss" scoped>
.scroller {
  height: 100%;
  width: 100%;
}

.item {
  margin-top: 20px;
  border-radius: 2px;
  background: #fafafa;
  box-shadow: var(--box-shadow);
}

.hightlight {
  border: 1px solid blue;
}
</style>
