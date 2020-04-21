module.exports = {
  siteMetadata: {
    title: `if`,
    description: `if-design // portfolio`,
    author: `alex christie`,
    siteUrl: `https://www.inadequatefutures.com`,
    keywords: [`development`, `software engineer`, `alex christie`, `react`],
    social: {
      twitter: `@inadeqt_futurs`
    },
    socialLinks: {
      twitter: `https://twitter.com/inadeqt_futurs`,
      linkedin: `https://www.linkedin.com/in/alex-christie-520b7a98/`,
      facebook: null
    },
    organization: {
      name: `name`,
      url: `github.com`
    },
    icon: `src/images/sf.png`,
    defaultImage: `src/images/sf.png`,
    menu: [
      { label: 'blog', to: '/blog' },
      { label: 'work', to: '/portfolio' },
      { label: 'about', to: '/about' }
    ]
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!--more-->`,
        plugins: ['gatsby-remark-prismjs']
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `if`,
        short_name: `if`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `content/images/icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ]
};
