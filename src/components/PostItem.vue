<template>
  <div class="post">
    <div>
      <div><h3 class="post-title">{{ post.title }}</h3></div>
      <div><strong>Текст:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button
          @click="$router.push(`/posts/${post.id}`)"
      >
        Открыть
      </my-button>
      <my-button
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
.post-title {
  text-transform: uppercase;
  margin-bottom: 10px;
}
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>