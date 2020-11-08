<template>
  <section class="row q-ma-xl q-pa-xl justify-evenly" id="contact">
    <h4 class="col-12 text-center">Masz pytanie - Napisz do nas</h4>
    <ContactCard header="Kontakt:" :lines="['+ 796 189 398', 'gajtkowski.mateusz@gmail.com', '8:00 – 20:00']"></ContactCard>
    <ContactCard header="Diety:" :lines="['Fit', 'Wegetariańska', 'Vege']"></ContactCard>
    <ContactCard header="Sklep:" :lines="['Twoje konto', ]"></ContactCard>
    <ContactCard header="Polityka prywatności:" :lines="['+ 796 189 398', 'gajtkowski.mateusz@gmail.com', '8:00 – 20:00']"></ContactCard>
    <ContactCard header="Regulamin:" :lines="['+ 796 189 398', 'gajtkowski.mateusz@gmail.com', '8:00 – 20:00']"></ContactCard>
  </section>
</template>

<script>
import ContactCard from "@/components/ContactCard";

  export default {
    components: {
      ContactCard,
    },
    data() {
      return {

      }
    }
  };

</script>

<style scoped>
  h4 {
    margin-top: 0;
    margin-bottom: 100px;
  }
  section {
    border: None;
    height: auto;
  }

</style>
