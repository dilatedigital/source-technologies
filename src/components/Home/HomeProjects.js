import React from "react"
import PropTypes from "prop-types"
import ProjectSlider from "./ProjectSlider"

const HomeProjects = ({ title, showSlider, slider }) => {
  return (
    <section className="py-14 xl:py-45 px-4">
      <div className="text-center">
        <h2 className="green-line green-line-center st-h2">{title}</h2>
        {showSlider && <ProjectSlider nodes={slider} />}
      </div>
    </section>
  )
}

HomeProjects.propTypes = {
  title: PropTypes.string.isRequired,
  showSlider: PropTypes.bool.isRequired,
}

export default HomeProjects
