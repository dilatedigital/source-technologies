import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Home/Hero"
import HomeAbout from "../components/Home/HomeAbout"

const Home = ({ data: { wpPage } }) => {
  console.log(wpPage)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero home={true} heroFields={wpPage.homeFields} />
      <HomeAbout
        showLearnMoreButon={wpPage.homeFields.showLearnMoreButon}
        aboutUsContent={wpPage.homeFields.aboutUsContent}
        aboutUsTitle={wpPage.homeFields.aboutUsTitle}
        learnMoreButtonText={wpPage.homeFields.learnMoreButtonText}
      />
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
      homeFields {
        heroText
        suptitle
        title
        heroImage {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        showLearnMoreButton
        learnMoreButtonText
        aboutUsTitle
        aboutUsContent
      }
    }
  }
`

export default Home
