import React from "react"
import HeroWave from "../../assets/herowave.svg"
import PropTypes from "prop-types"

const HomeSource = ({ title, content }) => {
  return (
    <section className="bg-gradient-to-b source-tech-section from-light-grey to-white relative py-28 lg:pt-270px lg:pb-210px">
      <HeroWave className="absolute top-0 z-20 transform rotate-180" />
      <div
        className="text-center container-sm px-4"
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-delay="5"
      >
        <h2 className="green-line green-line-center st-h2 st-h2-mb-15">
          {title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  )
}

HomeSource.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default HomeSource
