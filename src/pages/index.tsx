import React from "react"
import {Link, PageProps} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps> = ({ data, path }) => (
    <Layout>
        <SEO title="Using TypeScript" />
        <h1>Next Generation Protein Simulation</h1>
        <p>Some text goes here.</p>
        <Link to="/page-2/">Some link</Link>
    </Layout>
)


export default IndexPage
