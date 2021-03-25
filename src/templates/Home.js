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
      <SEO
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        image={
          wpPage.seo.opengraphImage
            ? wpPage.seo.opengraphImage.localFile.publicURL
            : null
        }
      />
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
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      homeFields {
        heroText
        suptitle
        title
        heroImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                quality: 100
              )
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
    allWpDivision(
      sort: { order: DESC, fields: date }
      filter: { divisionFields: { showInHomePage: { eq: true } } }
    ) {
      nodes {
        title
        divisionFields {
          iconSvg
          color
        }
        id
        slug
      }
    }
    allWpProject(limit: 4) {
      nodes {
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  quality: 100
                )
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
