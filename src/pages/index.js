import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="font-pop">Hi people</h1>
    <p className="text-small">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="container flex mx-auto mt-8 bg-gray-500 text-indigo">
      test
    </div>
  </Layout>
)

export default IndexPage
