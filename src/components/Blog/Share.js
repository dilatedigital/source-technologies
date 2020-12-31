import React from "react"
import PropTypes from "prop-types"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const Share = ({ url, text, direction }) => {
  return (
    <div>
      <div
        className={`flex items-center mt-4 md:mt-0 flex-col ${
          direction === "col" ? "flex-col" : "md:flex-row"
        }`}
      >
        <h5 className={`text-md ${direction === "col" ? "" : "md:mr-4"}`}>
          {text}
        </h5>
        <div
          className={`mt-2 md:mt-0 ${
            direction === "col" ? "social-btns-col" : "social-btns-row"
          }`}
        >
          <FacebookShareButton url={url} hashtag="#sourcetechnologiesAU">
            <FaFacebookF className="hover:text-primary fill-current" />
          </FacebookShareButton>
          <TwitterShareButton url={url} hashtags={["sourcetechnologiesAU"]}>
            <FaTwitter className="hover:text-primary fill-current" />
          </TwitterShareButton>
          <LinkedinShareButton url={url} hashtag="#sourcetechnologiesAU">
            <FaLinkedinIn className="hover:text-primary fill-current" />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  )
}

Share.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
}

Share.defaultProps = {
  text: "Share",
  direction: "row",
}

export default Share
