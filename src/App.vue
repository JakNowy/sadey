<template>
  <div>
    <Home/>
    <About/>
    <Map/>
<!--    <Leaflet/>-->
  </div>
</template>


<script>
import Home from "@/views/Home";
import About from "@/views/About";
import Map from "@/views/Map";
import Leaflet from "@/views/Leaflet";

export default {
  components: {
    Home,
    About,
    Map,
    Leaflet,
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
