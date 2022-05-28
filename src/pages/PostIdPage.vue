<template>
  <title-page
    title="Back Home"
    icon="icon-envelope"
  />

  <content-page>
    <div class="blog-post">
      <div class="post-title">
        <h1>{{ post.title }}</h1>
      </div>
    </div>

    <!-- Post Detail Start -->
    <div class="post-info">
      <span>May 22, 2022 / by <a href="#" target="_blank">Kate Shatunova</a></span>
    </div>
    <!-- Post Detail End -->

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at orci commodo hendrerit vitae nec eros.
      Vestibulum neque est, imperdiet nec tortor nec, tempor semper metus. <b>Cras vel tempus velit</b>, et accumsan
      nisi. Duis laoreet pretium ultricies. Curabitur rhoncus auctor nunc congue sodales. Sed posuere nisi ipsum, eget
      dignissim nunc dapibus eget. Aenean elementum <b><a href="javascript:void(0)" data-toggle="popover"
                                                          data-placement="top"
                                                          data-content="You can write any text here">Click me</a></b>
      sollicitudin sapien ut sapien fermentum aliquet mollis. Curabitur ac quam orci sodales quam ut tempor. <b
        data-toggle="tooltip" data-placement="top" title="You can write any text here.">Hover me</b> suspendisse,
      gravida in augue in, interdum bibendum dui. Suspendisse sit amet justo sit amet diam fringilla commodo. Praesent
      ac magna at metus malesuada tincidunt non ac arcu. Nunc gravida eu felis vel elementum. Vestibulum sodales quam ut
      tempor tempor. Donec sollicitudin sapien ut sapien fermentum, non ultricies nulla gravida.</p>

    <!-- Post Image Start -->
    <div class="post-image margin-top-40 margin-bottom-40">
      <img src="../images/blog/1.jpg" alt="">
      <p>Image source from <a href="#" target="_blank">Link</a></p>
    </div>
    <!-- Post Image End -->

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at orci commodo hendrerit vitae nec eros.
      Vestibulum neque est, imperdiet nec tortor nec, tempor semper metus. Cras vel tempus velit, et accumsan nisi. Duis
      laoreet pretium ultricies. Curabitur rhoncus auctor nunc congue sodale Sed posuere nisi ipsum.</p>

    <!-- Post Video Tutorial Start -->
    <my-video-box
      url="https://www.youtube.com/watch?v=O2Bsw3lrhvs"
      title="Video Tutorial"
      description="Integrate video on magnific popup for fast page load."
    />
    <!-- Post Video Tutorial End -->


    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at orci commodo hendrerit vitae nec eros.
      Vestibulum neque est, imperdiet nec tortor nec, tempor semper metus. Cras vel tempus velit, et accumsan nisi. Duis
      laoreet pretium ultricies. Curabitur rhoncus auctor nunc congue sodale Sed posuere nisi ipsum.</p>


    <!-- Post Blockquote Start -->
    <my-blockquote text="Design is not just what is look like, Design is how it's work." />
    <!-- Post Blockquote End -->


    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at orci commodo hendrerit vitae nec eros.
      Vestibulum neque est, imperdiet nec tortor nec, tempor semper metus. Cras vel tempus velit, et accumsan nisi. Duis
      laoreet pretium ultricies. Curabitur rhoncus auctor nunc congue sodale Sed posuere nisi ipsum.</p>


    <!-- Post Coding (SyntaxHighlighter) Start -->
    <div class="margin-top-40 margin-bottom-40">
                                   <pre class="brush: js">
                                   /* Smooth Scroll */

                                    $('a.smoth-scroll').on("click", function (e) {
                                      var anchor = $(this);
                                      $('html, body').stop().animate({
                                      scrollTop: $(anchor.attr('href')).offset().top - 50
                                      }, 1000);
                                      e.preventDefault();
                                     });

                                   /* Scroll To Top */

                                   $(window).scroll(function(){
                                     if ($(this).scrollTop() >= 500) {
                                     $('.scroll-to-top').fadeIn();
                                     } else {
                                     $('.scroll-to-top').fadeOut();
                                     }
                                     });

	                               $('.scroll-to-top').click(function(){
                                   $('html, body').animate({scrollTop : 0},800);
                                   return false;
                                    });
                                  </pre>
    </div>
    <!-- Post Coding (SyntaxHighlighter) End -->


    <div class="post-title">
      <h2>How to implement?</h2>
    </div>


    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at orci commodo hendrerit vitae nec eros.
      Vestibulum neque est, imperdiet nec tortor nec, tempor semper metus. Cras vel tempus velit, et accumsan nisi. Duis
      laoreet pretium ultricies. Curabitur rhoncus auctor nunc congue sodale Sed posuere nisi ipsum.</p>


    <!-- Post Image Gallery Start -->
    <div class="row margin-top-40 margin-bottom-40">

      <div class="col-md-4 col-sm-6 col-xs-12">
        <a href="../images/blog/7.jpg" class="image-popup" title="image Title">
          <img src="../images/blog/7.jpg" class="img-responsive" alt="">
        </a>
      </div>

      <div class="col-md-4 col-sm-6 col-xs-12">
        <a href="../images/blog/5.jpg" class="image-popup" title="image Title">
          <img src="../images/blog/5.jpg" class="img-responsive" alt="">
        </a>
      </div>

      <div class="col-md-4 col-sm-6 col-xs-12">
        <a href="../images/blog/6.jpg" class="image-popup" title="image Title">
          <img src="../images/blog/6.jpg" class="img-responsive" alt="">
        </a>
      </div>

    </div>
    <!-- Post Image Gallery End -->


    <div class="post-title">
      <h2>Make it more awesome</h2>
    </div>


    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at orci commodo hendrerit vitae nec eros.
      Vestibulum neque est.</p>


    <!-- Post Blockquote (Italic Style) Start -->
    <blockquote class="margin-top-40 margin-bottom-40">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at orci commodo hendrerit vitae nec
        eros. Vestibulum neque est, imperdiet nec tortor nec, tempor semper metus. Cras vel tempus velit, <b>et accumsan
          nisi</b>. Duis laoreet pretium ultricies. Curabitur rhoncus auctor nunc congue sodale Sed posuere nisi ipsum.
      </p>
    </blockquote>
    <!-- Post Blockquote (Italic Style) End -->

    <div class="post-title">
      <h2>Learn to check all the features</h2>
    </div>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam at orci commodo hendrerit vitae nec eros.
      Vestibulum neque est.</p>

    <!-- Post List Style Start -->
    <div class="list">
      <ul>
        <li>Ready to use Blog Template</li>
        <li>It have all the necessary features which you need to run blog</li>
        <li>Neat and Clean Typography</li>
        <li>Speed Optimization</li>
      </ul>
    </div>


    <div class="list list-style margin-top-40">
      <ul>
        <li>Ready to use Blog Template</li>
        <li>It have all the necessary features which you need to run blog</li>
        <li>Neat and Clean Typography</li>
        <li>Speed Optimization</li>
      </ul>
    </div>


    <div class="list list-style-2 margin-top-40">
      <ul>
        <li>Ready to use Blog Template</li>
        <li>It have all the necessary features which you need to run blog</li>
        <li>Neat and Clean Typography</li>
        <li>Speed Optimization</li>
      </ul>
    </div>
    <!-- Post List Style End -->

    <!-- Post Author Bio Box Start -->
    <div class="about-author margin-top-70 margin-bottom-50">

      <div class="picture">
        <img src="../images/blog/author.png" class="img-responsive" alt="">
      </div>

      <div class="c-padding">
        <h3>Article By <a href="#" target="_blank" data-toggle="tooltip" data-placement="top" title="Visit Alex Website">Alex Parker</a></h3>
        <p>You can use about author box when someone guest post on your blog, Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ad minim veniam.</p>
      </div>
    </div>
    <!-- Post Author Bio Box End -->

    <!-- You May Also Like Start -->
    <div class="you-may-also-like margin-top-50 margin-bottom-50">
      <h3>You may also like</h3>
      <div class="row">

        <div class="col-md-4 col-sm-6 col-xs-12">
          <a href="single.html"><p>Make mailchimp singup form working with ajax using jquery plugin</p></a>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <a href="single.html"><p>How to design elegant e-mail newsletter in html for wish christmas to your subscribers?</p></a>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <a href="single.html"><p>How to customize a wordpress theme entirely from scratch using a child theme?</p></a>
        </div>

      </div>
    </div>
    <!-- You May Also Like End -->

  </content-page>



  <!--  <div v-if="post">-->
  <!--    <h3 class="post-title">{{ post.title }}</h3>-->
  <!--    <p>{{ post.body }}</p>-->
  <!--  </div>-->
  <!--  <div v-else class="load">Идёт загрузка...</div>-->
  <!--</div>-->
</template>

<script>
import axios from "axios";
import TitlePage from "@/components/TitlePage";
import ContentPage from "@/components/ContentPage";
import MyVideoBox from "@/components/UI/MyVideoBox";
import MyBlockquote from "../components/UI/MyBlockquote";

export default {
  name: "PostIdPage",
  components: {MyBlockquote, ContentPage, TitlePage, MyVideoBox},
  data() {
    return {
      post: ""
    }
  },
  methods: {
    async getPostById(id) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        this.post = response.data;
      } catch (e) {
        alert("Ошибка!!!");
      }
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.getPostById(id);
  }
}
</script>

<style scoped>

</style>