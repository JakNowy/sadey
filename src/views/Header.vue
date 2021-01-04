<template>
    <Navbar class="row justify-center " :logo-style-primary="logoStylePrimary"
            :logo-style-secondary="logoStyleSecondary" :navbar-style-primary="navbarStylePrimary"
            :navbar-style-secondary="navbarStyleSecondary" :scroll-breakpoint=0 :mobile-breakpoint="mobileBreakpoint">
        <nav ref="navbar" slot="nav" class="nav row" :class="{'items-center': !this.isMobile}">
            <img ref="logo" class="logo" slot="logo" src="../assets/logo.png" v-if="!this.isMobile">

            <span class="q-mx-xl q-my-md q-px-xl items-center">
              <img style="height: 60px; position: relative; left: 30%" src="../assets/logo.png" v-if="this.isMobile">
              <q-btn color="$primary" size="lg" class="q-mx-sm button hamburger" icon="menu" @click="handleHamburger" v-if="isMobile"/>
              <router-link class="router-link" v-scroll-to="{
                  el: '#banner'
              }" to="/"
               v-show="this.displayLinks"
              >O nas</router-link>

              <router-link v-scroll-to="{
                el: '#how-it-works'
              }" class="router-link" to="/"
                v-show="this.displayLinks"
              >Jak to działa</router-link>

              <router-link class="router-link" v-show="this.displayLinks" to="/about">Zamów</router-link>
              <router-link class="router-link" v-show="this.displayLinks" to="/about">Dobierz dietę</router-link>
              <router-link class="router-link" v-show="this.displayLinks" to="/about">Blog</router-link>

              <router-link v-scroll-to="{
                el: '#contact'
              }" class="router-link" to="/"
                v-show="this.displayLinks"
              >Kontakt</router-link>
            </span>

          <q-btn round color="$primary" icon="shopping_cart" class="q-mx-sm button" v-if="!isMobile"/>
          <q-btn round color="$primary" icon="account_circle" class="q-mx-sm button" v-if="!isMobile"/>


        </nav>
    </Navbar>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
    components: {
        Navbar,
    },
    data() {
        return {
            navbarOpen: false,
            logoStylePrimary: {height: 83, width: 80},
            logoStyleSecondary: {height: 52, width: 50},
            navbarStylePrimary: {position: 'absolute', background: 'none'},
            navbarStyleSecondary: {position: 'fixed', background: '#545454'},
            mobileBreakpoint: 1024,
        }
    },
    methods: {
        handleHamburger: function () {
          this.navbarOpen = !this.navbarOpen
          let height = this.$refs.navbar.style.height
          if (height === '100vh') {
            this.$refs.navbar.style.height = 'inherit'
          } else {
            this.$refs.navbar.style.height = '100vh'
          }
        },
    },
    computed: {
      displayLinks: function () {
        return (this.isMobile && this.navbarOpen) || !this.isMobile
      },
      isMobile: function () {
        return window.innerWidth < this.mobileBreakpoint
      },
    },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

html {
    font-family: 'Montserrat', sans-serif;
}

.nav {
    color: var(--accent);
    padding: 0 16px 0;
    border-bottom: 1px solid var(--primary)
}

.button {
    font-size: 8px;
    width: 24px;
    height: 24px
}

.logo {
    margin: 10px 0;
}

.router-link {
    padding: 10px 26px;
    font-size: 20px;
    font-weight: 500;
    color: var(--secondary);
    text-decoration: none;
    transition-duration: 0.3s;
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

@media only screen and (max-width: 1023px) {
  .nav {
    position: relative;
  }
  .router-link {
    border-bottom: 2px solid var(--primary);
    padding: 15% 0;
    text-align: center;
    font-size: 20px;
    min-width: 150px;
    display: block;
  }
  .router-link:first-of-type {
    padding-top: 40%;
  }
  .hamburger {
    position: relative;
    left: 65%;
    bottom: 30px;
    margin-top: 20px;
    max-height: 60px;
    max-width: 60px;
  }
}
</style>
