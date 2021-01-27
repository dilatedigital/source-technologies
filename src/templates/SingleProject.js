import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Home/Hero"

const SingleProject = ({
  data: {
    wpProject: { title, content },
  },
  data: { wpProject },
}) => {
  const heroImage = wpProject.featuredImage
  return (
    <Layout>
      <SEO
        title={wpProject.seo.title}
        description={wpProject.seo.metaDesc}
        image={
          wpProject.seo.opengraphImage
            ? wpProject.seo.opengraphImage.localFile.publicURL
            : null
        }
      />
      <Hero title={title} home={true} project={true} heroFields={heroImage} />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="sb-content container-sm px-4 py-14 xl:py-130px"
      />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpProject(id: { eq: $id }) {
      title
      content
      seo {
        title
        metaDesc
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`

export default SingleProject
