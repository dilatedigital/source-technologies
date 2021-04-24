import React from "react"
import PropTypes from "prop-types"
//import GatsbyImage from "gatsby-image"
import HeroWave from "../../assets/herowave.svg"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import AnimatedSVGSlider from "./AnimatedSVGSlider"

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

const HomeHero = ({ heroFields }) => {
  //fallback banner if there's no supplied hero image
  const { heroImage } = useStaticQuery(query)

  const heroText = heroFields.heroText

  //hero title
  const bannerTitle = heroFields.title

  const bannerImage = getImage(heroFields.heroImage.localFile)

  return (
    <section
      className={`hero-section relative h-hero-mobile md:h-inner-hero xl:h-hero flex items-center`}
    >
      <div
        className={`relative z-10 px-4 xl:h-single-feature home-flex container-lg`}
      >
        <div className="hero-home-text">
          {heroFields?.suptitle && (
            <h4 className="font-quest text-md relative xl:-top-50px green-line">
              {heroFields.suptitle}
            </h4>
          )}

          <h1
            dangerouslySetInnerHTML={{
              __html: bannerTitle,
            }}
            className={`text-4xl mb-2 mt-2 xl:text-hero-h1-smaller font-medium xl:mb-35px xl:-mt-15px`}
          />
          {heroText && (
            <div
              dangerouslySetInnerHTML={{ __html: heroText }}
              className={`text-md max-w-600px text-white xl:text-ct-black`}
            />
          )}
        </div>

        <div className="hero-svg">
          <AnimatedSVGSlider />
        </div>
      </div>

      <div className={`heroImage lg:max-w-full`}>
        <GatsbyImage
          image={bannerImage}
          alt="Source Technologies Au"
          loading="eager"
        />
      </div>

      <HeroWave className="absolute bottom-0" />
    </section>
  )
}

HomeHero.propTypes = {
  heroFields: PropTypes.object,
}

export default HomeHero
