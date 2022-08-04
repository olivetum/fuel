<template>
  <div class="column is-one-third">
    <div class="card">


      <div class="card-content">

        <h4 class="has-text-weight-bold has-text-grey">
          <slot name="heading"></slot> (4.3KM)
        </h4>

        <h2 class="title is-size-2 mt-3 mb-2">
          <slot name="diesel"></slot>
          <sup class="is-size-5">PLN</sup>
        </h2>

        <span class="tag is-medium is-black">Diesel</span>

        <div class="mt-4 is-flex flex">
          <div class="tag mr-1 is-danger">
            Diesel+ : <slot name=dieselPlus></slot>
          </div>
          <div class="tag mr-1 is-primary">
            Petrol : <slot name="petrol"></slot>
          </div>
          <div class="tag is-info">
            Petrol+ : <slot name="petrolPlus"></slot>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>

</style>
