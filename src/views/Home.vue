<template>
  <div class="q-ma-lg">
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderToggler from '@/components/HeaderToggler'

export default {
  name: 'Home',
  components: {
    HeaderToggler
  }
}
</script>

<style>
  .home {
    background-image: url("../assets/studio.jpg");
	background: no-repeat center center fixed;
	background-size: cover;
  }
</style>