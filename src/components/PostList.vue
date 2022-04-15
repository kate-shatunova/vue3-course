<template>
  <div>
    <h3>Список постов</h3>
    <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
  </div>
</template>

<script>
import PostItem from "./PostItem";
export default {
  name: "PostList",
  components: {PostItem},
  props: {
    posts : {
      type: Array,
      default: [],
      required: true
    }
  }
}
</script>

<style scoped>
</style>