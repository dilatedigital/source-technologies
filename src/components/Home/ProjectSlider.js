import React, { useRef } from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import { CgArrowLeft, CgArrowRight } from "react-icons/cg"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "lightgallery/dist/css/lightgallery.min.css"
import { Link } from "gatsby"

const ProjectSlider = ({ nodes, singleProj }) => {
  console.log(nodes)
  let slideItems
  if (!singleProj) {
    slideItems = nodes.nodes
  } else {
    slideItems = nodes.projectGallery
  }

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
    slidesToShow: slideItems.length < 3 ? 1 : 3,
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

  return (
    <section
      className={`container-md mx-auto relative ${
        slideItems.length <= 3 ? "proj-less-slider" : ""
      } ${!singleProj ? "" : "mt-8"}`}
    >
      <LightgalleryProvider>
        <Slider
          {...settings}
          ref={customSlider}
          className="custom-slider slider-container mx-auto"
        >
          {slideItems.map(slideItem => {
            const imageData = !singleProj
              ? getImage(slideItem.featuredImage.node.localFile)
              : getImage(slideItem.localFile)

            return (
              <div key={slideItem.id}>
                <div
                  className={`slider-image-container relative ${
                    slideItems.length <= 3 ? "mx-auto" : ""
                  }`}
                >
                  {!singleProj ? (
                    <>
                      <GatsbyImage image={imageData} alt="Project" />
                      <Link
                        to={`/projects/${slideItem.slug}/`}
                        class="absolute w-full h-full top-0 left-0"
                      ></Link>
                    </>
                  ) : (
                    <LightgalleryItem
                      src={slideItem.localFile.publicURL}
                      group="any"
                    >
                      <GatsbyImage image={imageData} alt="Project" />
                    </LightgalleryItem>
                  )}
                </div>

                {!singleProj && (
                  <div className="slider-info mt-50px">
                    <h3 className="font-semibold text-slider-h3">
                      {slideItem.title}
                    </h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          slideItem.excerpt.length > 100
                            ? `${slideItem.excerpt.substring(0, 110)}...`
                            : slideItem.excerpt,
                      }}
                      className="mt-20px"
                    />
                  </div>
                )}
              </div>
            )
          })}
        </Slider>
      </LightgalleryProvider>
      {slideItems.length >= 2 && slideItems.length != 3 && (
        <div
          className={`absolute w-full flex justify-between slider-btn-container ${
            slideItems.length <= 2 ? "short-slider-btn-container" : ""
          }`}
        >
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
      )}
    </section>
  )
}

ProjectSlider.propTypes = {
  nodes: PropTypes.objectOf(PropTypes.array).isRequired,
  singleProj: PropTypes.bool,
}

export default ProjectSlider
