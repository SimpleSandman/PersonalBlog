<template>
<div class="container">
  
  <h1>My Cool Site</h1>

  <template v-for="post in posts">

    <div :key="post.sys.id">
      <h3>
        <nuxt-link :to="postUrl(post.fields.slug)">{{ post.fields.title }}</nuxt-link>
      </h3>
    </div>


  </template>

</div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods: {
    postUrl(slug) {
      return `/blog/${slug}`;
    }
  }
}
</script>