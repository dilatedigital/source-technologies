import React from "react"
import PropTypes from "prop-types"
import GatsbyImage from "gatsby-image"
import HeroWave from "../../assets/herowave.svg"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "inner_banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = ({ home, heroFields, title, project }) => {
  //fallback banner if there's no supplied hero image
  const { heroImage } = useStaticQuery(query)

  //hero content
  let heroText = heroFields?.heroText
    ? heroFields.heroText
    : heroFields?.bannerContent
  if (project) {
    heroText = ""
  }

  //hero title
  const bannerTitle = title ? title : heroFields.title

  //console.log(heroFields.heroImage)

  let bannerImage

  //console.log(heroFields)

  if (!heroFields.heroImage && !project) {
    bannerImage = heroImage.childImageSharp.fluid
  } else if (typeof heroFields.heroImage == "undefined") {
    bannerImage = heroFields.node.localFile.childImageSharp.fluid
  } else {
    bannerImage = heroFields.heroImage.localFile.childImageSharp.fluid
  }

  return (
    <section
      className={`hero-section relative h-80 ${
        home ? "md:h-inner-hero xl:h-hero" : "md:h-inner-hero"
      } flex items-center`}
    >
      <div
        className={`relative z-10 px-4 ${
          home && !project ? "xl:h-hero-content" : "xl:h-auto"
        } ${!home && !project ? "container-inner" : "container-lg"}`}
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-delay="5"
      >
        {heroFields?.suptitle && (
          <h4 className="font-quest text-md relative xl:-top-50px green-line">
            {heroFields.suptitle}
          </h4>
        )}

        <h1
          dangerouslySetInnerHTML={{
            __html: bannerTitle,
          }}
          className={`text-4xl mb-2 mt-2 xl:text-hero-h1 font-medium ${
            home ? "xl:mb-35px xl:-mt-15px" : "xl:mb-0 xl:-mt-85px"
          } ${project ? "max-w-685px" : ""} `}
        />
        {heroText && (
          <div
            dangerouslySetInnerHTML={{ __html: heroText }}
            className={`text-md ${home ? "max-w-600px" : "max-w-400px mt-4"} `}
          />
        )}
      </div>

      <GatsbyImage
        fluid={bannerImage}
        className={`heroImage ${project ? "opacity-40" : ""}`}
      />
      <HeroWave className="absolute bottom-0" />
    </section>
  )
}

Hero.propTypes = {
  home: PropTypes.bool.isRequired,
  heroFields: PropTypes.object,
  title: PropTypes.string,
  project: PropTypes.bool,
}

export default Hero
