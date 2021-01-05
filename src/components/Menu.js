import React from "react"
import PropTypes from "prop-types"
import { flatListToHierarchical } from "../utils/flastListToHeirarchical"
import { FiChevronDown } from "react-icons/fi"
import UniversalLink from "../utils/UniversalLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Menu = ({ menu, phone }) => {
  const menuItems = flatListToHierarchical(menu.menuItems.nodes)

  //console.log(menuItems)

  return (
    <ul className="hidden xl:flex items-center justify-center">
      {menuItems.map(menuItem => {
        return (
          <li
            key={menuItem.key}
            className="mr-16 flex items-center relative menu-item"
          >
            <UniversalLink
              className="font-pop text-ct-black"
              to={
                menuItem.connectedNode
                  ? menuItem.connectedNode.node.uri
                  : menuItem.url
              }
            >
              {menuItem.title}
            </UniversalLink>

            {menuItem.children.length > 0 && <FiChevronDown className="ml-2" />}
            {menuItem.children.length > 0 && (
              <ul className="hidden submenu absolute w-250px bg-white shadow-2xl transition-all p-4 top-20px">
                {menuItem.children.map(subItem => {
                  return (
                    <li key={subItem.key}>
                      <AnchorLink
                        stripHash={true}
                        to={subItem.url}
                        className="font-pop text-ct-black"
                      >
                        {subItem.title}
                      </AnchorLink>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        )
      })}
      <a
        href={`tel:${phone}`}
        className="mr-0 font-pop bg-primary text-white uppercase tracking-two flex items-center justify-center py-4 px-8 rounded-full font-semibold cursor-pointer hover:bg-primary-lighter transition"
      >
        Contact Us
      </a>
    </ul>
  )
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
}

export default Menu
