import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Logo from "../assets/sourcetechnologies-logo.svg"
import Burger from "../assets/burger.svg"
import Menu from "./Menu"

const Header = () => {
  const { wpMenu } = useStaticQuery(graphql`
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
    }
  `)

  return (
    <header className="xl:absolute xl:w-full xl:z-20">
      <div className="container-lg">
        <div className="flex p-4 items-center justify-between">
          <Link to="/" className="">
            <Logo className="w-60 md:w-96 xl:w-screen st-logo" />
          </Link>
          <div>
            <Burger className="fill-current text-ct-black xl:hidden" />
            <Menu menu={wpMenu} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
