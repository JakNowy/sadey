<template>
    <section>
        <slot name="title"></slot>
        <slot name="subtitle"></slot>
        <slot name="video"></slot>
<!--        <video autoplay loop muted playsinline src="images/Banner.mp4"></video>-->
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
        background: blue;
    }
</style>
