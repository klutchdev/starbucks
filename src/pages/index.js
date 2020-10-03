import React from "react"

import Layout from "../components/layout"
import Navbar from "../components/nav"
import SEO from "../components/seo"

import "../components/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    {/* Todo: Content! */}
  </Layout>
)

export default IndexPage
