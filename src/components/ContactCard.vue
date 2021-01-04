<template>
  <div class="col-md-3 text-center q-pa-md">
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
