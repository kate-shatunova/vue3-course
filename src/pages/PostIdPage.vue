<template>
  <div>
    <div v-if="post">
      <h3 class="post-title">{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <div v-else class="load">Идёт загрузка...</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostIdPage",
  data() {
    return {
      post: ""
    }
  },
  methods: {
    async getPostById(id) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.post = response.data;
      } catch (e) {
        alert("Ошибка!!!");
      }
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.getPostById(id);
  }
}
</script>

<style scoped>

</style>