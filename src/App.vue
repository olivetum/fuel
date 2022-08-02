<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <div class="container">
    <NavigationBar/>

    <div class="columns">
      <div class="column">
        <HelloWorld msg="Fuel"/>
      </div>
      <div class="column">
        <RouterView/>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
