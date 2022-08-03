<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>

  <div class="columns is-flex-wrap-wrap">
    <WelcomeItem v-for="station in stations">

      <template #heading> {{ station.name }} </template>
      <template #dieselPrice> {{ station.on }} </template>

    </WelcomeItem>

  </div>

</template>

<script>
import {getStations, db} from "../firebase";

export default {
  data() {
    return {
      stations: getStations(db).then(data => data)

    }
  }
}

export const stations = await getStations(db)
console.log(stations)


</script>