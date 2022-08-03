<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <div class="container is-max-desktop">
    <NavigationBar/>

        <HelloWorld msg="Fuel"/>
        <RouterView/>
  </div>


</template>

<style scoped>

</style>
