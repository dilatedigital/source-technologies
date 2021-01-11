import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import PropTypes from "prop-types"
import Slider from "react-slick"
import { CgArrowLeft, CgArrowRight } from "react-icons/cg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

  const yearSlider = useRef()
  const next = () => {
    yearSlider.current.slickNext()
  }
  const prev = () => {
    yearSlider.current.slickPrev()
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
  }
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
        />
        <Slider {...settings} ref={yearSlider} className="mt-4">
          {years.map((year, i) => {
            return (
              <div key={i}>
                {year.map(yr => {
                  return (
                    <div className="md:flex md:justify-between mb-4">
                      <div className="font-pop font-semibold text-larger mt-4">
                        {yr.year}
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: yr.yearContent }}
                        className="max-w-535px"
                      />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </Slider>
        <div className="max-w-130px flex justify-between slider-btn-container mt-8 mx-auto xl:mx-0">
          <button
            onClick={prev}
            aria-label="Previous Slide"
            className="slider-btn slider-btn-prev"
          >
            <CgArrowLeft className="text-3xl" />
          </button>
          <button
            onClick={next}
            aria-label="Next Slide"
            className="slider-btn slider-btn-next"
          >
            <CgArrowRight className="text-3xl" />
          </button>
        </div>
        {showButton && (
          <a
            href={`tel:${data.wp.siteGeneralSettings.siteSettingsFields.phone}`}
            className="st-btn st-btn-left mt-4"
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
