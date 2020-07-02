import React from "react"
import {Link, PageProps} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

type DataProps = {
    site: {
      buildTime: string
    }
  }
  
  const EarlyAccess: React.FC<PageProps<DataProps>> = ({ data, path }) => (
    <Layout>
        <section className="hero">

        </section>
        <h4> Subscribe to our mailing list </h4>
        <p> Please select all the ways you would like to hear from OpenProtein: </p>
        <p> email address </p>
        <hr/>
        <input 
        id="email"
        />
        <p></p>

        <h4> Marketing permissions </h4>

        You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.
        <p></p>
        <button> Subscribe </button>
    </Layout>
)

export default EarlyAccess
