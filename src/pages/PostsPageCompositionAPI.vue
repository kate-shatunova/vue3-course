<template>
  <div>
    <h1>Блог</h1>

    <div class="app__btns">
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

    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
    />
    <div v-else class="load">Идёт загрузка...</div>

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
import {ref} from "vue";
import {usePosts} from "../hooks/usePosts";
import useSortedPosts from "../hooks/useSortedPosts";
import useSortedAndSearchedPosts from "../hooks/userSortedAndSearchedPosts";

export default {
  name: "PostsPage",
  components: {
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
      dialogVisible: false,
      sortOptions: [
        {value: "id", name: "По id"},
        {value: "title", name: "По названию"},
        {value: "body", name: "По содержанию"}
      ]
    }
  },
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {sortedPosts, selectedSort } = useSortedPosts(posts);
    const {sortedAndSearchedPosts, searchQuery} = useSortedAndSearchedPosts(sortedPosts);

    return {
      posts, totalPages, isPostsLoading, sortedPosts, selectedSort, sortedAndSearchedPosts, searchQuery
    }
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