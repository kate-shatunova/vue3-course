<template>
  <div class="content-page">
    <div class="blog-post">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentPage"
}
</script>

<style scoped>
div.blog-post {
  margin-bottom: 50px;
}

.blog-post :deep(.post-image img) {
  width: 100%;
}

.blog-post :deep(.post-image p) {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}

.blog-post :deep(.post-image a) {
  font-weight: 600;
}

.blog-post :deep(.post-title h1) {
  color: #333333;
  font-size: 35px;
  line-height: 45px;
  font-weight: 700;
  margin-top: 24px;
}

.blog-post :deep(.post-title h2) {
  font-size: 25px;
  line-height: 35px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.blog-post :deep(.post-info) {
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  padding: 10px 0;
  color: #8c8c8c;
}

.blog-post :deep(p) {
  font-size: 16px;
  line-height: 30px;
  color: #696868;
  font-weight: 300;
  letter-spacing: .8px;
  font-family: "Poppins", sans-serif;
}
</style>