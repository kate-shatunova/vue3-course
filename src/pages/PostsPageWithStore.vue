<template>
  <title-page
    title="My Blog"
    icon="icon-envelope"
  />

  <div class="content-page">

<!--    <div class="app__btns">-->
<!--      <my-button-->
<!--          @click="showDialog"-->
<!--      >-->
<!--        Новый пост-->
<!--      </my-button>-->
<!--      <my-select-->
<!--          :model-value="selectedSort"-->
<!--          @update:model-value="setSelectedSort"-->
<!--          :options="sortOptions"-->
<!--      />-->
<!--    </div>-->

<!--    <my-input-->
<!--        :model-value="searchQuery"-->
<!--        @update:model-value="setSearchQuery"-->
<!--        placeholder="Поиск по заголовку"-->
<!--        v-focus-->
<!--    />-->

<!--    <my-dialog v-model:show="dialogVisible">-->
<!--      <post-form-->
<!--          @create="createPost"-->
<!--      />-->
<!--    </my-dialog>-->
    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
<!--    <div v-else class="load">Идёт загрузка...</div>-->
<!--    <div v-intersection="loadMorePosts" class="observer"></div>-->

    <!--    <my-pagination-->
    <!--        @change-page="fetchPosts"-->
    <!--        :total-pages="totalPages"-->
    <!--    />-->
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import MyPagination from "@/components/UI/MyPagination";
import TitlePage from "@/components/TitlePage";
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

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
      dialogVisible: false
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts'
    }),
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
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostsLoading: state => state.post.isPostsLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      limit: state => state.post.limit,
      page: state => state.post.page,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
    })
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

</style>