<template>

  <div class="col-md-12 blog-post">

    <div class="post-title">
      <h1>{{ post.title }}</h1>
    </div>

    <div class="post-info">
      <span>May 22, 2022 / by <a href="#" target="_blank">Kate Shatunova</a></span>
    </div>

    <p class="post-text">{{ post.body }}</p>

<!--    <div class="post__btns">-->
<!--      <my-button-->
<!--          @click="$router.push(`/posts/${post.id}`)"-->
<!--      >-->
<!--        Открыть-->
<!--      </my-button>-->
<!--      <my-button-->
<!--          style="margin-left: 20px"-->
<!--          @click="$emit('remove', post)"-->
<!--      >-->
<!--        Удалить-->
<!--      </my-button>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
div.blog-post {
  margin-bottom: 50px;
}

.blog-post .post-image img {
  width: 100%;
}

.blog-post .post-image p {
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}

.blog-post .post-image a {
  font-weight: 600;
}

.blog-post .post-title h1 {
  color: #333333;
  font-size: 35px;
  line-height: 45px;
  font-weight: 700;
  margin-top: 24px;
}

.blog-post .post-title h1::first-letter {
  text-transform: uppercase;
}

.blog-post .post-title h2 {
  font-size: 25px;
  line-height: 35px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.blog-post .post-info {
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  padding: 10px 0;
  color: #8c8c8c;
}

.blog-post p {
  font-size: 16px;
  line-height: 30px;
  color: #696868;
  font-weight: 300;
  letter-spacing: 0.8px;
  font-family: "Poppins", sans-serif;
}
</style>