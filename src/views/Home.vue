<template>
    <Banner id="banner" class="row justify-center">
      <div slot="card"
           class="card"
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
        >
           Jedzenie skrojone na miarę
        </h2>

        <div
          slot="buttons"
          class="text-center q-pb-lg-md"
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
  #subtitle {
    color: var(--primary); font-size: 72px; font-style: italic; margin: 0;
  }
  #buttons {
    color: var(--primary); font-size: 60px;
  }
  #banner {
    background: url('../assets/background.jpg') no-repeat center;
    background-size: cover;
  }
  .card {
    border: var(--primary) solid 3px;
    margin-top: 256px;
    padding: 64px;
    height: min-content;
  }
  button{
      transition-duration: 0.2s;
  }
  button:hover{
      transform: scale(1.04);
  }
  h2 {
    font-size: 64px; font-family: Pacifica; padding: 45px 0px;
  }

  @media only screen and (max-width: 1366px) {
    .card {
      margin-top: 184px;
    }
  }

  @media only screen and (max-width: 1023px) {
    .card {
      width: 80%;
      padding: 0;
      padding-bottom: 16px;
      margin-top: 64px;
    }
    #subtitle {
      font-size: 44px;
    }
  }

</style>