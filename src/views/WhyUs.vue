<template>
  <div id="why-us" class="q-pa-xl">
    <p class="text-h3 text-primary text-center q-mt-xl q-py-xl">Dlaczego warto skorzystać z Podnóż</p>
    <q-carousel
        v-model="slide"
        transition-prev="slide-left"
        transition-next="slide-right"
        swipeable
        animated
        control-color="black"
        padding
        infinite
        :autoplay="7000"
        @mouseenter="autoplay = true"
        @mouseleave="autoplay = false"
        arrows
        class="rounded-borders"
    >
      <q-carousel-slide name="1" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h4>{{ content.header["1"] }}</h4>
          <p v-html="content.text['1']"> </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="2" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h4>{{ content.header["2"] }}</h4>
          <p v-html="content.text['2']"> </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h4>{{ content.header["3"] }}</h4>
          <p v-html="content.text['3']"> </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="4" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h4>{{ content.header["4"] }}</h4>
          <p v-html="content.text['4']"> </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="5" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h4>{{ content.header["5"] }}</h4>
          <p v-html="content.text['5']"> </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="6" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h4>{{ content.header["6"] }}</h4>
          <p v-html="content.text['6']"> </p>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      autoplay: true,
      content: {
        header: {
          '1': 'Nie martw się o swoją dietę.',
          '2': 'Wiesz, ile czasu tracisz?',
          '3': 'Z nami wiesz co jesz.',
          '4': 'A ile pieniędzy możesz zaoszczędzić.',
          '5': 'Stop marnowaniu jedzenia!',
          '6': 'Nie musisz jeść odgrzewanego jedzenia.',
        },
        text: {
          '1': 'Kupowanie drogiej diety? Liczenie kalorii i makroskładników? Zastanawianie się czy powinienem zjeść\n' +
              'ten posiłek czy inny? Sprawdzanie etykiet przed każdym zakupem? <strong>Zapomnij o tym. Podnóż skonfiguruje dietę specjalnie dla Ciebie zgodnie z Twoimi celami i upodobaniami!</strong>',
          '2': 'Zastanawiałeś się kiedyś, ile czasu poświęcasz na zakupy czy na wybór posiłków? Z uwagi na to, że\n' +
              'robimy to praktycznie codziennie, łatwo sobie wyobrazić, że marnujemy go całkiem sporo. Pomyśl, ile\n' +
              'minut dziennie zastanawiasz się nad tym co chcesz zjeść, jak długo dojeżdżasz do pracy, ile minut\n' +
              'jesteś w sklepie i na końcu jak uporczywe jest liczenie kalorii. <strong>Podnóż zrobi te wszystkie czynności za\n' +
              'Ciebie!</strong>',
          '3': 'Wszystkie dostarczane do Ciebie składniki są najwyższej jakości. Na wypadek gdybyś miał co do tego\n' +
              'wątpliwości, zapewniamy, że <strong>korzystając z Podnóż osobiście sprawdzisz jakie produkty są\n' +
              'wykorzystywane do Twoich posiłków.</strong>',
          '4': 'Czy zastanawiałeś się, jak dużo składników kupujesz w nadmiarze? Czy wiesz jak dużo jedzenia\n' +
              'marnujesz, w wyniku przeterminowania składników? Czy zdajesz sobie sprawę jak często przepłacasz,\n' +
              '\n' +
              'bo chcesz kupić coś w pośpiechu „na mieście”? <strong>Podnóż jest zdecydowanie tańsze od cateringów\n' +
              'dietetycznych i posiłków w restauracji.</strong>',
          '5': 'W Polsce roztrwaniamy przeciętnie 9 mln ton jedzenia rocznie. Z nami możesz ograniczyć to\n' +
              'marnotrawstwo. <strong>Podnóż dostarcza do Ciebie tylko tyle jedzenia, ile sam potrzebujesz, a gotowanie\n' +
              'dla jednej osoby staje się opłacalne.</strong>',
          '6': 'Nikt nie przepada za odgrzewanym jedzeniem. <strongZ Podnóż zawsze zjesz świeży i ciepły posiłek></strong> zgodnie\n' +
              'z własnymi preferencjami odnośnie sposobu przygotowania. My Ci tylko podpowiadamy, ale <strong>decyzję ' +
              'podejmujesz SAM.</strong>',
        },
      },
      slide: '1',
    }
  },
}
</script>

<style scoped>
  .slide {
    padding: 0 15% !important;
    font-size: 20px;
    line-height: 36px;
  }
</style>

