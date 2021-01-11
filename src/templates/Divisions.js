import { graphql } from "gatsby"
import React from "react"
import EachDivision from "../components/Divisions/EachDivision"
import Hero from "../components/Home/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Divisions = ({
  data: {
    wpPage: { title },
  },
  data: { wpPage },
  data: { allWpDivision },
}) => {
  //console.log(allWpDivision)
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
      <div className="container-lg px-4 pt-14 pb-4">
        <EachDivision nodes={allWpDivision} />
      </div>
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    allWpDivision(sort: { order: DESC, fields: date }) {
      nodes {
        title
        id
        content
        slug
        divisionFields {
          buttonText
          buttonUrl
          color
          iconSvg
          showButton
          images {
            imageTitle
            image {
              id
              localFile {
                childImageSharp {
                  fluid(maxWidth: 390, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Divisions
