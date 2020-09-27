<template>
  <div>
    <Home/>
    <About/>
<!--    <Stripe/>-->
    <Map/>
<!--    <Leaflet/>-->
  </div>
</template>


<script>
import Home from "@/views/Home";
import About from "@/views/About";
import Map from "@/views/Map";
import Leaflet from "@/views/Leaflet";
// import Stripe from "@/views/Stripe";

export default {
  components: {
    Home,
    About,
    Map,
    Leaflet,
    // Stripe,
  },

  data () {
    return {
    }
  }
}
</script>

<style>
  section {
    height: 100vh;
  }
</style>
