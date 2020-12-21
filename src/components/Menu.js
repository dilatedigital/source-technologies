import React from "react"
import PropTypes from "prop-types"
import { flatListToHierarchical } from "../utils/flastListToHeirarchical"

const Menu = ({ menu }) => {
  const menuItems = flatListToHierarchical(menu.menuItems.nodes)

  const menuItemsLen = menuItems.length

  return (
    <ul className="hidden xl:flex items-center justify-center">
      {menuItems.map((menuItem, i) => {
        if (menuItemsLen === i + 1) {
          return (
            <li
              key={menuItem.key}
              className="mr-0 font-pop bg-primary text-white uppercase tracking-two flex items-center justify-center py-4 px-8 rounded-full font-semibold cursor-pointer hover:bg-primary-lighter transition"
            >
              {menuItem.title}
            </li>
          )
        } else {
          return (
            <li key={menuItem.key} className="mr-16 font-pop text-ct-black">
              {menuItem.title}
            </li>
          )
        }
      })}
    </ul>
  )
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired,
}

export default Menu
