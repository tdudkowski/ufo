require("dotenv").config({ path: `.env`, })

module.exports = {
    siteMetadata: {
        title: `HermaszewskiTravel`,
        titleTemplate: ``,
        author: ``,
        description: ``,
        url: "https://hermaszewskitravel.pl/",
        siteUrl: `https://hermaszewskitravel.pl/`,
        image: "", // Path to your image you placed in the 'static' folder
        twitterUsername: "",
        facebookFanpage: "",
    },
    pathPrefix: "/gatsby-hermaszewski",
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                // Remote schema query type. This is an arbitrary name.
                // typeName: "WPGraphQL",
                // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
                // fieldName: "wpcontent",
                // GraphQL endpoint, relative to your WordPress home URL.
                url: process.env.WP_API,
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `trippost`,
                path: `${__dirname}/src/content/trips`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `tripimage`,
                path: `${__dirname}/src/content/tripimages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "GA-TRACKING_ID", // Google Analytics / GA
                    "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
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
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
            },
        },
    ],
}