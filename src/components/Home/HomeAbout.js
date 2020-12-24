import React from "react"
import PropTypes from "prop-types"
import Button from "../Button"

const HomeAbout = ({
  aboutUsTitle,
  aboutUsContent,
  showLearnMoreButton,
  learnMoreButtonText,
  buttonLink,
  showArrow,
}) => {
  return (
    <section className="container-md px-4 py-14 xl:py-40">
      <div className="text-center max-w-750px mx-auto">
        <h2 className="green-line green-line-center st-h2">{aboutUsTitle}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: aboutUsContent }}
          className="text-content mb-8"
        />
        {showLearnMoreButton && (
          <Button
            text={learnMoreButtonText}
            to={buttonLink}
            showArrow={showArrow}
          />
        )}
      </div>
    </section>
  )
}

HomeAbout.propTypes = {
  aboutUsContent: PropTypes.string.isRequired,
  aboutUsTitle: PropTypes.string.isRequired,
  showLearnMoreButton: PropTypes.bool.isRequired,
  learnMoreButtonText: PropTypes.string,
}

export default HomeAbout
