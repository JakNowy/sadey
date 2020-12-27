<!--TODO: Redesign component structure so it's conveniently reusable -->

<template>
    <header ref="header">
        <slot name="nav">
            <slot name="logo"/>
        </slot>
    </header>
</template>

<script>
export default {
    props: {
        scrollBreakpoint: Number,
        logoStylePrimary: Object,
        logoStyleSecondary: Object,
        navbarStylePrimary: Object,
        navbarStyleSecondary: Object,
    },
    data() {
        return {
            logo: document.querySelector('#logo'),
        }
    },
    methods: {
        handleScroll() {
            const scrollTop = document.querySelector('body').getBoundingClientRect().top
            if (-scrollTop <= this.scrollBreakpoint) {
                this.styleLogo(this.logoStylePrimary)
                this.styleNavbar(this.navbarStylePrimary)
            } else {
                this.styleLogo(this.logoStyleSecondary)
                this.styleNavbar(this.navbarStyleSecondary)
            }
        },
        styleLogo (style) {
            const logo = this.$parent.$refs.logo
            if (logo) {
                // This works
                logo.width = style.width
                logo.height = style.height
            }

            // This works
            // for (const [key, value] of Object.entries(style)) {
            //     logo.setAttribute(key, value)
            // }

            // This doesnt work
            // logo.style.width = style.width
            // logo.style.height = style.height

        },
        styleNavbar(style) {
            const navbar = this.$refs.header
            if (navbar) {
                // TODO: Rework hardcoding attributes
                // This works
                navbar.style.background = style.background
                navbar.style.position = style.position
            }

            // This doesnt work
            // for (const [key, value] of Object.entries(style)) {
            //     navbar.setAttribute(style, `${key}: ${value}`)
            // }

        },
    },
    mounted() {
        this.styleLogo(this.logoStylePrimary)
        this.styleNavbar(this.navbarStylePrimary)
        window.addEventListener('scroll', this.handleScroll);
    },
    destroy() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}

</script>

<style>
header {
    top: 0;
    width: 100%;
    display: flex !important;
    justify-content: space-between;
    z-index: 1000;
}

</style>
