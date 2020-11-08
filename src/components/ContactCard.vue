<template>
  <div class="col-3-md q-pa-md">
    <p>
      <strong>{{header}}</strong>
    </p>

    <p v-for="line in lines">
      {{ line }}
    </p>
  </div>
</template>

<script>
    export default {
      props: {
        header: String,
        lines: Array,
      }

    }
</script>

<style>


</style>
