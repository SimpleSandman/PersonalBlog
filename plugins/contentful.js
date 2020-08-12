const contentful = require('contentful');

/*
    @TODO: Figure out what it is complaining that accessToken is not provided
    even though it still properly fetches data.
*/
module.exports = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESSTOKEN
});