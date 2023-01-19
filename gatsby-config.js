module.exports = {
  siteMetadata: {
    title: `Studio By and Large`,
    description: `Studio By and Large is an independent, multidisciplinary design and digital studio.`,
    author: `@gatsbyjs`,
    image: `src/images/share-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-react-router-scroll`,
    `react-pose`,
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatting: {
          format: `YYYY/MM/DD HH:mm:ss`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffca41`,
        theme_color: `#ffca41`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom:{
          families: ["UntitledSans-Regular", "UntitledSans-Light"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
          options: {
              layout: require.resolve(`./src/components/layout.js`)
              
            }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
  ],
}
