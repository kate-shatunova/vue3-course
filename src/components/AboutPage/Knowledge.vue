<template>
  <ul class="knowledge">
    <li class="bg-color-1">Frontend</li>
    <li class="bg-color-4">Vue.js</li>
    <li class="bg-color-6">JavaScript</li>
    <li class="bg-color-5">Typescript</li>
  </ul>
</template>

<script>
export default {
  name: "Knowledge"
}
</script>

<style scoped>
.knowledge {
  list-style: none;
  padding: 2px;
  margin: 0;
  padding-left: 0px;
}

.knowledge:before,
.knowledge:after {
  content: " ";
  display: table;
}

.knowledge:after {
  clear: both;
}

.knowledge li {
  display: inline-block;
  color: #ffffff;
  margin: 4px 4px;
  padding: 10px 20px;
  font-size: 12px;
  letter-spacing: 0.6px;
  margin-left: 0px;
  border-radius: 4px;
  cursor: default;
}
</style>