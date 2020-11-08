<template>
  <div class="q-pa-xl bg-primary">
    <q-carousel
        v-model="slide"
        transition-prev="slide-left"
        transition-next="slide-right"
        swipeable
        animated
        control-color="white"
        padding
        infinite
        :autoplay="autoplay"
        @mouseenter="autoplay = true"
        @mouseleave="autoplay = false"
        arrows
        class="bg-primary rounded-borders"
    >
      <q-carousel-slide name="1" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h5>{{ content.header["1"] }}</h5>
          <p> {{ content.text["2"] }} </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="2" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h5>{{ content.header["2"] }}</h5>
          <p> {{ content.text["2"] }} </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="3" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h5>{{ content.header["3"] }}</h5>
          <p> {{ content.text["3"] }} </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="4" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h5>{{ content.header["4"] }}</h5>
          <p> {{ content.text["4"] }} </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="5" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h5>{{ content.header["5"] }}</h5>
          <p> {{ content.text["5"] }} </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="6" class="column no-wrap flex-center slide">
        <div class="q-mt-md text-center">
          <h5>{{ content.header["6"] }}</h5>
          <p> {{ content.text["6"] }} </p>
        </div>
      </q-carousel-slide>

<!--      <div>-->
<!--        <q-btn-toggle-->
<!--            v-model="slide"-->
<!--            :options="[-->
<!--            { label: 1, value: '1' },-->
<!--            { label: 2, value: '2' },-->
<!--            { label: 3, value: '3' },-->
<!--            { label: 4, value: '4' },-->
<!--            { label: 5, value: '5' },-->
<!--            { label: 6, value: '6' },-->
<!--          ]"-->
<!--        />-->
<!--      </div>-->
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
          '1': 'Kupowanie drogiej diety? Liczenie kalorii i makroskładników? Zastanawianie się czy powinienem zjeść ten posiłek czy inny? Sprawdzanie etykiet przed każdym zakupem? Zapomnij o tym. Podnóż skonfiguruje dietę specjalnie dla Ciebie zgodnie z Twoimi celami i upodobaniami!\n',
          '2': 'Zastanawiałeś się kiedyś, ile czasu poświęcasz na zakupy czy na wybór posiłków? Z uwagi na to, że robimy to praktycznie codziennie, łatwo sobie wyobrazić, że marnujemy go całkiem sporo. Pomyśl, ile minut dziennie zastanawiasz się nad tym co chcesz zjeść, jak długo dojeżdżasz do pracy, ile minut jesteś w sklepie i na końcu jak uporczywe jest liczenie kalorii. Czy nie lepiej przeznaczyć go na samego siebie?\n',
          '3': 'Wszystkie dostarczane do Ciebie składniki są najwyższej jakości. Na wypadek gdybyś miał co do tego wątpliwości, zapewniamy, że korzystając z Podnóż osobiście sprawdzisz jakie produkty są wykorzystywane do Twoich posiłków.\n',
          '4': 'Czy zastanawiałeś się, jak dużo składników kupujesz w nadmiarze? Czy wiesz jak dużo jedzenia marnujesz, w wyniku przeterminowania składników? Czy zdajesz sobie sprawę jak często przepłacasz, bo chcesz kupić coś w pośpiechu „na mieście”? Podnóż jest zdecydowanie tańsze od cateringów dietetycznych i posiłków w restauracji.\n',
          '5': 'W Polsce roztrwaniamy przeciętnie 9 mln ton jedzenia rocznie. Z nami możesz ograniczyć to marnotrawstwo. Podnóż dostarcza do Ciebie tylko tyle jedzenia, ile sam potrzebujesz, a gotowanie dla jednej osoby staje się opłacalne.\n',
          '6': 'Nikt nie przepada za odgrzewanym jedzeniem. Z Podnóż zawsze zjesz świeży i ciepły posiłek zgodnie z własnymi preferencjami odnośnie sposobu przygotowania. My Ci tylko podpowiadamy, ale decyzję podejmujesz SAM.\n',
        },
      },
      slide: '1',
    }
  },
}
</script>

<style scoped>
  .slide {
    padding: 0 30% !important;
    font-size: 20px;
    line-height: 36px;
  }
</style>

