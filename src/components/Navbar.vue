<template>
  <header :style="{background: background}">
    <slot name="logo"></slot>
    <slot name="navbar"></slot>
  </header>
</template>

<script>
export default {
  props: {
    backgroundPrimary: {
      type: String
    },
    backgroundSecondary: {
      type: String
    },
  },
  data() {
    return {
      background: 'none',
    }
  },
  methods: {
    handleScroll() {
      const scrollTop = document.querySelector('#banner').getBoundingClientRect().bottom
      if (scrollTop > 0) {
        this.background = this.backgroundPrimary
      } else {
        this.background = this.backgroundSecondary
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
  position: fixed;
  top: 0;
  width: 100%;
  display: flex !important;
  justify-content: space-between;
  z-index: 1000;
}
</style>
