<template>
  <ul class="social-icon">
    <li><a href="#" target="_blank" class="instagram"><i class="fa fa-instagram"></i></a></li>
    <li><a href="#" target="_blank" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
    <li><a href="#" target="_blank" class="github"><i class="fa fa-github"></i></a></li>
  </ul>
</template>

<script>
export default {
  name: "SocialIcon"
}
</script>

<style scoped>

.social-icon {
  list-style: none;
  padding: 20px;
  margin: 0;
  text-align: center;
}

.social-icon:before,
.social-icon:after {
  content: " ";
  display: table;
}

.social-icon:after {
  clear: both;
}

.social-icon li {
  display: inline-block;
  margin: 2px 4px;
}

.social-icon li a {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 42px;
  color: #fff;
  text-align: center;
  border: 0 none;
  border-radius: 50%;
  font-size: 17px;
  box-shadow: 0px 1px 2px 0px rgba(90, 91, 95, 0.15);
  transition: all 0.3s ease-in-out;
}

.social-icon li a:hover {
  box-shadow: 0px 8px 15px 0px rgba(90, 91, 95, 0.33);
}

.facebook {
  background-color: #3b5998;
}

.twitter {
  background-color: #1da1f2;
}

.google-plus {
  background-color: #dd4b39;
}

.instagram {
  background-color: #464545;
}

.linkedin {
  background-color: #0077b5;
}

.pinterest {
  background-color: #bd081c;
}

.youtube {
  background-color: #cd201f;
}

.vimeo {
  background-color: #1ab7ea;
}

.dribbble {
  background-color: #ea4c89;
}

.behance {
  background-color: #1769ff;
}

.flickr {
  background-color: #ff0084;
}

.tumblr {
  background-color: #35465c;
}

.foursquare {
  background-color: #f94877;
}

.github {
  background-color: #333333;
}

.skype {
  background-color: #00aff0;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {

  .social-icon li a {
    width: 30px;
    height: 30px;
    line-height: 33px;
    font-size: 13px;
  }

}

@media only screen and (max-width:435px) {

  .social-icon li a {
    width: 30px;
    height: 30px;
    line-height: 32px;
    font-size: 14px;
  }

}

</style>