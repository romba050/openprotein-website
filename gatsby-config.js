// import React from "react"
// import { graphl } from "gatsby"
// import Img from "gatsby-image"

module.exports = {
  siteMetadata: {
    title: `OpenProtein`,
    description: `OpenProtein is a new machine learning framework for modeling tertiary protein structure. Built on top of PyTorch, NGL Viewer and ProteinNet, it offers automatic differentiation, visualisation, built-in data sets and much more.`,
    author: `@biolib`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/biolib-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-sass'],
}

// export default (props) => (
//   <div>
//     <h1>Hello gatsby-image</h1>
//     {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
//     <Img fluid={data.file.childImageSharp.fluid} />
//   </div>
// )

// export const query = graphql`
//   query {
//       file(relativePath: { eq: "/src/images/examplemodelrun.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         # fixed(width: 125, height: 125) {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
