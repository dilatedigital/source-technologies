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

const Hero = ({ home, heroFields, title }) => {
  const { heroImage } = useStaticQuery(query)

  return (
    <section
      className={`hero-section relative h-80 ${
        home ? "xl:h-hero" : "xl:h-inner-hero"
      } flex items-center`}
    >
      <div
        className={`relative z-10 px-4 ${
          home ? "container-lg  xl:h-hero-content" : "xl:h-auto container-inner"
        }`}
      >
        {heroFields.suptitle && (
          <h4 className="font-quest text-md relative xl:-top-50px green-line">
            {heroFields.suptitle}
          </h4>
        )}

        <h1
          dangerouslySetInnerHTML={{
            __html: heroFields.title ? heroFields.title : title,
          }}
          className={`text-4xl mb-2 mt-2 xl:text-hero-h1 font-medium ${
            home ? "xl:mb-35px xl:-mt-15px" : "xl:mb-0 xl:-mt-85px"
          } `}
        />
        {heroFields.heroText && (
          <div
            dangerouslySetInnerHTML={{ __html: heroFields.heroText }}
            className="text-md max-w-600px"
          />
        )}
      </div>

      <GatsbyImage
        fluid={
          heroFields.heroImage !== null
            ? heroFields.heroImage.localFile.childImageSharp.fluid
            : heroImage.childImageSharp.fluid
        }
        className="heroImage"
      />
      <HeroWave className="absolute bottom-0" />
    </section>
  )
}

Hero.propTypes = {
  home: PropTypes.bool.isRequired,
  heroFields: PropTypes.object,
  title: PropTypes.string,
}

export default Hero
