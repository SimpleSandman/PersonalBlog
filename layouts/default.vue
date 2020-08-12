<template>

  <div>

    <div class="main-nav container">
      
      <label for="hamburg" class="mobile-only hamburg">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <input type="checkbox" @click.prevent="" id="hamburg">

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

    </div> <!-- !.container -->

    <Nuxt />

  </div>

</template>

<style lang="scss" scoped>
  @import '~/scss/_mixins';
  .main-nav {
    padding-top: 1.25rem;    
    #hamburg {
      display: none;
    }
    @include media-screen(700px) {
      .nav-row {
        display: none;
      }
      .hamburg {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 25px;
        span {
          display: block;
          width: 25px;
          height: 3px;
          margin-bottom: 2px;
          background-color: #333;
        }
      }
      #hamburg:checked ~ .nav-row {
        display: block;
      }
    }
  }
</style>

<script>
export default {
  
}
</script>