import React from "react"
import PropTypes from "prop-types"

const AboutTopContent = ({ title, content, position }) => {
  return (
    <section
      className={`container-sm text-center ${
        position === "bottom" ? "py-14 xl:py-220px" : ""
      }`}
    >
      <h2 className="green-line green-line-center st-h2 st-h2-mb-15">
        {title}
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        className="text-content"
      />
    </section>
  )
}

AboutTopContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
}

export default AboutTopContent
