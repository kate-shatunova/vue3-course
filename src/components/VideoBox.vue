<template>
  <div class="video-box margin-top-40 margin-bottom-80">
    <div class="video-tutorial">
      <a class="video-popup" href="https://www.youtube.com/watch?v=O2Bsw3lrhvs" title="My Thought">
        <img src="../images/pic/my-pic.png" alt="">
      </a>
    </div>
    <p>Take a look about my thought on website design.</p>
  </div>
</template>

<script>
export default {
  name: "VideoBox"
}
</script>

<style scoped>
.video-box {
  background: #333333;
  width: 70%;
  margin: 0 auto;
  height: 100%;
  box-shadow: 0px 7px 13px 0px rgba(2, 2, 2, 0.56);
}

.video-tutorial {
  position: relative;
}

.video-tutorial .video-popup:after {
  content: '\e071';
  font-family: 'simple-line-icons';
  display: block;
  color: #1abc9c;
  font-size: 65px;
  font-weight: 600;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: .9;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.video-tutorial:hover .video-popup:after {
  font-size: 85px;
  opacity: .8;
}

.video-tutorial img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .5;
  user-drag: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}

.video-box p {
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  margin-top: 10px;
  padding: 0px 15px;
}
</style>