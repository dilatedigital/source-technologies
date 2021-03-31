import React, { useEffect } from "react"
import { useCycle, AnimatePresence } from "framer-motion"
import AnimatedSVG from "./AnimatedSVG"
import AnimatedSVG2 from "./AnimatedSVG2"
import AnimatedSVG3 from "./AnimatedSVG3"

const AnimatedSVGSlider = () => {
  const [cycle, setCycle] = useCycle(0, 1, 2)

  const svgs = [<AnimatedSVG />, <AnimatedSVG2 />, <AnimatedSVG3 />]

  useEffect(() => {
    const slideshowTimer = setTimeout(() => {
      setCycle()
      console.log(cycle)
    }, 6000)
    return () => clearTimeout(slideshowTimer)
  })

  return <AnimatePresence exitBeforeEnter>{svgs[cycle]}</AnimatePresence>
}

export default AnimatedSVGSlider
