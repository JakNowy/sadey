<template>
  <div>
    <Home style="border-bottom: 2px solid #8cca3b;"/>
    <About style="border-bottom: 2px solid #8cca3b; padding: 100px 0 300px 0;"/>
<!--    <Form/>-->
<!--    <Map/>-->
    <Contact/>
<!--    <Leaflet/>-->
  </div>
</template>


<script>
import Home from "@/views/Home";
import About from "@/views/About";
import Map from "@/views/Map";
import Leaflet from "@/views/Leaflet";
import Form from "@/views/Form";
import Contact from "@/views/Contact";

export default {
  components: {
    Home,
    About,
    Map,
    Form,
    Leaflet,
    Contact,
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
    border-bottom: 2px solid #8cca3b
  }
</style>
