<template>
  <header :style="style">
    <slot name="navbar">
      <slot name="logo"/>
    </slot>
  </header>
</template>

<script>
export default {
  props: {
    stylePrimary: {
      type: Object
    },
    styleSecondary: {
      type: Object
    },
  },
  data() {
    return {
      style: this.stylePrimary,
    }
  },
  methods: {
    handleScroll() {
      const scrollTop = document.querySelector('body').getBoundingClientRect().top
      if (scrollTop === 0) {
        this.style = this.stylePrimary
      } else {
        this.style = this.styleSecondary
      }
    },
  },
  mounted() {
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
