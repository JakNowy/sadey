<template>
    <div>
        <Header/>
        <Home/>
        <HowItWorks/>
        <WhyUs/>
        <Contact/>
    </div>
</template>

<script>
import Header from "@/views/Header";
import Home from "@/views/Home";
import About from "@/views/About";
import Map from "@/views/Map";
import Leaflet from "@/views/Leaflet";
import Form from "@/views/Form";
import Contact from "@/views/Contact";
import Calculator from "@/views/Calculator";
import HowItWorks from "@/views/HowItWorks";
import WhyUs from "@/views/WhyUs";

export default {
    components: {
        Header,
        Home,
        About,
        Map,
        Form,
        Leaflet,
        Contact,
        Calculator,
        HowItWorks,
        WhyUs,
    },

    data() {
        return {
            color: {
                primary: '$primary',
            },
        }
    },
}
</script>

<style>
:root {
    --primary: #8cca3b;
    --secondary: #e8efdf;
    --accent: #545454;
    --dark: #4b5440;
    --positive: #21BA45;
    --negative: #C10015;
    --info: #31CCEC;
    --warning: #F2C037;
}

html {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

section {
    height: 100vh;
}
</style>
