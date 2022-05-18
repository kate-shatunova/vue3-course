<template>
  <div class="row">
    <title-page
      title="My Blog"
      icon="icon-envelope"
    />

    <div class="col-md-12 content-page">
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

      <my-input
          v-model="searchQuery"
          placeholder="Поиск по заголовку"
          v-focus
      />

      <my-dialog v-model:show="dialogVisible">
        <post-form
            @create="createPost"
        />
      </my-dialog>
      <post-list
          :posts="sortedAndSearchedPosts"
          @remove="removePost"
          v-if="!isPostsLoading"
      />
      <div v-else class="load">Идёт загрузка...</div>
      <div v-intersection="loadMorePosts" class="observer"></div>
    </div>

    <!--    <my-pagination-->
    <!--        @change-page="fetchPosts"-->
    <!--        :total-pages="totalPages"-->
    <!--    />-->

  </div>
</template>

<script>
import TitlePage from "@/components/TitlePage";
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import MyPagination from "@/components/UI/MyPagination";

export default {
  name: "PostsPage",
  components: {
    TitlePage,
    MyPagination,
    MyInput,
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
      searchQuery: "",
      limit: 10,
      page: 1,
      totalPages: 0,
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
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        });
        this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit);
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка!!!");
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      this.page += 1;
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _limit: this.limit,
            _page: this.page
          }
        });
        this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("Ошибка!!!");
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
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  watch: {
  }
}
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.load {
  margin-top: 10px;
}

.content-page {
  padding-top: 30px;
  padding-bottom: 60px;
  border-top: 1px dashed #dedede;
  border-bottom: 1px dashed #dedede;
}

</style>