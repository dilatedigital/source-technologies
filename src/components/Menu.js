import React, { useContext } from "react"
import PropTypes from "prop-types"
import { flatListToHierarchical } from "../utils/flastListToHeirarchical"
import { FiChevronDown } from "react-icons/fi"
import UniversalLink from "../utils/UniversalLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { MenuContext } from "../context/MenuContext"

const Menu = ({ menu }) => {
  const menuItems = flatListToHierarchical(menu.menuItems.nodes)

  const { openModal } = useContext(MenuContext)

  //console.log(menuItems)

  return (
    <ul className="hidden xl:flex items-center justify-center menu">
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
              <ul className="hidden submenu absolute w-250px bg-white bg-opacity-50 shadow-2xl transition-all py-4 top-25px rounded-lg">
                {menuItem.children.map(subItem => {
                  return (
                    <li
                      key={subItem.key}
                      className="py-2 px-4 w-full hover:bg-light-grey"
                    >
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
      <button
        aria-label="Contact Us"
        onClick={openModal}
        className="mr-0 font-pop bg-primary text-white uppercase tracking-two flex items-center justify-center py-4 px-8 rounded-full font-semibold cursor-pointer hover:bg-primary-lighter transition focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Contact Us
      </button>
    </ul>
  )
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
}

export default Menu
