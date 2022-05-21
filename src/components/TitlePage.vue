<template>
  <div class="sub-title">
    <h2 class="h2">{{ title }}</h2>
    <a @click="$router.push('/about')" href><i :class="icon"></i></a>
  </div>
</template>

<script>
export default {
  name: "TitlePage",
  props: {
    title: {
      type: String,
      default: "Блог"
    },
    route: {
      type: String,
      default: "/about"
    },
    icon: {
      type: String,
      default: "icon-envelope"
    }
  }
}
</script>

<style scoped>
.sub-title {
  padding: 30px;
}

.sub-title h2 {
  display: inline-block;
  font-size: 25px;
  letter-spacing: 0.5px;
  font-weight: 600;

}

.sub-title i {
  float: right;
  font-size: 35px;
  margin-top: 15px;
}

@media only screen and (max-width:479px) {
  .sub-title {
    border-bottom: 1px dashed #cccccc;
    padding: 30px;
    display: inline-block;
    text-align: left;
    width: 100%;
  }
}

@media only screen and (max-width:435px) {
  .sub-title h2 {
    font-size: 20px;
    font-weight: 600;
  }

  .sub-title i {
    font-size: 25px;
    margin-top: 15px;
  }
}
</style>