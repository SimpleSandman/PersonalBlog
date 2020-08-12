<template>
    <div class="main-nav">

        <label for="hamburg" class="mobile-only hamburg">
            <span></span>
            <span></span>
            <span></span>
        </label>

        <img class="big-ass-head" src="/images/Le-Beard-3D.png" alt="My big ass head." />
      
        <input type="checkbox" @click.prevent id="hamburg">

        <div class="nav-links">

            <nuxt-link to="/">Home</nuxt-link>

            <nuxt-link to="/blog">Blog</nuxt-link>

            <nuxt-link to="/resume">Resume</nuxt-link>

        </div> <!-- !.row -->

    </div>
</template>

<style lang="scss" scoped>
    @import '~/scss/_mixins';
    @import '~/scss/_variables';
    .main-nav {
        display: flex;
        align-items: center;
        max-width: 1440px;
        margin: 0 auto;
        padding: $gutter $gutter 0;
        #hamburg {
            display: none;
        }
        .nav-links {
            display: flex;
            flex-direction: column;
            order: 2;
            // This pushes the content to the right
            margin-left: auto;
            text-align: right;
            a {
                padding: $gutter/3 $gutter;
                text-decoration: none;
                &:visited {
                    color: $rust;
                }
            }
        }
        .big-ass-head {
            width: 90px;
            order: 1;
        }
        @include media-screen(700px) {
            flex-wrap: wrap;
            max-width: 100%;
            padding: $gutter 0;
            .big-ass-head {
                margin-left: $gutter;
            }
            .hamburg {
                display: flex;
                flex-direction: column;
                order: 2;
                width: 50px;
                height: 50px;
                margin-left: auto;
                margin-right: $gutter;
                span {
                    display: block;
                    width: 100%;
                    height: 5px;
                    margin-bottom: 8px;
                    background-color: #333;
                }
            }
            #hamburg:checked {
                & ~ .nav-links {
                    max-height: 175px;
                }
            }
            .nav-links {
                order: 3;
                width: 100%;
                max-height: 0px;
                margin-top: $gutter/3;
                overflow: hidden;
                font-size: 1.25em;
                text-align: center;
                transition: max-height 0.25s ease-out;
                background: darken(#f2f2f2, 10%);
            }
        }
    }
</style>