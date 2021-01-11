import React from "react"
import PropTypes from "prop-types"
import GatsbyImage from "gatsby-image"

const AfterTeamSection = ({ title, text, image }) => {
  return (
    <section className="after-team xl:flex xl:justify-between xl:items-center">
      <div className="md:text-center xl:max-w-550px xl:text-left">
        <h3 className="font-semibold text-history-title">{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div className="max-w-690px w-full mt-8 md:mx-auto xl:m-0">
        <GatsbyImage fluid={image} className="rounded-30px" />
      </div>
    </section>
  )
}

AfterTeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default AfterTeamSection
