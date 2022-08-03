<template>
    <div class="card block">

      <header class="card-header is-flex is-justify-content-space-between">
        <p class="card-header-title is-flex-grow-0 mb-0">
          <slot name="heading"></slot>
          <slot name="distance"></slot>
        </p>
        <p class="card-header-title is-flex-grow-0">
          <slot name="address"></slot>
        </p>


      </header>
      <div class="card-content">

        <div class="content">
          <div class="is-flex">
            <h1 class="title mr-4">
              <slot name="dieselPrice"></slot>
            </h1>
            <span class="tag is-large is-black">Diesel</span>
          </div>

          <div class="field is-grouped is-grouped-multiline">

            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-medium is-dark">Diesel+</span>
                <span class="tag is-medium is-light">8,42</span>
              </div>
            </div>

            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-medium is-info">98</span>
                <span class="tag is-medium is-light">7,42</span>
              </div>
            </div>

            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-medium is-primary">95</span>
                <span class="tag is-medium is-light">7,42</span>
              </div>
            </div>

            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-medium is-success">LPG</span>
                <span class="tag is-medium is-light">7,42</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Navigate</a>
      </footer>
    </div>
</template>

<style scoped>

</style>
