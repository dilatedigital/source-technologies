import React, { useRef } from "react"
import GatsbyImage from "gatsby-image"
import Slider from "react-slick"
import { CgArrowLeft, CgArrowRight } from "react-icons/cg"

const EachDivisionSlider = ({ images }) => {
  //console.log(images.length)
  const sourceSlider = useRef(null)
  const next = () => {
    sourceSlider.current.slickNext()
  }
  const prev = () => {
    sourceSlider.current.slickPrev()
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: images.length > 3 ? 4 : 3,
    slidesToScroll: 1,
    draggable: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div class="relative each-div-slider">
      <div
        className={`div-image mt-45px mb-50px lg:block lg:grid-cols-2 lg:gap-12  ${
          images.length < 4
            ? "justify-center less-four"
            : "lg:justify-items-center xl:justify-items-start xl:grid-cols-4 great-four"
        }`}
      >
        <Slider {...settings} ref={sourceSlider}>
          {images.map(image => {
            console.log(image)
            return (
              <div
                key={image.id}
                className="max-w-385px mt-12 mx-auto lg:mx-0 lg:mt-0"
              >
                {image.link ? (
                  <>
                    <GatsbyImage
                      fluid={image.image.localFile.childImageSharp.fluid}
                      className="w-full md:w-385px h-400px mx-auto md:mx-0 product-img"
                    />
                    <a href={image.link} target="_blank" rel="noreferrer"></a>
                  </>
                ) : (
                  <GatsbyImage
                    fluid={image.image.localFile.childImageSharp.fluid}
                    className="w-full md:w-385px h-400px mx-auto md:mx-0 product-img"
                  />
                )}
                {image.imageTitle && (
                  <h4 className="text-larger font-semibold text-center mt-35px">
                    {image.imageTitle}
                  </h4>
                )}
              </div>
            )
          })}
        </Slider>
      </div>

      <button
        onClick={prev}
        aria-label="Previous Slide"
        className={`slider-btn slider-btn-prev ${
          images.length <= 3 ? "lg:hidden" : ""
        }`}
      >
        <CgArrowLeft className="text-3xl" />
      </button>
      <button
        onClick={next}
        aria-label="Next Slide"
        className={`slider-btn slider-btn-next ${
          images.length <= 3 ? "lg:hidden" : ""
        }`}
      >
        <CgArrowRight className="text-3xl" />
      </button>
    </div>
  )
}

export default EachDivisionSlider
