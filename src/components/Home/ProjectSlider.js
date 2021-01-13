import React, { useRef } from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import BackgroundImage from "gatsby-background-image"
import { CgArrowLeft, CgArrowRight } from "react-icons/cg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProjectSlider = ({ nodes: { nodes } }) => {
  const customSlider = useRef()
  const next = () => {
    customSlider.current.slickNext()
  }
  const prev = () => {
    customSlider.current.slickPrev()
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    autoplay: false,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          draggable: true,
        },
      },
    ],
  }

  //console.log(nodes)

  return (
    <section className="container-md mx-auto relative">
      <Slider
        {...settings}
        ref={customSlider}
        className="custom-slider slider-container mx-auto"
      >
        {nodes.map(slideItem => {
          return (
            <div key={slideItem.id}>
              <BackgroundImage
                className="slider-image-container"
                fluid={
                  slideItem.featuredImage.node.localFile.childImageSharp.fluid
                }
              ></BackgroundImage>
              <div className="slider-info mt-50px">
                <h3 className="font-semibold text-slider-h3">
                  {slideItem.title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{ __html: slideItem.excerpt }}
                  className="mt-20px"
                />
              </div>
            </div>
          )
        })}
      </Slider>
      <div className="absolute w-full flex justify-between slider-btn-container">
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
    </section>
  )
}

ProjectSlider.propTypes = {
  nodes: PropTypes.objectOf(PropTypes.array).isRequired,
}

export default ProjectSlider
