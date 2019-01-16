module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  // proxy: {
  //   prefix: "/api",
  //   url: "http://dev-mysite.com",
  // },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: 'http://localhost:1337',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          'post',
          'user'
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
   
      // options: {
      //   apiURL: `http://localhost:1337`,
      //   contentTypes: [`article`, `user`],
      //   // Possibility to login with a strapi user, when content types are not publically available (optional).
      //   loginData: {
      //     identifier: "",
      //     password: "",
      //   },
      // },
    
  ]
}
