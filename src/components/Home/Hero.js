import React from "react"
import PropTypes from "prop-types"
//import GatsbyImage from "gatsby-image"
import HeroWave from "../../assets/herowave.svg"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const query = graphql`
  query {
    heroImage: file(relativePath: { eq: "inner_banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          quality: 90
        )
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

  let bannerImage

  //console.log(heroFields)

  if (!heroFields.heroImage && !project) {
    bannerImage = getImage(heroImage)
  } else if (typeof heroFields.heroImage == "undefined") {
    bannerImage = getImage(heroFields.node.localFile)
  } else {
    bannerImage = getImage(heroFields.heroImage.localFile)
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

      <div className={`heroImage lg:max-w-full`}>
        <GatsbyImage
          image={bannerImage}
          alt="Source Technologies Au"
          className={`${project ? "opacity-40" : ""}`}
        />
      </div>

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
