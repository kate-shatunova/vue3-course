<template>
  <div class="app container">
    <div class="row">
      <div class="col-12 col-sm-4 col-lg-3">
        <nav-bar></nav-bar>
      </div>
      <div class="col-12 col-sm-8 col-lg-9">
        <div class="col-md-12 page-body">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import NavBar from "./components/NavBar";
export default {
  components: {NavBar}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.post-title {
  text-transform: uppercase;
  margin-bottom: 10px;
}
</style>