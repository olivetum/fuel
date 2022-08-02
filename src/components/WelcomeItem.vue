<template>
  <section class="block">
    <div class="card">

      <header class="card-header is-flex">
        <p class="card-header-title">
          <slot name="heading"></slot>
        </p>
        <p class="card-header-title">
          <slot name="heading"></slot>
        </p>

      </header>
      <div class="card-content">
        <div class="content columns">
          <div class="column">
            <h1 class="title">7,23</h1>
            <span class="tag is-black">Diesel</span>
          </div>
          <div class="column">
            <h1 class="title">8,23</h1>
            <span class="tag is-dark">Diesel+</span>
          </div>
          <div class="column">
            <h1 class="title">6,91</h1>
            <span class="tag is-primary">98</span>
          </div>
          <div class="column">
            <h1 class="title">6,91</h1>
            <span class="tag is-info">98</span>
          </div>
          <div class="column">
            <h1 class="title">6,91</h1>
            <span class="tag">LPG</span>
          </div>
          <br>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </section>
</template>

<style scoped>

</style>
