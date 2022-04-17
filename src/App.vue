<template>
  <div class="app">
    <h1>Блог</h1>

    <div class="app__btns">
      <my-button
          @click="showDialog"
      >
        Новый пост
      </my-button>
      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="sortedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идёт загрузка...</div>
  </div>
</template>

<script>
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyDialog from "./components/UI/MyDialog";
import MyButton from "./components/UI/MyButton";
import axios from "axios";
import MySelect from "./components/UI/MySelect";

export default {
  name: "App",
  components: {
    MySelect,
    MyButton,
    MyDialog,
    PostList,
    PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        {value: "id", name: "По id"},
        {value: "title", name: "По названию"},
        {value: "body", name: "По содержанию"}
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      this.isPostsLoading = true;
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка!!!");
      } finally {
        this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      if (this.selectedSort === "id") {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort] - post2[this.selectedSort]);
      } else {
        return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
      }
    }
  },
  watch: {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

</style>