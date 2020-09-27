<template>
  <div>
    <vue-particles
        :particleOpacity="0.1"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#FFD700"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.2"
        :linesDistance="150"
        :moveSpeed="2.5"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        color="#fff"
        style="position:absolute; width: 100%; height: 100%"
    ></vue-particles>

    <Header style="padding: 0 50px 0 50px; border-bottom: gold 1px solid; background: black">
      <a slot="logo" href="https://www.facebook.com/mateusz.gajtkowski/">
        <img class="logo" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p320x320/90767039_194232475335239_3092828644456792064_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=HW3tomYTdBIAX9LPVzB&_nc_ht=scontent-waw1-1.xx&_nc_tp=6&oh=a4c89b96c726e1badc2c2ade6e153e2a&oe=5EC0979F">
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
        style="color: aliceblue; padding-top: 280px; font-size: 96px"
        class="text-center"
      >
        Gajtek Shop
      </p>

      <Toggler
        slot="subtitle"
        style="color: aliceblue; font-size: 32px"
        class="text-center"
        name="banner"
        :headers="['Sklep z jedzonkiem!',]"
        :interval=0
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
}
</script>

<style>
  #banner {
    background: url('../assets/hiphop.jpg');
    background-attachment: fixed;
  }
  a {
    line-height: 0;
  }
  .logo {
    width: 120px;
    height: 120px;
  }
  nav {
    padding: 50px;
  }
  .router-link {
    padding: 10px;
    font-size: 20px;
    color: #ffe100;
    text-decoration: none;
  }
  .router-link:hover {
    text-decoration: underline;
  }
  .banner-enter, .banner-leave-to {
    opacity: 0;
    /*transform: translateX(20px);*/
  }

  .banner-enter-active, .banner-leave-active {
    transition: all 1s;
  }
</style>