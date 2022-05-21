<template>
  <a href="javascript:void(0)" @click="isVisible = !isVisible"><i class="icon-menu menu"></i></a>
  <div v-if="isVisible">
    <my-menu/>
  </div>
</template>

<script>
import MyMenu from "../UI/MyMenu";

export default {
  name: "menu-link",
  components: { MyMenu },
  data() {
    return {
      isVisible: false
    }
  }
}
</script>

<style scoped>
.menu {
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 20px;
  color: #fff;
  background: #1abc9c;
  padding: 12px;
}
</style>