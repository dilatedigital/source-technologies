import React from "react"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

const FooterCol = ({ title, menuItems, generalSiteFields, innerLinks }) => {
  let menuItemsLen
  //console.log(generalSiteFields)
  if (menuItems) {
    menuItemsLen = menuItems.nodes.length
  }
  //console.log(menuItems)

  return (
    <div className="mt-8 lg:mt-0">
      <h5 className="font-medium mb-6">{title}</h5>
      <ul>
        {menuItemsLen &&
          menuItems.nodes.map((menuItem, i) => {
            return (
              <li
                key={menuItem.id}
                className={menuItemsLen === i + 1 ? "mb-0" : "mb-4"}
              >
                {innerLinks ? (
                  <AnchorLink to={menuItem.url} stripHash={true}>
                    {menuItem.label}
                  </AnchorLink>
                ) : (
                  <Link to={menuItem.connectedNode.node.uri}>
                    {menuItem.label}
                  </Link>
                )}
              </li>
            )
          })}
        {generalSiteFields && generalSiteFields.email && (
          <li className="mb-4">
            <a href={`mailto:${generalSiteFields.email}`}>
              {generalSiteFields.email}
            </a>
          </li>
        )}
        {generalSiteFields && generalSiteFields.phone && (
          <li className="mb-4">
            <a href={`tel:${generalSiteFields.phone}`}>
              {generalSiteFields.phone}
            </a>
          </li>
        )}
        {generalSiteFields && generalSiteFields.address && (
          <li>
            <a
              href={generalSiteFields.address.googleMapLink}
              target="_blank"
              rel="noreferrer"
            >
              {generalSiteFields.address.number}
              <br />
              {`${generalSiteFields.address.suburb}, ${generalSiteFields.address.postalCode}`}
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

FooterCol.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.object,
  generalSiteFields: PropTypes.object,
  innerLinks: PropTypes.bool,
}

export default FooterCol
