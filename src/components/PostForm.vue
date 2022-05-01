<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <my-input
        v-focus
        v-model="post.title"
        placeholder="Название"
    />
    <my-input
        v-model="post.body"
        placeholder="Описание"
    />
    <my-button
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost"
    >
      Создать
    </my-button>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: "",
        body: ""
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: ""
      }
    }
  },
  // для примера, установка watch на сложный тип данных
  // watch: {
  //   post: {
  //     handler(newValue) {
  //       console.log("post", newValue);
  //     },
  //     deep: true
  //   }
  // }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>