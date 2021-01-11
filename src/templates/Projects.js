import React, { useState, useMemo } from "react"
import { graphql } from "gatsby"
import Hero from "../components/Home/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchForm from "../components/Projects/SearchForm"
import { ApolloProvider } from "@apollo/client"
import { client } from "../services/apollo"
import ProjectList from "../components/Projects/ProjectList"
import { debounce } from "lodash"

const Projects = ({ data: { wpPage } }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("")

  const setDebouncedSearchTermMemoized = useMemo(
    () => debounce(setDebouncedSearchTerm, 300),
    []
  )

  function handleSearchTermChange(newSearchTerm) {
    setSearchTerm(newSearchTerm)
    setDebouncedSearchTermMemoized(newSearchTerm)
  }

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
      <ApolloProvider client={client}>
        <SearchForm
          searchTerm={searchTerm}
          handleSearchTermChange={handleSearchTermChange}
        />
        <ProjectList searchTerm={debouncedSearchTerm} />
      </ApolloProvider>
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default Projects
