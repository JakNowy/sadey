<template>
    <Navbar class="row justify-center" ref="navbar" :logo-style-primary="logoStylePrimary"
            :logo-style-secondary="logoStyleSecondary" :navbar-style-primary="navbarStylePrimary"
            :navbar-style-secondary="navbarStyleSecondary" @styleLogo="styleLogo($event)">
        <nav slot="navbar" class="nav row items-center">
            <img id="logo" ref="logo" slot="logo" src="../assets/logo.png">
            <span class="q-mx-xl q-my-md q-px-xl">
                <router-link class="router-link" v-scroll-to="{
                  el: '#banner'
                }" to="/">O nas</router-link>

                <router-link v-scroll-to="{
                  el: '#how-it-works'
                }" class="router-link" to="/">Jak to działa</router-link>

                <router-link class="router-link" to="/about">Zamów</router-link>
                <router-link class="router-link" to="/about">Dobierz dietę</router-link>
                <router-link class="router-link" to="/about">Blog</router-link>

                <router-link v-scroll-to="{
                  el: '#contact'
                }" class="router-link" to="/">Kontakt</router-link>
              </span>
            <q-btn round color="$primary" icon="shopping_cart" class="q-mx-sm button"/>
            <q-btn round color="$primary" icon="account_circle" class="q-mx-sm button"/>

        </nav>
    </Navbar>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
    components: {
        Navbar,
    },
    data() {
        return {
            logoStylePrimary: {height: 83, width: 80},
            logoStyleSecondary: {height: 52, width: 50},
            navbarStylePrimary: {position: 'absolute', background: 'none'},
            navbarStyleSecondary: {position: 'fixed', background: '#545454'},
        }
    },
    methods: {
        styleLogo (style) {
            const logo = document.querySelector('#logo')
            console.log(style)
            logo.style = style.height
            logo.width = style.width
            console.log(logo)
        },
    },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

html {
    font-family: 'Montserrat', sans-serif;
}

.nav {
    color: var(--accent);
    padding: 0 16px 0;
    border-bottom: 1px solid var(--primary)
}

.button {
    font-size: 8px;
    width: 24px;
    height: 24px
}

#logo {
    margin: 10px 0;
}

.router-link {
    padding: 10px 26px;
    font-size: 20px;
    font-weight: 500;
    color: var(--secondary);
    text-decoration: none;
    transition-duration: 0.3s;
}

.router-link:hover {
    text-decoration: underline;
    color: var(--primary);
}

@media only screen and (max-width: 1366px) {
    .router-link {
        font-size: 18px;
        padding: 8px 14px;
    }
}
</style>