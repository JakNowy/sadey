<template>
  <section style="margin: 0 5% 5% 5%; line-height: 28px" class="row justify-between q-pa-xl" id="how-it-works">
    <h3 class="col-12 text-center q-pb-xl">Jak to działa?</h3>
    <q-card class="col-md-2 q-pa-md text-center">
      <img src="../assets/svg/okreslenie_zapotrzebowania.svg" alt="LOL">
      <h6>1. Określenie zapotrzebowania kalorycznego</h6>
      <p style="text-align: center" class=" q-pa-md text-center">
        Na podstawie swoich personalnych danych, w dedykowanym kalkulatorze, określasz swoje
        zapotrzebowanie kaloryczne.
      </p>
    </q-card>

    <q-card class="col-md-2 q-pa-md text-center">
      <img src="../assets/svg/wybor_diety.svg" alt="LOL">
      <h6>2. Wybór diety</h6>
      <p style="text-align: center" class=" q-pa-md text-center">
        Spośród naszej oferty wybierasz najbardziej odpowiadającą Ci dietę, która pomoże CI w
        zrealizowaniu założonych celów.
      </p>
    </q-card>

    <q-card class="col-md-2 q-pa-md text-center">
      <img src="../assets/svg/zakup_swiezych_produktow.svg" alt="LOL">
      <h6>3. Zakup świeżych produktów</h6>
      <p style="text-align: center" class=" q-pa-md text-center">
        W międzyczasie my zamawiamy świeże produkty od lokalnych producentów.
      </p>
    </q-card>

    <q-card class="col-md-2 q-pa-md text-center">
      <img src="../assets/svg/dostarczanie_przepisow.svg" alt="LOL">
      <h6>4. Dostarczenie składników i przepisu</h6>
      <p style="text-align: center" class=" q-pa-md text-center">
        Następnie dostarczamy Ci karty przepisów oraz wszystkie składniki potrzebne do
        przygotowania dań, w ilościach dokładnie takich, jakie zostały określone w Twojej diecie w
        opakowaniach wielokrotnego użytku.
      </p>
    </q-card>

    <q-card class="col-md-2 q-pa-md text-center">
      <img src="../assets/svg/gotowanie.svg" alt="LOL">
      <h6>5. Przygotowanie posiłków</h6>
      <p style="text-align: center" class=" q-pa-md text-center">
        Wykonując instrukcję krok po kroku sam ugotujesz pyszne potrawy, których kaloryka będzie
        zgodna z Twoim indywidualnym zapotrzebowaniem.
      </p>
    </q-card>

  </section>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    };
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
  h6 {
    height: 15%;
  }
</style>
