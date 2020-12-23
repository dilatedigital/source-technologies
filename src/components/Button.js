import React from "react"
import { Link } from "gatsby"
import { CgArrowRight } from "react-icons/cg"
import PropTypes from "prop-types"

const Button = ({ text, to, showArrow }) => {
  return (
    <Link to={to} className="st-btn">
      {text}
      {showArrow && <CgArrowRight className="text-2xl ml-3" />}
    </Link>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  showArrow: PropTypes.bool.isRequired,
}

export default Button
