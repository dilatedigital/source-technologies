import React, { useContext } from "react"
import PropTypes from "prop-types"
import { flatListToHierarchical } from "../utils/flastListToHeirarchical"
import { MenuContext } from "../context/MenuContext"
import Close from "../assets/close.svg"
import FooterIcon from "../assets/footerIcon.svg"
import MobileMenuLi from "./MobileMenuLi"

const MobileMenu = ({ menu, phone }) => {
  const menuItems = flatListToHierarchical(menu.menuItems.nodes)

  const { isMenuOpen, toggleMenu } = useContext(MenuContext)

  return (
    <div
      className={`h-full top-0 fixed bg-white z-40 w-full xl:hidden transform p-4 transition overflow-scroll ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end">
        <button onClick={toggleMenu}>
          <Close />
        </button>
      </div>
      <ul className="mt-70px max-w-290px ml-14 relative z-10">
        {menuItems.map(menuItem => {
          return <MobileMenuLi menuItem={menuItem} toggleMenu={toggleMenu} />
        })}
        <a
          href={`tel:${phone}`}
          className="mr-0 font-pop bg-primary text-white uppercase tracking-two flex items-center justify-center py-4 px-8 rounded-full font-semibold cursor-pointer hover:bg-primary-lighter transition max-w-190px focus:scale-95 transform"
        >
          Contact Us
        </a>
      </ul>
      <FooterIcon className="absolute right-0 bottom-0" />
    </div>
  )
}

MobileMenu.propTypes = {
  menu: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
}

export default MobileMenu
