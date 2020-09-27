<template>
  <div style="margin: 0 5% 5% 5%; line-height: 28px" class="row justify-between">
    <h2 style="width: 100%" class="text-center">Dlaczego my?</h2>
    <q-card style="width: 40%" class="row q-pa-lg">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus!
      <paypal-checkout
          style="margin-left: auto"
          env="sandbox"
          amount="10000"
          currency="PLN"
          locale="pl_PL"
          :client="paypal"
          :invoice-number="'201705051001'">
      </paypal-checkout>
    </q-card>

    <q-card style="width: 55%" class="q-pa-lg">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa dolorum officia quae quia quibusdam quod ut veritatis voluptas voluptatibus!
    </q-card>
<!--    <stripe/>-->
  </div>
</template>

<script>
import Stripe from "@/components/Stripe";

export default {
  components: {
    Stripe,

  },
  data () {
    return {
      paypal: {
        sandbox: 'ARRszbk6JNqmgyPsERRXBTWqt17G7Li7QCqeXjLoH9Pck6Px1nuGm9YH2JcA0T2xPmR_Aik2n1k7n6V2',
        // production: '<production client id>'
      }
    }
  },
}
</script>

<style scoped>
</style>