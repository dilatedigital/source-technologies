require("dotenv").config({
  path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Source Technologies AU`,
    description: `Gatsby powered site for Source Technologies`,
    author: `Dilate Digital - Jejomar Dorongon`,
    image: "/default_img.jpg",
    siteUrl: `https://sourcetechnologies.com.au/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-G18PEBW8EK", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
        },
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        url: process.env.GATSBY_WPGRAPHQL_URL,
        verbose: true,
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: process.env.GATSBY_WPGRAPHQL_URL,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Source Technologies AU`,
        short_name: `SourceTechAU`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#B2D234`,
        display: `standalone`,
        icon: `src/images/logo_icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-anchor-links`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: ["https://fonts.gstatic.com"],

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */

        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["Poppins", "Questrial"],
            /* URL to the font CSS file with @font-face definition */
            file:
              "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Questrial",
          },
        ],
      },
    },
  ],
}
