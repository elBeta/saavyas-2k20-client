module.exports = {
  siteMetadata: {
    title: `Saavyas '20`,
    description: `Coming Soon...`,
    author: `@elBeta`,
    menuMainLinks: [
      {
        name: `Home`,
        link: `/main-page/#home`,
      },
      {
        name: `About Us`,
        link: `/main-page/#about-us`,
      },
      {
        name: `Events`,
        link: `/main-page/#events`,
      },
      {
        name: `Contact Us`,
        link: `/main-page/#contact-us`,
      },
    ],
    menuOtherLinks: [
      {
        name: `Meet the Team`,
        link: `/meet-the-team`,
      },
      {
        name: `Registration`,
        link: `/registration`,
      },
      {
        name: `Campus Ambassador`,
        link: `/campusambassador`,
      },
      {
        name: `Gallery`,
        link: `/gallery`,
      },
      {
        name: `Sponsors`,
        link: `/sponsors`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Saavyas '20`,
        short_name: `Saavyas`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#01bcf2`,
        display: `standalone`,
        icon: `src/assets/images/saavyas_logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`900`],
            subsets: [`latin`],
          },
          {
            family: `Barlow Semi Condensed`,
            variants: [`900`],
            subsets: [`latin`],
            // text: [`CAMPUS AMBASSADOR PROGRAM`],
          },
          {
            family: `Lobster`,
            variants: [`400`],
            subsets: [`latin`],
            text: `Be the of`,
          },
          {
            family: `Bree Serif`,
            variants: [`400`],
            subsets: [`latin`],
            text: `FACE`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
