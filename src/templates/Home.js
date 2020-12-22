import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Home = ({ data: { wpPage } }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{wpPage.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      uri
      title
      seo {
        metaDesc
        title
      }
    }
  }
`

export default Home
