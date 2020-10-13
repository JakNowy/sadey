<template>
    <section>
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
        <slot name="buttons"></slot>
    </section>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
    }
</script>

<style>
  section {
    height: 100vh;
    background-size: cover;
  }
</style>
