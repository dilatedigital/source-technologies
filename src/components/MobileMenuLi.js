import React, { useState } from "react"
import PropTypes from "prop-types"
import { FiChevronDown } from "react-icons/fi"
import UniversalLink from "../utils/UniversalLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const MobileMenuLi = ({ menuItem, toggleMenu }) => {
  const [expanded, setExpanded] = useState(false)
  const subClicked = e => {
    e.preventDefault()
    setExpanded(!expanded)
  }

  return (
    <li key={menuItem.key} className="items-center relative menu-item mb-30px">
      <div className="flex justify-between">
        <UniversalLink
          className="font-pop text-ct-black text-lg"
          to={
            menuItem.connectedNode
              ? menuItem.connectedNode.node.uri
              : menuItem.url
          }
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        >
          {menuItem.title}
        </UniversalLink>
        {menuItem.children.length > 0 && (
          <button
            className="ml-4 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={subClicked}
          >
            <FiChevronDown
              className={`text-2xl transition-all ${
                expanded ? "transform rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>

      {menuItem.children.length > 0 && (
        <ul
          className={`submenu w-250px bg-transparent transition-all px-4 border-l border-gray-200 ${
            expanded ? "mt-8 max-h-full" : "max-h-0 overflow-hidden"
          }`}
        >
          {menuItem.children.map(subItem => {
            return (
              <li key={subItem.key}>
                <UniversalLink
                  to={subItem.url}
                  className="font-pop text-ct-black text-mobile-submenu"
                  onKeyDown={toggleMenu}
                  onClick={toggleMenu}
                >
                  {subItem.title}
                </UniversalLink>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

MobileMenuLi.propTypes = {
  menuItem: PropTypes.object.isRequired,
}

export default MobileMenuLi
