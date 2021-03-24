import React, { useRef } from "react"
import GatsbyImage from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"
import Slider from "react-slick"
import { CgArrowLeft, CgArrowRight } from "react-icons/cg"

const options = {
  settings: {
    usePreact: true,
    autoplaySpeed: 0,
  },
  thumbnails: {
    showThumbnails: false,
  },
}

const EachDivisionSlider = ({ images }) => {
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
    slidesToShow: 4,
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
      <SRLWrapper options={options}>
        <div
          className={`div-image mt-45px mb-50px lg:block lg:grid-cols-2 lg:gap-12  ${
            images.length < 4
              ? "justify-center less-four"
              : "lg:justify-items-center xl:justify-items-start xl:grid-cols-4 great-four"
          }`}
        >
          <Slider {...settings} ref={sourceSlider}>
            {images.map(image => {
              return (
                <div
                  key={image.id}
                  className="max-w-385px mt-12 mx-auto lg:mx-0 lg:mt-0"
                >
                  <a href={image.image.localFile.childImageSharp.fluid.src}>
                    <GatsbyImage
                      fluid={image.image.localFile.childImageSharp.fluid}
                      className="w-full md:w-385px h-400px mx-auto md:mx-0 product-img"
                    />
                  </a>
                  <h4 className="text-larger font-semibold text-center mt-35px">
                    {image.imageTitle}
                  </h4>
                </div>
              )
            })}
          </Slider>
        </div>
      </SRLWrapper>

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
  )
}

export default EachDivisionSlider
