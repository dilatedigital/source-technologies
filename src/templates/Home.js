import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Home/Hero"
import HomeAbout from "../components/Home/HomeAbout"
import HomeDivision from "../components/Home/HomeDivision"
import HomeProjects from "../components/Home/HomeProjects"
import HomeSource from "../components/Home/HomeSource"

const Home = ({
  data: { wpPage },
  data: { allWpDivision },
  data: { allWpProject },
}) => {
  //console.log(wpPage)
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
      <HomeProjects
        title={wpPage.homeFields.projectsTitle}
        showSlider={wpPage.homeFields.showProjectSlider}
        slider={allWpProject}
      />
      <HomeSource
        title={wpPage.homeFields.sourceTechTitle}
        content={wpPage.homeFields.sourceTechContent}
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
                ...GatsbyImageSharpFluid_withWebp
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
        showProjectSlider
        projectsTitle
        sourceTechContent
        sourceTechTitle
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
    allWpProject {
      nodes {
        featuredImage {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        title
        excerpt
        id
      }
    }
  }
`

export default Home
