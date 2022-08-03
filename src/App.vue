<script setup>
import {RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavigationBar from "./components/NavigationBar.vue"
</script>

<template>
  <div class="container">
    <NavigationBar/>

    <section class="section mt-0">
      <HelloWorld msg="Fuel will help you save money"/>

      <RouterView/>
    </section>
  </div>

</template>

<script>

</script>

<style scoped>

</style>
