<template>
  <div class="col-md-12 page-body margin-top-50 footer">
    <footer>
      <my-menu
        isInline
        isFooter
      />

      <p>© Copyright {{ currentYear }}. All rights reserved</p>

    </footer>
  </div>
</template>

<script>
import MyMenu from "./UI/MyMenu";
export default {
  name: "Footer",
  components: { MyMenu },
  data() {
    return{
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  background: url(../images/bg/pattern-bg.png);
  background-repeat: repeat;
  text-align: center;
  padding: 30px 0;
  margin-top: 10px;
}

.footer p {
  color: #797878;
  font-size: 13px;
  line-height: 25px;
  padding: 0px 15px;
  letter-spacing: 1px;
}
</style>