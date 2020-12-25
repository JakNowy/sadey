<template>
    <Banner id="banner" class="row justify-center">
      <div slot="card"
           class="slogan"
      >
        <p
          slot="title"
          id="title"
          class="text-center text-secondary"
        >
        </p>

        <h2
          slot="subtitle"
          id="subtitle"
          class="text-center text-secondary"
          style="font-size: 64px; font-family: Pacifica; padding: 45px 0px;"
        >
           Jedzenie skrojone na miarę
        </h2>

        <div
          slot="buttons"
          class="text-center"
          id="buttons"
        >
            <q-btn size="lg" class="bg-primary text-secondary q-mx-md">Zamów</q-btn>

            <q-btn size="lg" class="bg-secondary text-primary q-mx-md" v-scroll-to="{
                el: '#how-it-works'
              }">Jak to działa?</q-btn>

        </div>
      </div>
    </Banner>
</template>

<script>
import Banner from "@/components/Banner";
import Toggler from "@/components/Toggler";

export default {
  components: {
    Toggler,
    Banner,
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
    background: url('../assets/background.jpg') no-repeat center;
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
  button{
      transition-duration: 0.2s;
  }
  button:hover{
      transform: scale(1.04);
  }

</style>