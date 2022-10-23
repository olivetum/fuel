<script setup>
// Vue Imports
import {onMounted, ref} from "vue"

// Firebase imports
import {collection, getDocs} from 'firebase/firestore'
import {db} from "../firebase";

// Components imports
import WelcomeItem from './WelcomeItem.vue'

//
// CODE:

const stations = ref([
]);

onMounted(async () => {
  const query = await getDocs(collection(db, 'stations'));
  query.forEach((doc) => {
    const station = {
      id: doc.id,
      name: doc.data().name,
      diesel: doc.data().diesel,
      dieselPlus: doc.data().dieselPlus,
      petrol: doc.data().petrol,
      petrolPlus: doc.data().petrolPlus
    }
    stations.value.push(station)
  });
});


</script>

<template>

  <div class="columns is-flex-wrap-wrap">
    <WelcomeItem v-for="station in stations">

      <template #heading> {{ station.name}} </template>
      <template #diesel> {{station.diesel}} </template>
      <template #dieselPlus> {{station.dieselPlus}} </template>
      <template #petrol> {{station.petrol}} </template>
      <template #petrolPlus> {{station.petrolPlus}} </template>

    </WelcomeItem>

  </div>

</template>

