<template>
  <a href="javascript:void(0)" class="collapsed" data-target="#menu" data-toggle="collapse"><i class="icon-menu menu"></i></a>
  <div id="menu">
    <ul class="menu-link">
      <li><a href="about.html">About</a></li>
      <li><a href="work.html">Work</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="work.html">Posts (Vuex)</a></li>
      <li><a href="contact.html">Posts (Composition API)</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuLink"
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