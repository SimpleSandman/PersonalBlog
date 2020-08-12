<template>
    
    <div class="container">

        <h1>Hey, I Wrote These!</h1>

        <template v-for="post in posts">

            <div :key="post.sys.id">

                <h2>
                    <nuxt-link :to="`/blog/${post.fields.slug}`">{{ post.fields.title }}</nuxt-link>
                </h2>

                <p v-html="post.fields.description"></p>

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
    }
}
</script>