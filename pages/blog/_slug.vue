<template>

    <div>

        <template v-if="post.fields.heroImage.fields">
            <div class="blog-hero" :style="`background-image: url(${post.fields.heroImage.fields.file.url})`">
                <div class="hero-text-container">
                    <div class="container">
                        <h1>{{ post.fields.title }}</h1>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <h1>{{ post.fields.title }}</h1>
        </template>
        
        <div class="container">
            <article v-html="$md.render(post.fields.body)"></article>
        </div>

    </div>

</template>

<style lang="scss" scoped>
    @import '~/scss/_variables';
    .container {
        margin-top: $gutter * 1.25;
    }
    .blog-hero {
        display: flex;
        min-height: 450px;
        background-position: center center;
        background-size: cover;
        .hero-text-container {
            width: 100%;
            align-self: flex-end;
            margin-bottom: 0;
            padding: $gutter / 7 $gutter;
            color: #f2f2f2;
            background: rgba(0, 0, 0, 0.6);
        }
    }
</style>

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