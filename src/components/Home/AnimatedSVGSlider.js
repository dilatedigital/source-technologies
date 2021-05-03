import React, { useEffect } from "react"
import { useCycle, AnimatePresence } from "framer-motion"
import ReAnimatedSvg1 from "./ReAnimatedSvg1"
import ReAnimatedSvg2 from "./ReAnimatedSvg2"
import ReAnimatedSVG3 from "./ReAnimatedSVG3"

const AnimatedSVGSlider = () => {
  const [cycle, setCycle] = useCycle(0, 1, 2)

  const svgs = [<ReAnimatedSvg2 />, <ReAnimatedSVG3 />, <ReAnimatedSvg1 />]

  useEffect(() => {
    const slideshowTimer = setTimeout(() => {
      setCycle()
    }, 7000)
    return () => clearTimeout(slideshowTimer)
  })

  return <AnimatePresence exitBeforeEnter>{svgs[cycle]}</AnimatePresence>
}

export default AnimatedSVGSlider
