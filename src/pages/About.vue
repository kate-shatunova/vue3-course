<template>

  <title-page
    title="About Me"
    icon="icon-envelope"
  />

  <content-page>
    <div class="post-title margin-bottom-30">
      <h1>Hi, I am <span class="main-color">Kate</span></h1>
      <knowledge/>
    </div>

    <p>I am in the website field since 2014 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at
      orci commodo hendrerit vitae nec eros. Vestibulum neque est, imperdiet nec tortor nec, tempor semper metus. <b>I
        am a developer</b>, et accumsan nisi. Duis laoreet pretium ultricies. Curabitur rhoncus auctor nunc congue
      sodales. Sed posuere nisi ipsum, eget dignissim nunc dapibus eget. Aenean elementum sollicitudin sapien ut sapien
      fermentum aliquet mollis. Curabitur ac quam orci sodales quam ut tempor. suspendisse, gravida in augue in,
      interdum <b><a href @click="$router.push('/work')" data-toggle="tooltip" data-placement="top" title="Check out my work.">Work</a></b>
      bibendum dui. Suspendisse sit amet justo sit amet diam fringilla commodo. Praesent ac magna at metus malesuada
      tincidunt non ac arcu. Nunc gravida eu felis vel elementum. Vestibulum sodales quam ut tempor tempor Donec
      sollicitudin imperdiet nec tortor nec, tempor semper metus..</p>

    <my-video-box
      url="https://www.youtube.com/watch?v=O2Bsw3lrhvs"
      title="My Thought"
      description="Take a look about my thought on website design."
    />

    <!-- My Service Start -->
    <div class="post-title">
      <h1>My <span class="main-color">Services</span></h1>
    </div>

    <div class="list list-style-2 margin-top-30">
      <ul>
        <li>Website Design</li>
        <li>Website Development</li>
        <li>Wordpress Theme Development</li>
        <li>Mobile Apps UI/UX Design</li>
        <li>Online Software Development</li>
        <li>E-commerce Development</li>
        <li>UI/UX Consulting</li>
      </ul>
    </div>
    <!-- My Service End -->

    <div class="col-md-12 text-center">
      <a href="contact.html" data-toggle="tooltip" data-placement="top" title="Visit on my contact page for hire me."
         class="load-more-button">Hire</a>
    </div>
  </content-page>

</template>

<script>
import TitlePage from "../components/TitlePage";
import ContentPage from "../components/ContentPage";
import Knowledge from "../components/AboutPage/Knowledge";
import MyVideoBox from "../components/UI/MyVideoBox";

export default {
  name: "About",
  components: {
    MyVideoBox,
    Knowledge,
    TitlePage,
    ContentPage
  }
}
</script>

<style scoped>

</style>