import React, { useState } from "react"
import { graphql } from "gatsby"
import Hero from "../components/Home/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchForm from "../components/Projects/SearchForm"

const Projects = ({ data: { wpPage } }) => {
  const [searchTerm, setSearchTerm] = useState("")
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
        title={wpPage.title}
        heroFields={wpPage.innerPagesHeroFields}
      />
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
        bannerContent
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

export default Projects
