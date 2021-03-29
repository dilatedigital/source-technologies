import React, { useRef } from "react"
import Slider from "react-slick"
import AnimatedSVG from "./AnimatedSVG"

const AnimatedSVGSlider = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
  }

  const heroSlider = useRef()
  return (
    <div className="hero-svg">
      <Slider {...settings} ref={heroSlider}>
        <AnimatedSVG />
        <AnimatedSVG />
      </Slider>
    </div>
  )
}

export default AnimatedSVGSlider
