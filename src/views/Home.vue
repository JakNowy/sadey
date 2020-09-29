<template>
  <div>
    <Navbar style="background: #8cca3b">
      <a slot="logo" href="https://www.facebook.com/StudioNoClaims/">
<!--        <img class="logo" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p320x320/90767039_194232475335239_3092828644456792064_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=HW3tomYTdBIAX9LPVzB&_nc_ht=scontent-waw1-1.xx&_nc_tp=6&oh=a4c89b96c726e1badc2c2ade6e153e2a&oe=5EC0979F">-->
      </a>
      <nav slot="navbar">
          <router-link class="router-link" to="/">Home</router-link>
          <router-link class="router-link" to="/about">About</router-link>
          <a class="router-link" href="https://www.facebook.com/StudioNoClaims/" target="_blank">Facebook</a>
      </nav>
    </Navbar>

    <Banner id="banner">
      <p
        slot="title"
        style="color: #8cca3b; padding-top: 280px; font-size: 96px"
        class="text-center"
      >
<!--        Podnóż foods-->
      </p>

      <Toggler
        slot="subtitle"
        style="color: #8cca3b; font-size: 96px; padding-top: 64px"
        class="text-center"
        name="banner"
        :headers="['Podnóż foods']"
        :interval=1000
      />
      <Toggler
        slot="subtitle"
        style="color: #8cca3b; font-size: 32px;"
        class="text-center"
        name="banner"
        :headers="['Very Hungry?', 'ON the way!', 'Super Podnóż ;)', '']"
        :interval=5000
      />

    </Banner>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Toggler from "@/components/Toggler";

export default {
  components: {
    Toggler,
    Banner,
    Navbar,
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
  },
}

</script>

<style>
  #banner {
    /*background: url('../assets/podnóż.jpg');*/
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
    padding: 36px;
  }
  .router-link {
    padding: 10px;
    padding-top: 6px;
    font-size: 24px;
    color: #d7ffca;
    text-decoration: none;
  }
  .router-link:hover {
    text-decoration: underline;
  }
  .banner-enter, .banner-leave-to {
    opacity: 0;
    transform: translateX(1000px);
  }
  .banner-enter-to, .banner-leave {
    opacity: 1;
    /*transform: translate(-200px);*/
  }

  .banner-enter-active, .banner-leave-active {
    transition: all 1s;
  }
</style>