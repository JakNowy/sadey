<template>
    <section>
      <video id="myVideo" autoplay loop>
        <source src="../assets/sample_640x360.mp4">
      </video>
    </section>
</template>

<script>
import VideoBackground from 'vue-responsive-video-background-player'

export default {
  data () {
      return {
      }
  },

  props: {
    src: String,
  },

  components: {
    VideoBackground,
  },

  methods: {
    myFunction: function myFunction() {
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
      }
    }
  },

}

</script>

<style>
  section {
    height: 100vh;
    background-size: cover;
  }
  #myVideo {
    right: 0;
    bottom: 0;
    min-width: 100%;
  }
  /* Add some content at the bottom of the video/page */
</style>
