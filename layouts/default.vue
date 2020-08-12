<template>

  <div>

    <div class="main-nav container">
      
      <div class="row">

        <div class="col-4">
          <nuxt-link to="/">Home</nuxt-link>
        </div>

        <div class="col-4">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </div>

        <div class="col-4">
          <nuxt-link to="/resume">Resume</nuxt-link>
        </div>

      </div> <!-- !.row -->

    </div> <!-- !.container -->

    <Nuxt />

  </div>

</template>

<style lang="scss" scoped>
  .main-nav {
    padding-top: 1.25rem;
  }
</style>