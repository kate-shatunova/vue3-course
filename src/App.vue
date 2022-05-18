<template>

  <div class="app container">
    <div class="row">
      <div class="col-12 col-sm-4 col-lg-3">
        <about-me></about-me>
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
import AboutMe from "./components/AboutMe";
export default {
  components: {AboutMe}
}
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  background: #fafafa !important;
}

html {
  position: relative;
  min-height: 100%;
}

::selection {
  background-color: #1abc9c;
  color: #ffffff;
}

::-moz-selection {
  background-color: #1abc9c;
  color: #ffffff;
}

a {
  text-decoration: none !important;
  color: #1abc9c;
}

a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
  color: #333333;
}

b {
  font-weight: 600;
  color: #333333;
}

p {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
}

button {
  background-color: transparent;
}

*:focus {
  outline: 0;
}

.page-body {
  background: #ffffff;
  box-shadow: -2px -1px 88px 0px rgb(0 0 0 / 17%);
}

</style>