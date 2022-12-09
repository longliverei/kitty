/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require('path');

module.exports = {
  siteMetadata: {
    title: `A lot of Kittens! ~`,
    siteUrl: `https://kitty-gamma.vercel.app/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
