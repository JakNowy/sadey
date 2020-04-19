<template>
  <div>
    <Header>
      <a slot="logo" href="https://www.facebook.com/StudioNoClaims/">
        <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p320x320/90767039_194232475335239_3092828644456792064_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=HW3tomYTdBIAX9LPVzB&_nc_ht=scontent-waw1-1.xx&_nc_tp=6&oh=a4c89b96c726e1badc2c2ade6e153e2a&oe=5EC0979F">
      </a>
      <nav slot="navbar">
          <router-link class="router-link" to="/">Home</router-link>
          <router-link class="router-link" to="/about">About</router-link>
          <a class="router-link" href="https://www.facebook.com/StudioNoClaims/" target="_blank">Facebook</a>
      </nav>
    </Header>

    <Banner id="banner">
      <p
        slot="title"
        style="color: aliceblue; padding-top: 200px; font-size: 96px"
        class="text-center"
      >
        Sadey Records
      </p>

      <Toggler
        slot="subtitle"
        style="color: aliceblue; font-size: 32px"
        class="text-center"
        :headers="['Nagrania Audio', 'Mix/Master' ,'Marketing człowieniu', 'Rapik robię też']"
        :interval=3500
      />
    </Banner>

  </div>
</template>


<script>
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Toggler from "@/components/Toggler";
export default {
  components: {
    Toggler,
    Banner,
    Navbar,
    Header
  },

  data () {
    return {
    }
  }
}
</script>

<style>
  html {
    background-image:none;
    height: 100%;
    background-color: #ffffff;
}
  img{
        width: 100px;
        height: 100px;
    }
  #banner {
    background-size: cover;
    /*todo: find new image*/
    background: url('assets/studio.jpg');
    height: 100vh;
  }
  .router-link {
    padding: 5px;
    font-size: 16px;
    color: gold;
  }
  .router-link:hover {
    color: #ffe100;
  }
</style>
