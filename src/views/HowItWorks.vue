<template>
  <section class="row line-height justify-center q-pa-xl text-primary" id="how-it-works">
    <div class="col-12 h1 text-center ">Jak to działa?</div>
    <div v-for="card in cards" class="col-md-4 col-lg-4 q-pa-lg-lg q-pa-sm-none q-pt-xl text-center row">
        <q-card class="items-stretch q-mx-lg bg-secondary">
          <div class="h2 bg-accent"> {{ card.header }} </div>
          <img class="q-my-lg q-my-sm-sm" ref="img" @mouseover="cardHover" :src="getImgUrl(card.img)" :alt="card.img">
          <p class="text-h6 q-pa-sm text-center text-black content line-height">
            {{ card.content }}
          </p>
        </q-card>
    </div>
    <p class="text-center font-bold text-h4 col-12 q-mt-lg q-mt-sm-sm">Dlaczego powinnineś nas zamówić?
        <a href="#why-us" class="text-primary text-h4" >
            Sprawdź poniżej.</a>
    </p>
  </section>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
        cards: [
            {
                img: 'svg/okreslenie_zapotrzebowania.svg',
                header: 'TY określasz zapotrzebowania kaloryczne i wybierasz dietę',
                content: 'Na podstawie swoich personalnych danych, w dedykowanym kalkulatorze, określasz swoje ' +
                    'zapotrzebowanie kaloryczne, a następnie spośród naszej oferty wybierasz najbardziej ' +
                    'odpowiadającą Ci dietę, która pomoże CI w zrealizowaniu założonych celów.',
            },
            {
                img: 'svg/zakup_swiezych_produktow.svg',
                header: 'MY dostarczamy Ci odmierzone składniki oraz przepisy',
                content: 'Następnie my dostarczamy Ci karty przepisów oraz świeże składniki potrzebne do' +
                    'przygotowania dań, w ilościach dokładnie takich, jakie zostały określone w Twojej diecie w ' +
                    'opakowaniach wielokrotnego użytku.'
            },
            {
                img: 'svg/gotowanie.svg',
                header: 'TY przygotowujesz ciepłe posiłki',
                content: 'Wykonując instrukcję krok po kroku sam gotujesz pyszne potrawy, których kaloryczność ' +
                    'będzie zgodna z Twoim indywidualnym zapotrzebowaniem.',
            }
        ],
    };
  },
    methods: {
        getImgUrl(src) {
            return require('../assets/'+src)
        },
        cardHover() {
        },
},
};
</script>

<style scoped>
  img {
    width: 128px;
    height: 128px;
  }
  section {
    height: auto;
  }
  .h1 {
    font-size: 64px;
    margin-top: 54px;
  }
  .h2 {
    font-size: 30px;
    padding: 10% 0;
    height: 180px;
  }
  .content {
    font-size: 20px;
  }
  .line-height {
    line-height: 1.2;
  }

  @media only screen and (max-width: 1366px) {
    .h1 {
      font-size: 48px;
      margin-top: 36px;
      margin-bottom: -10px;
    }
    .h2 {
      font-size: 24px;
      height: 110px;
    }
  }
  @media only screen and (max-width: 1023px) {
    section {
      padding: 0;
    }
    .h2 {
      height: 136px;
    }
  }


</style>
