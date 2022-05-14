import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
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
  }),
  getters: {
    sortedPosts(state) {
      if (state.selectedSort === "id") {
        return [...state.posts].sort((post1, post2) => post1[state.selectedSort] - post2[state.selectedSort]);
      } else {
        return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
      }
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    }
  },
  actions: {
    async fetchPosts({state, commit}) {
      try {
        commit('setLoading', true);
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _limit: state.limit,
            _page: state.page
          }
        });
        commit('setTotalPages', Math.ceil(response.headers["x-total-count"] / state.limit));
        commit('setPosts', response.data);
      } catch (e) {
        console.log("fetchPosts: Error!!!", e);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadMorePosts({state, commit}) {
      try {
        commit('setPage', state.page + 1);
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _limit: state.limit,
            _page: state.page
          }
        });
        commit('setTotalPages', Math.ceil(response.headers["x-total-count"] / state.limit));
        commit('setPosts', [...state.posts, ...response.data]);
      } catch (e) {
        console.log("loadMorePosts: Error!!!", e);
      }
    }
  },
  namespaced: true
}