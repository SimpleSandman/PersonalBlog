<template>

  <div>

    <site-nav />

    <Nuxt />

  </div>

</template>

<script>
import SiteNav from '~/components/nav/SiteNavigation.vue';
export default {
  components: {
    'site-nav': SiteNav,
  }
}
</script>