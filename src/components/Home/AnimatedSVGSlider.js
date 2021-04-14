import React, { useEffect } from "react"
import { useCycle, AnimatePresence } from "framer-motion"
import ReAnimatedSvg1 from "./ReAnimatedSvg1"
import ReAnimatedSvg2 from "./ReAnimatedSvg2"

const AnimatedSVGSlider = () => {
  const [cycle, setCycle] = useCycle(0, 1)

  const svgs = [<ReAnimatedSvg1 />, <ReAnimatedSvg2 />]

  useEffect(() => {
    const slideshowTimer = setTimeout(() => {
      setCycle()
    }, 6000)
    return () => clearTimeout(slideshowTimer)
  })

  return <AnimatePresence exitBeforeEnter>{svgs[cycle]}</AnimatePresence>
}

export default AnimatedSVGSlider
