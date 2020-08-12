<template>
    <div class="main-nav">

    <img src="/images/Le-Beard-3D.png" />
      
      <label for="hamburg" class="mobile-only hamburg">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <input type="checkbox" @click.prevent id="hamburg">

      <div class="nav-row row">

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

    </div>
</template>

<style lang="scss" scoped>
    @import '~/scss/_mixins';
    @import '~/scss/_variables';
    .main-nav {
        padding-top: $gutter;
        #hamburg {
            display: none;
        }
        @include media-screen(700px);
    }
</style>