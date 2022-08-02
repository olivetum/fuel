<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="content">
    <h1 class="green">{{ msg }}</h1>
    <p>
      You’ve successfully created a project with
      Vite & Vue3
    </p>
  </div>
</template>

<style scoped>

</style>
