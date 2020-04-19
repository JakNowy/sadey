<template>
    <header style="padding: 50px">
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
    height: 30px;
    background: none;
    width: 100%;
    display: flex !important;
    justify-content: space-between;
    opacity: 0.5;
}
</style>
