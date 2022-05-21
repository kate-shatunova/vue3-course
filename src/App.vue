<template>

  <div class="app">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-4 col-lg-3">
          <about-me></about-me>
        </div>
        <div class="col-12 col-sm-8 col-lg-9">
          <div class="col-md-12 page-body">
            <router-view></router-view>
          </div>

          <footer-page/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import AboutMe from "./components/AboutMe";
import FooterPage from "./components/FooterPage";

export default {
  components: {AboutMe, FooterPage}
}
</script>

<style>
.app {
  margin: 50px 0;
}

.page-body {
  background: #ffffff;
  box-shadow: -2px -1px 88px 0px rgb(0 0 0 / 17%);
}

</style>