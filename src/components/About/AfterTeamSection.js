import React from "react"
import PropTypes from "prop-types"
import GatsbyImage from "gatsby-image"

const AfterTeamSection = ({ title, text, image, reverse }) => {
  return (
    <section
      className={`after-team lg:flex lg:justify-between lg:items-center`}
    >
      <div
        className={`md:text-center lg:max-w-550px lg:w-full lg:text-left ${
          reverse ? "order-2" : "lg:mr-8 xl:mr-0"
        }`}
      >
        <h3 className="font-semibold text-history-title">{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <div
        className={`max-w-690px w-full mt-8 md:mx-auto lg:m-0 ${
          reverse ? "order-1 lg:mr-8 xl:mr-0" : " lg:mr-0"
        }`}
      >
        <GatsbyImage fluid={image} className="rounded-30px" />
      </div>
    </section>
  )
}

AfterTeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
}

export default AfterTeamSection
