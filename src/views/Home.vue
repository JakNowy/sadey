<template>
  <div>
    <Navbar style="background: #8cca3b">
      <a slot="logo" href="https://www.facebook.com/StudioNoClaims/">
<!--        <img class="logo" src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/p320x320/90767039_194232475335239_3092828644456792064_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=HW3tomYTdBIAX9LPVzB&_nc_ht=scontent-waw1-1.xx&_nc_tp=6&oh=a4c89b96c726e1badc2c2ade6e153e2a&oe=5EC0979F">-->
      </a>
      <nav slot="navbar" class="row">
          <router-link class="router-link" to="/">O nas</router-link>
          <router-link class="router-link" to="/about">Jak to działa</router-link>
          <router-link class="router-link" to="/about">Zamów</router-link>
          <router-link class="router-link" to="/about">Dobierz dietę</router-link>
          <router-link class="router-link" to="/about">Blog</router-link>
          <router-link class="router-link" to="/about">Kontakt</router-link>
          <q-btn round color="#8cca3b" icon="shopping_cart" style="font-size: 8px; width: 24px; height: 24px" class="q-mx-sm"/>
          <q-btn round color="#8cca3b" icon="account_circle" style="font-size: 8px; width: 24px; height: 24px" class="q-mx-sm"/>

<!--          <q-btn></q-btn>-->
      </nav>
    </Navbar>

    <Banner id="banner">
      <p
        slot="title"
        style="color: #8cca3b; padding-top: 280px; font-size: 96px"
        class="text-center"
      >
        Podnóż
      <p>

      <p
        slot="subtitle"
        class="text-center"
        style="color: #8cca3b; font-size: 24px"
      >
        Jedzenie skrojone na miarę
      <p/>

      <div
        slot="buttons"
        class="text-center"
        style="color: #8cca3b; font-size: 24px"
      >
          <q-btn style="background-color: #8cca3b; color: whitesmoke" class="q-mx-md">Zamów</q-btn>
          <q-btn class="q-mx-md">Jak to działa?</q-btn>
      </div>

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
    padding: 16px;
  }
  .router-link {
    padding: 10px;
    font-size: 16px;
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