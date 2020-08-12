import client from '~/plugins/contentful';

export const state = () => ({
    posts: null,
    title: process.env.SITE_NAME,
});

export const mutations = {
    updatePosts: (state, posts) => {
        state.posts = posts;
    },
};

export const actions = {
    async getPosts({ commit }) {
        try {
            if ( !client ) return;
            const response = await client.getEntries({
                content_type: 'blogPost',
            });
            if ( response.items.length > 0 ) commit('updatePosts', response.items);
        } catch ( error ) {
            console.log(`getPosts Error: ${error.message}`);
        }
    },
}