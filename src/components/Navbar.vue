<!--TODO: Logo and header element that is being styled should be in the same component - probably navbar -->
<!--TODO: REFACTOR THIS SHIT-->

<template>
    <header>
        <slot name="navbar">
            <slot name="logo"/>
        </slot>
    </header>
</template>

<script>
export default {
    props: {
        navbar: Object,
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
            if (scrollTop === 0) {
                this.$emit('styleLogo', this.logoStylePrimary)
                this.styleNavbar(this.navbarStylePrimary)
            } else {
                this.$emit('styleLogo', this.logoStyleSecondary)
                console.log(this.navbarStyleSecondary)
                this.styleNavbar(this.navbarStyleSecondary)
            }
        },
        styleNavbar(style) {
            const navbar = document.querySelector('header')
            navbar.style.position = style.position
            navbar.style.background = style.background
        },
    },
    mounted() {
        this.$emit('styleLogo', this.logoStylePrimary)
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
