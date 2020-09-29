<template>
  <section style="margin: 0 5% 5% 5%; line-height: 28px; color: #8cca3b; height: auto" class="row justify-evenly">
    <q-card style="width: 80%; border-color: #8cca3b" class="row justify-evenly">
      <div style="margin: 100px">
        <p class="text-h3 q-my-xl text-center col-12">Zarejestruj się!</p>
        <q-input outlined v-model="imie" label="Imię" class="q-pa-lg col-md-8"/>
        <q-input outlined v-model="nazwisko" label="Nazwisko" class="q-pa-lg col-md-8" />
        <div class="row justify-around q-mt-lg">
          <q-btn label="Wyślij" outline />
        </div>
      </div>
    </q-card>
  </section>
</template>

<script>

export default {
  components: {
  },
  data () { return {
      imie: '',
      nazwisko: '',
      text: '',
    }
  },
}
</script>

<style>
  section {
    height: 60vh;
  }
</style>
