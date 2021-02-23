import { Link } from "gatsby"
import React, { useState } from "react"
import HomeIcon from "../assets/home.svg"
import ProjectsIcon from "../assets/projects.svg"
import DivisionsIcon from "../assets/divisions.svg"
import NewsIcon from "../assets/news.svg"
import MoreIcon from "../assets/more-menu.svg"
import AboutIcon from "../assets/about.svg"
import PhoneIcon from "../assets/phone-call.svg"

const FixedBottom = ({ openModal }) => {
  //console.log(openModal)
  const [isMoreMenu, setMoreMenu] = useState(false)
  const showMoreMenu = () => {
    setMoreMenu(!isMoreMenu)
  }
  return (
    <>
      <div className="standalone-nav">
        <div>
          <Link to="/">
            <HomeIcon />
            Home
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <ProjectsIcon />
            Projects
          </Link>
        </div>
        <div>
          <Link to="/divisions">
            <DivisionsIcon />
            Divisions
          </Link>
        </div>
        <div>
          <Link to="/news">
            <NewsIcon />
            News
          </Link>
        </div>
        <div
          onClick={showMoreMenu}
          onKeyDown={showMoreMenu}
          role="button"
          tabIndex={0}
        >
          <a to="#">
            <MoreIcon />
            More
          </a>
        </div>
      </div>
      {typeof window !== "undefined" && isMoreMenu && (
        <div className="more-menus">
          <div>
            <Link to="/about">
              <AboutIcon />
              About
            </Link>
          </div>
          <div
            onClick={openModal}
            onKeyDown={openModal}
            role="button"
            tabIndex={0}
          >
            <a to="#">
              <PhoneIcon />
              Contact Us
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default FixedBottom
