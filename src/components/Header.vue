<template>
    <header>
        <slot name="logo"></slot>
        <slot name="navbar"></slot>
    </header>
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
header {
    position: fixed;
    top: 0;
    background: none;
    width: 100%;
    display: flex !important;
    justify-content: space-between;
    z-index: 1000;
}
</style>
