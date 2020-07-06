import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"

import Img from "gatsby-image"
// import ExampleImg from "../images/examplemodelrun.png"


class Image extends React.Component {
  render() {
    const data = this.props.data

    // debugging
    console.log(this.props)

    return (
      <Layout>
        <Img fixed={data.file.childImageSharp.fixed}/>
      </Layout>
    )
  }
}


export default Image


export const pageQuery = graphql`
    query {
      file(relativePath: { eq: "examplemodelrun.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `

// original dimensions: (width: 2721, height: 1840)