<template>
    <Banner id="banner" class="row justify-center">
      <div slot="card"
           class="slogan"
      >
        <h1
          slot="title"
          id="title"
          class="text-center"
        >
          <strong style="font-size: 128px">Podnóż</strong>
        </h1>

        <h2
          slot="subtitle"
          id="subtitle"
          class="text-center"
          style="font-size: 30px"
        >
          ~ Jedzenie skrojone na miarę ~
        </h2>

        <div
          slot="buttons"
          class="text-center"
          id="buttons"
        >
            <q-btn size="lg" style="background-color: var(--primary); color: var(--secondary)" class="q-mx-md">Zamów</q-btn>

            <q-btn size="lg" class="q-mx-md" v-scroll-to="{
                el: '#how-it-works'
              }">Jak to działa?</q-btn>

        </div>
      </div>
    </Banner>
</template>

<script>
import Navbar from "@/components/Header";
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
      stylePrimary: { position: 'absolute', background: 'none', color: '$accent'},
      styleSecondary: { position: 'fixed', background: '$accent', color:'secondary'},
    }
  },
}

</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  html {
    font-family: 'Montserrat', sans-serif;
  }
  #title {
    color: var(--primary); font-size: 100px; margin: 5% 0 0 0;
  }
  #subtitle {
    color: var(--primary); font-size: 28px; font-style: italic; margin: 0;
  }
  #buttons {
    color: var(--primary); font-size: 60px;
  }
  #banner {
    background: url('../assets/1b.jpg') no-repeat center;
    background-size: cover;
  }
  .slogan {
    border: var(--primary) solid 3px;
    width: 45%;
    margin-top: 12%;
    padding: 64px;
    height: min-content;
  }
  @media only screen and (max-width: 1366px) {
    #title {
      color: var(--primary); font-size: 72px; margin: 6% 0 0 0;
    }
    #subtitle {
      color: var(--primary); font-size: 24px; font-style: italic; margin: 0;
    }
  }

</style>