<template>
  <section style="line-height: 28px" class="row justify-center q-pa-xl text-primary" id="how-it-works">
    <h2 class="col-12 text-center">Jak to działa?</h2>
    <div v-for="card in cards" class="col-md-4 col-lg-3 q-pa-lg q-pt-xl text-center row">
        <q-card class="q-pa-sm items-stretch">
          <img ref="img" @mouseover="cardHover" :src="getImgUrl(card.img)" alt="LOL">
          <h5> {{ card.header }} </h5>
          <p class="text-h6 q-pa-md text-center ">
            {{ card.content }}
          </p>
        </q-card>
    </div>
    <p class="text-center font-bold text-h4 col-12 q-mt-xl">Dlaczego powinnineś nas zamówić?
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
  img{
    width: 128px;
    height: 128px;
  }
  section {
    height: auto;
  }
  h5 {
    height: 10%;
  }
</style>
