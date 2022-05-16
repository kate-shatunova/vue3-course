<template>
  <div class="row">
    <title-page
      title="Contact Me"
      icon="icon-envelope"
    />
    <p>Данное приложение было создано в учебных целях по видеокурсу с канала Ulbi TV</p>
    <a href="https://www.youtube.com/watch?v=XzLuMtDelGk&t=7126s" target="_blank">Vue 3 фундаментальный курс от А до Я</a>

    <p>Используемые технологии:</p>
    <ul>
      <li>Vue 3</li>
      <li>Bootstrap 5</li>
    </ul>
  </div>
  
</template>

<script>
import TitlePage from "../components/TitlePage";

export default {
  name: "Contact",
  components: {
    TitlePage
  }
}
</script>

<style scoped>

</style>