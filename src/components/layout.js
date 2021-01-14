/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./Footer"
import { MenuContext } from "../context/MenuContext"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext)
  return (
    <>
      <Helmet bodyAttributes={{ class: isMenuOpen ? "menu-open" : "" }} />
      <div className={`flex flex-col min-h-screen`}>
        <Header />
        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
