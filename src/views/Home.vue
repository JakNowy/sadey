<template>
  <div style="font-family: 'Montserrat', sans-serif;">
    <Navbar class="row justify-center" :style-primary="stylePrimary" :style-secondary="styleSecondary">
      <nav slot="navbar" style="color: #545454; padding: 0 16px 0; border-bottom: 1px solid #8cca3b" class="row items-center">
<!--          <q-btn round color="#8cca3b" icon="shopping_cart" style="font-size: 8px; width: 24px; height: 24px" class="q-mx-sm"/>-->
<!--          <q-btn round color="#8cca3b" icon="account_circle" style="font-size: 8px; width: 24px; height: 24px" class="q-mx-sm"/>-->
          <img slot="logo" src="../assets/podnoz_logo.png">
          <span class="q-mx-xl q-px-xl">
            <router-link class="router-link" v-scroll-to="{
              el: '#banner'
            }" to="/">O nas</router-link>

            <router-link v-scroll-to="{
              el: '#how-it-works'
            }" class="router-link" to="/">Jak to działa</router-link>

            <router-link class="router-link" to="/about">Zamów</router-link>
            <router-link class="router-link" to="/about">Dobierz dietę</router-link>
            <router-link class="router-link" to="/about">Blog</router-link>

            <router-link v-scroll-to="{
              el: '#contact'
            }" class="router-link" to="/">Kontakt</router-link>
          </span>
          <q-btn round color="#8cca3b" icon="shopping_cart" style="font-size: 8px; width: 24px; height: 24px" class="q-mx-sm"/>
          <q-btn round color="#8cca3b" icon="account_circle" style="font-size: 8px; width: 24px; height: 24px" class="q-mx-sm"/>

<!--          <q-btn></q-btn>-->
      </nav>
    </Navbar>

    <Banner id="banner" class="row justify-center">
      <div slot="card" style="margin-top: 7%; padding: 64px; height: min-content; " class="col-6">
      <p
        slot="title"
        style="color: #8cca3b; font-size: 108px;"
        class="text-center"
      >
        <strong>Podnóż</strong>
      <p>

      <p
        slot="subtitle"
        class="text-center"
        style="color: #8cca3b; font-size: 32px; font-style: italic"
      >
        ~ Jedzenie skrojone na miarę ~
      <p/>

      <div
        slot="buttons"
        class="text-center"
          style="color: #8cca3b; font-size: 60px"
      >
          <q-btn size="lg" style="background-color: #8cca3b; color: whitesmoke" class="q-mx-md">Zamów</q-btn>

          <q-btn size="lg" class="q-mx-md" v-scroll-to="{
              el: '#how-it-works'
            }">Jak to działa?</q-btn>

      </div>
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
  data() {
    return {
      stylePrimary: { position: 'absolute', background: 'none', color: '#8cca3b'},
      styleSecondary: { position: 'fixed', background: '#545454', color:'#fff'},
    }
  },
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  #banner {
    background: url('../assets/1.jpg');
    /*background-attachment: fixed;*/
  }
  a {
    line-height: 0;
  }
  img {
    height: 90px;
    width: 65px;
  }
  .router-link {
    padding: 10px 16px;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
  }
  .router-link:hover {
    text-decoration: underline;
    color: #8cca3b;
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