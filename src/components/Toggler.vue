<template>
    <transition mode="out-in">
        <p :key="counter"> {{ headers[counter] }}</p>
    </transition>
</template>

<script>
    export default {
        props: {
            headers: {
                type: Array,
                required: true,
            },
            interval: {
                type: Number,
                required: false,
                default: 4500,
            },
            delay: {
                type: Number,
                default: 500,
                required: false,
            },
            name: {
                type: String,
                required: false,
            },
        },
        data () {
            return {
                counter: -1,
            }
        },
        mounted() {
            setTimeout(() => {
                this.nextText()
                setInterval(this.nextText, this.interval)
            }, this.delay)
        },
        methods: {
            nextText () {
                if (this.counter === this.headers.length - 1) {
                    this.counter = 0
                } else {
                    this.counter++
                }
            },
        },
    }
</script>

<style>
    .v-enter, .v-leave-to {
      opacity: 0;
      /*transform: translateX(20px);*/
    }

    .v-enter-active, .v-leave-active {
      transition: all 1s;
    }

</style>
