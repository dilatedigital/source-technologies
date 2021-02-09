import React, { useContext } from "react"
import PropTypes from "prop-types"
import { MenuContext } from "../../context/MenuContext"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CgArrowRight } from "react-icons/cg"

const BottomDivision = ({ bottomContent }) => {
  console.log(bottomContent)
  const imageData = getImage(bottomContent.bottomImage.localFile)
  const { openModal } = useContext(MenuContext)

  return (
    <div className="container-inner px-4 relative lg:mb-150px">
      <GatsbyImage image={imageData} alt={bottomContent.bottomImage.altText} />
      <div className="sub-distribution rounded-30px shadow-2xl my-12 md:mx-auto lg:mx-0 lg:my-0">
        <h2 className="green-line st-h2 lg:mt-4">{bottomContent.bottomText}</h2>
        <button aria-label="Contact Us" onClick={openModal} className="st-btn">
          Contact Us
          <CgArrowRight className="text-2xl ml-3" />
        </button>
      </div>
    </div>
  )
}

BottomDivision.propTypes = {
  bottomContent: PropTypes.object.isRequired,
}

export default BottomDivision
