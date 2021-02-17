import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicy = ({
  data: {
    wpPage: { title, content },
  },
  data: { wpPage },
}) => {
  return (
    <Layout>
      <SEO
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        image={
          wpPage.seo.opengraphImage
            ? wpPage.seo.opengraphImage.localFile.publicURL
            : null
        }
      />
      <div className="container-inner px-4 py-14 xl:pt-220px xl:pb-130px">
        <h1 className="text-4xl xl:text-hero-h1 pb-10">{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="max-w-1120px privacy-content"
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      seo {
        metaDesc
        title
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

export default PrivacyPolicy
