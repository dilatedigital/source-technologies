import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Home/Hero"
import HomeAbout from "../components/Home/HomeAbout"
import HomeDivision from "../components/Home/HomeDivision"
import HomeProjects from "../components/Home/HomeProjects"

const Home = ({ data: { wpPage }, data: { allWpDivision } }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero home={true} heroFields={wpPage.homeFields} />

      <HomeAbout
        showLearnMoreButton={wpPage.homeFields.showLearnMoreButton}
        aboutUsContent={wpPage.homeFields.aboutUsContent}
        aboutUsTitle={wpPage.homeFields.aboutUsTitle}
        learnMoreButtonText={wpPage.homeFields.learnMoreButtonText}
        buttonLink={wpPage.homeFields.buttonLink.uri}
        showArrow={wpPage.homeFields.showArrow}
      />
      <HomeDivision nodes={allWpDivision} />
      <HomeProjects />
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
        showArrow
        aboutUsTitle
        aboutUsContent
        buttonLink {
          ... on WpPage {
            uri
          }
        }
      }
    }
    allWpDivision {
      nodes {
        title
        divisionFields {
          iconSvg
          color
        }
        id
      }
    }
  }
`

export default Home