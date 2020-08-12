<template>
    <div>
        <h1>{{ post.fields.title }}</h1>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: `${this.$store.state.title} | ${this.post.fields.title}`,
        }
    },
    data() {
        return {
            slug: this.$route.params.slug,
        }
    },
    computed: {
        post() {
            return this.$store.state.posts.find(post => post.fields.slug === this.slug);
        }
    }
}
</script>