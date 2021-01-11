import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

const AboutTeamSection = ({ title, members }) => {
  return (
    <section className="py-14 xl:py-120px">
      <h2 className="green-line green-line-center st-h2 st-h2-mb-15 text-center">
        {title}
      </h2>
      <div className="mt-45px members-container md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:grid-cols-4 xl:gap-y-9 xl:gap-x-5">
        {members.map(member => {
          return (
            <div className="text-center">
              <BackgroundImage
                fluid={member.image.localFile.childImageSharp.fluid}
                className="max-w-320px w-full h-each-member rounded-30px overflow-hidden mx-auto "
              />
              <h4 className="text-larger font-semibold mt-25px">
                {member.name}
              </h4>
              <h3 className="text-single-blog-p">{member.title}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}

AboutTeamSection.propTypes = {
  title: PropTypes.string.isRequired,
  members: PropTypes.array.isRequired,
}

export default AboutTeamSection
