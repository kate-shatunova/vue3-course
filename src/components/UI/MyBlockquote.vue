<template>
  <div class="post-quote margin-top-40 margin-bottom-40">
    <blockquote>{{ text }}</blockquote>
  </div>
</template>

<script>
export default {
  name: "MyBlockquote",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.post-quote {
  background: #1abc9c;
  color: #f6f8f8;
  width: 70%;
  border-radius: 50px;
  margin: 0 auto;
  text-align: center;
}

.post-quote blockquote {
  margin: 0;
  padding: 40px;
  font-style: italic;
  font-size: 15px;
  line-height: 30px;
  border: 0;
}

.post-quote blockquote:after {
  content: '\f10e';
  font-family: 'fontawesome';
  display: inline-block;
  float: right;
  color: #333333;
  font-size: 35px;
  position: relative;
  right: 0px;
  top: -15px;
  font-style: normal;
  opacity: .2;
}

blockquote {
  font-style: italic;
  border-left: 5px solid #1abc9c;
}
</style>