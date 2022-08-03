<script setup>
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <div class="content">
    <WelcomeItem>

      <template #heading>LOTOS</template>
      <template #distance> (4km) </template>
      <template #address>Wojska Polskiego 123</template>

      <template #dieselPrice>7,45 PLN</template>

    </WelcomeItem>


  </div>


</template>
