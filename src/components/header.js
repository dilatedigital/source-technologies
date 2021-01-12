import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import Logo from "../assets/sourcetechnologies-logo.svg"
import Burger from "../assets/burger.svg"
import Menu from "./Menu"
import { MenuContext } from "../context/MenuContext"
import MobileMenu from "./MobileMenu"

const Header = () => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)

  const { wpMenu, wp } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu" }) {
        menuItems {
          nodes {
            key: id
            title: label
            connectedNode {
              node {
                uri
              }
            }
            parentId
            url
          }
        }
      }
      wp {
        siteGeneralSettings {
          siteSettingsFields {
            phone
          }
        }
      }
    }
  `)

  return (
    <header className="relative xl:absolute xl:w-full xl:z-20 border-b border-gray-200 xl:border-none">
      <div className="container-lg">
        <div className="flex p-4 items-center justify-between">
          <Link to="/" className="">
            <Logo className="w-60 md:w-96 xl:w-screen st-logo" />
          </Link>
          <div>
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-primary xl:hidden"
            >
              <Burger className="fill-current text-ct-black" />
            </button>
            <Menu
              menu={wpMenu}
              phone={wp.siteGeneralSettings.siteSettingsFields.phone}
            />
          </div>
        </div>
      </div>
      <MobileMenu
        menu={wpMenu}
        phone={wp.siteGeneralSettings.siteSettingsFields.phone}
      />
    </header>
  )
}

export default Header
