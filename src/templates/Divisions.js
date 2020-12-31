import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/Home/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Divisions = ({
  data: {
    wpPage: { title },
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
      <Hero
        home={false}
        title={title}
        heroFields={wpPage.innerPagesHeroFields}
      />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      seo {
        metaDesc
        title
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      innerPagesHeroFields {
        heroImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Divisions
