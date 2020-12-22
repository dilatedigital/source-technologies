import React from "react"
import PropTypes from "prop-types"
import GatsbyImage from "gatsby-image"
import HeroWave from "../../assets/herowave.svg"

const Hero = ({ home, heroFields }) => {
  return (
    <section
      className={`hero-section relative h-80 ${
        home ? "xl:h-hero" : "test"
      } flex items-center`}
    >
      <div className="container-lg relative z-10 px-4 xl:h-hero-content">
        <h4 className="font-quest text-md relative xl:-top-50px green-line">
          {heroFields.suptitle}
        </h4>
        <h1
          dangerouslySetInnerHTML={{ __html: heroFields.title }}
          className="text-4xl mb-2 mt-2 xl:text-hero-h1 font-medium xl:mb-35px xl:-mt-15px"
        />
        <div
          dangerouslySetInnerHTML={{ __html: heroFields.heroText }}
          className="text-md max-w-600px"
        />
      </div>

      <GatsbyImage
        fluid={heroFields.heroImage.localFile.childImageSharp.fluid}
        className="heroImage"
      />
      <HeroWave className="absolute bottom-0" />
    </section>
  )
}

Hero.propTypes = {
  home: PropTypes.bool.isRequired,
  heroFields: PropTypes.object,
}

export default Hero
