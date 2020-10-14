<template>
  <div>
    <Home/>
<!--    <About style="border-bottom: 2px solid #8cca3b; padding: 100px 0 300px 0;"/>-->
    <HowItWorks/>
<!--    <Form/>-->
<!--    <Map/>-->
    <Contact/>
    <Calculator/>
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
import Calculator from "@/views/Calculator";
import HowItWorks from "@/views/HowItWorks";

export default {
  components: {
    Home,
    About,
    Map,
    Form,
    Leaflet,
    Contact,
    Calculator,
    HowItWorks,
  },

  data () {
    return {
      color: {
        primary: '#8cca3b',
      },
    }
  },
}
</script>

<style>
  body {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  section {
    height: 100vh;
    border-bottom: 2px solid #8cca3b
  }
</style>
