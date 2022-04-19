<template>
  <div class="page__wrapper">
    <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
            'page-current' : pageNumber === page
          }"
        @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "my-pagination",
  data() {
    return {
      page: 1
    }
  },
  props: {
    totalPages: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePage(pageNumber) {
      this.page = pageNumber;
      this.$emit("changePage", pageNumber);
    },
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
  margin-right: 2px;
}

.page-current {
  border: 2px solid teal;
}
</style>