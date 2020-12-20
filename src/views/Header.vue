<template>
    <Header class="row justify-center" :style-primary="stylePrimary" :style-secondary="styleSecondary">
      <nav slot="navbar" class="nav row items-center">
          <img id="logo" slot="logo" src="../assets/logo.png">
          <span class="q-mx-xl q-my-md q-px-xl">
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
          <q-btn round color="$primary" icon="shopping_cart" class="q-mx-sm button"/>
          <q-btn round color="$primary" icon="account_circle" class="q-mx-sm button"/>

      </nav>
    </Header>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header,
  },
  data() {
    return {
      stylePrimary: { position: 'absolute', background: 'none'},
      styleSecondary: { position: 'fixed', background: '#545454'},
    }
  },
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  html {
    font-family: 'Montserrat', sans-serif;
  }
  .nav {
    color: var(--accent); padding: 0 16px 0; border-bottom: 1px solid var(--primary)
  }
  .button {
    font-size: 8px; width: 24px; height: 24px
  }
  #logo {
      padding: 2px 0;
    height: 55px;
    width: 40px;
  }
  .router-link {
    padding: 10px 16px;
    font-size: 20px;
    font-weight: 500;
    color: var(--primary);
    text-decoration: none;
  }
  .router-link:hover {
    text-decoration: underline;
    color: var(--primary);
  }
  @media only screen and (max-width: 1366px) {
    .router-link {
      font-size: 18px;
      padding: 8px 14px;
    }
  }
</style>