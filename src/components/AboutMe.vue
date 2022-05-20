<template>
  <div class="about-fixed">

    <div class="my-pic">
      <img src="@/images/pic/ava.jpg" alt="">
      <menu-link />
    </div>

    <div class="my-detail">

      <div class="white-spacing">
        <h1>Kate Shatunova</h1>
        <span>Frontend Developer</span>
      </div>

      <social-icon/>

    </div>
  </div>
</template>

<script>
import SocialIcon from "./AboutMe/SocialIcon";
import MenuLink from "./AboutMe/MenuLink";

export default {
  name: "AboutMe",
  components: {SocialIcon, MenuLink},
}
</script>

<style scoped>

.about-fixed {
  position: fixed;
  /* width: 20.8%; */
}

.my-pic {
  width: 100%;
  box-shadow: -2px -1px 88px 0px rgba(0,0,0,0.17);
}

.my-pic img {
  width: 100%;
}

.my-detail {
  text-align: center;
  margin-bottom: 30px;
  background: #ffffff;
  box-shadow: -2px -1px 88px 0px rgba(0,0,0,0.17);
}

.my-detail .white-spacing {
  padding: 23px 0;
  border-bottom: 1px dashed #cccccc;
}

.my-detail h1 {
  font-size: 20px;
  font-weight: 700;
}

.my-detail span {
  color: #c1c1c1;
  font-weight: 400;
  line-height: 30px;
  font-size: 16px;
}

</style>