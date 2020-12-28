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
        mobileBreakpoint: Number,
        scrollBreakpoint: Number,
        logoStylePrimary: Object,
        logoStyleSecondary: Object,
        navbarStylePrimary: Object,
        navbarStyleSecondary: Object,
        navbarStylePrimaryMobile: Object,
        navbarStyleSecondaryMobile: Object,
    },
    data() {
        return {
        }
    },
    methods: {
        handleScroll() {
          if (window.innerWidth > this.mobileBreakpoint) {
              const scrollTop = document.querySelector('body').getBoundingClientRect().top
              if (-scrollTop <= this.scrollBreakpoint) {
                  this.styleLogo(this.logoStylePrimary)
                  this.styleHeader(this.navbarStylePrimary)
              } else {
                  this.styleLogo(this.logoStyleSecondary)
                  this.styleHeader(this.navbarStyleSecondary)
              }
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
        styleHeader(style) {
            const header = this.$refs.header
            if (header) {
                // TODO: Rework hardcoding attributes
                // This works
                header.style.background = style.background
                header.style.position = style.position
            }

            // This doesnt work
            // for (const [key, value] of Object.entries(style)) {
            //     navbar.setAttribute(style, `${key}: ${value}`)
            // }

        },
    },
    mounted() {
        if (window.innerWidth >= this.mobileBreakpoint) {
          this.styleHeader(this.navbarStylePrimary)
        } else {
          this.styleHeader({'background': '#545454'})
        }
        this.styleLogo(this.logoStylePrimary)
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
