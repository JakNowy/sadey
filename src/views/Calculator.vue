<template>
  <section style="margin: 0 5% 5% 5%; line-height: 28px; color: #8cca3b; height: auto" class="row justify-evenly">
    <q-card class="q-ma-xl">
       <q-date v-model="dateInput" mask="YYYY-MM-DD HH:mm:ss Z"/>
    </q-card>
  </section>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker,
  },
  data () {
    return {
      dateInput: null,
      dateTz: null,
    }
  },
  watch: {
    dateInput (newDate, oldDate) {
      console.log(newDate, newDate)
      let dateTzFrom = new Date(newDate).toString()
      let dateTzTo = new Date(newDate).toString()
      console.log(dateTzFrom)
      console.log(dateTzTo)

      // Parse in Python with:
      // dateTz = 'Wed Oct 28 2020 00:00:00 GMT+0100'
      // dateutil.parser.parse(dateTz)
    },
  },
}
</script>

<style>
  section {
    height: 60vh;
  }
</style>
