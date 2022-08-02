<template>
  <section class="block">
    <div class="card">

      <header class="card-header">
        <p class="card-header-title">
          <slot name="heading"></slot>
        </p>

        <button class="card-header-icon" aria-label="more options">

        </button>
      </header>
      <div class="card-content">
        <div class="content columns">
          <div class="column">
            <h5>Diesel</h5>
            <h3>7,24</h3>
          </div>
          <div class="column">
            <h5>98</h5>
            <h3>6,72</h3>
          </div>
          <div class="column">
            <h5>95</h5>
            <h3>6,51</h3>
          </div>
          <br>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </section>
</template>

<style scoped>

</style>
