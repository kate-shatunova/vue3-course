<template>
  <div class="col-md-12 blog-post">

    <div class="post-title">
      <a href="#"><h1>{{ post.title }}</h1></a>
    </div>

    <div class="post-info">
      <span>November 23, 2016 / by <a href="#" target="_blank">Alex Parker</a></span>
    </div>

    <p class="post-text">{{ post.body }}</p>

    <div class="post__btns">
      <my-button
          @click="$router.push(`/posts/${post.id}`)"
      >
        Открыть
      </my-button>
      <my-button
          style="margin-left: 20px"
          @click="$emit('remove', post)"
      >
        Удалить
      </my-button>
    </div>
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

.post__btns {
  display: flex;
}

.post-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 600px;
}

.blog-post .post-title h1 {
  color: #333333;
  font-size: 35px;
  line-height: 45px;
  font-weight: 700;
  margin-top: 24px;
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