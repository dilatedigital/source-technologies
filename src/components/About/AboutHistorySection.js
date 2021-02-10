import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import PropTypes from "prop-types"

const AboutHistorySection = ({
  historyImage,
  historyTitle,
  historyContent,
  years,
  showButton,
  buttonText,
}) => {
  const data = useStaticQuery(graphql`
    {
      wp {
        siteGeneralSettings {
          siteSettingsFields {
            phone
          }
        }
      }
    }
  `)

  return (
    <section className="py-8 about-history-section xl:flex xl:justify-between xl:pt-190px">
      <div className="lg:max-w-690px lg:mx-auto xl:mx-0 w-full">
        <GatsbyImage fluid={historyImage} className="rounded-30px" />
      </div>
      <div className="lg:max-w-615px lg:mx-auto xl:mx-0 mt-8 xl:mt-0">
        <h3 className="text-history-title font-semibold mb-4">
          {historyTitle}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: historyContent,
          }}
          className="mb-8"
        />

        {years.map((year, i) => {
          return (
            <div key={i}>
              <div className="md:flex md:justify-between md:items-center mb-4">
                <div className="font-pop font-semibold text-larger">
                  {year.year}
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: year.yearContent }}
                  className="max-w-535px w-full"
                />
              </div>
            </div>
          )
        })}

        {showButton && (
          <a
            href={`tel:${data.wp.siteGeneralSettings.siteSettingsFields.phone}`}
            className="st-btn st-btn-left mt-8"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  )
}

AboutHistorySection.propTypes = {
  historyContent: PropTypes.string.isRequired,
  historyTitle: PropTypes.string.isRequired,
  historyImage: PropTypes.object.isRequired,
  years: PropTypes.array.isRequired,
  showButton: PropTypes.bool.isRequired,
  buttonText: PropTypes.string,
}

export default AboutHistorySection
