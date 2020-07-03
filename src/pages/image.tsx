import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

import Img from "gatsby-image"
// import ExampleImg from "../images/examplemodelrun.png"


class Image extends React.Component {
  render() {
    const data = this.props.data
    const images = data.allImageSharp.edges

    return (
      <Layout>
        <ul>
          {images.map(image => (
              <img
                src={image.node.resize.src}
                alt={image.node.resize.originalName}
              />
          ))}
        </ul>
      </Layout>
    )
  }
}


export default Image


export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 125, height: 125, rotate: 180) {
              src
            }
          }
        }
      }
    }
    fluidImages: file(
      relativePath: { regex: "/examplemodelrun.png/" }
    ) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#f00e2e", shadow: "#192550" }
          traceSVG: {
            color: "#f00e2e"
            turnPolicy: TURNPOLICY_MINORITY
            blackOnWhite: false
          }
          toFormat: PNG
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`