<template>
  <section style="margin: 0 5% 5% 5%; line-height: 28px" class="row justify-between">
    <h2 style="width: 100%" class="text-center">Znajdź nas!</h2>

      <Leaflet
      class="col-lg-6"
      :url="url"
      :bounds="bounds"
      :center="center"
      :zoom="zoom"
      />

  </section>
</template>

<script>
import Leaflet from "@/components/Leaflet";

export default {
  components: {
    Leaflet,
  },
  data () {
    return {
      center: [53.012772, 18.609531],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 16,
      bounds: {
        "_southWest": {
          "lat": 53.00554367051275,
          "lng": 18.588527690328547
        },
        "_northEast": {
          "lat": 53.01798893925695,
          "lng": 18.631443034566825
        }
      }
    };
  },
};
</script>

<style>
  section {
    height: 60vh;
  }
</style>
