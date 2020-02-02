module.exports = {
  siteMetadata: {
    title: `if // sf`,
    description: `if-design // speculative fabulation`,
    author: `if-design`,
    siteUrl: `https://www.if-designs.com`,
    keywords: [`keywords`],
    social: {
      twitter: `@twitter_handle`
    },
    socialLinks: {
      twitter: `https://twitter.com/twitter_handle`,
      linkedin: `https://linkedin.com/twitter_handle`,
      facebook: `https://facebook.com/twitter_handle`
    },
    organization: {
      name: `name`,
      url: `github.com`
    },
    icon: `src/images/sf.png`,
    defaultImage: `src/images/sf.png`,
    menu: [{ label: 'home', to: '/' }]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `if - sf`,
        short_name: `sf`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/sf.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
