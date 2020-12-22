import React from "react"
import PropTypes from "prop-types"

const HomeAbout = ({
  aboutUsTitle,
  aboutUsContent,
  showLearnMoreButon,
  learnMoreButtonText,
}) => {
  return (
    <section className="container-md px-4">
      <div className="text-center max-w-750px mx-auto">
        <h2 className="green-line green-line-center relative text-3xl font-semibold xl:text-h2">
          {aboutUsTitle}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: aboutUsContent }}
          className="text-md"
        />
      </div>
    </section>
  )
}

HomeAbout.propTypes = {
  aboutUsContent: PropTypes.string.isRequired,
  aboutUsTitle: PropTypes.string.isRequired,
  showLearnMoreButon: PropTypes.bool.isRequired,
  learnMoreButtonText: PropTypes.string,
}

export default HomeAbout
