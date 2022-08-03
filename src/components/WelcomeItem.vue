<template>
  <div class="column is-one-third">
    <div class="card">


      <div class="card-content">
        <slot class="subtitle" name="heading"></slot>
        <h1 class="title mr-4">
          <slot name="dieselPrice"></slot> <sup>PLN</sup>
        </h1>
        <span class="tag is-black">Diesel</span>
      </div>

    </div>
  </div>
</template>

<style>

</style>
