import React from "react"
import Logo from "../assets/sourcetechnologies-logo.svg"
import { useStaticQuery, graphql, Link } from "gatsby"
import GatsbyImage from "gatsby-image"
import FooterCol from "./FooterCol"
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"
import FooterIcon from "../assets/footerIcon.svg"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      wp {
        themeFooterSettings {
          siteFooterFields {
            australianOwnedImg {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 89) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            australianOwnedText
          }
        }
        siteGeneralSettings {
          siteSettingsFields {
            companyName
            email
            phone
            facebook
            twitter
            youtube
            address {
              googleMapLink
              number
              postalCode
              suburb
            }
          }
        }
      }
      divisions: wpMenu(slug: { eq: "our-divisions" }) {
        name
        menuItems {
          nodes {
            connectedNode {
              node {
                uri
              }
            }
            label
            id
          }
        }
      }
      company: wpMenu(slug: { eq: "company" }) {
        name
        menuItems {
          nodes {
            connectedNode {
              node {
                uri
              }
            }
            label
            id
          }
        }
      }
    }
  `)
  const siteFooterFields = data.wp.themeFooterSettings.siteFooterFields
  const generalSiteFields = data.wp.siteGeneralSettings.siteSettingsFields

  return (
    <footer className="mt-auto px-4 relative">
      <div className="border-t border-ct-black container-md border-opacity-10 py-12 xl:pt-120px xl:pb-12 relative z-10">
        <div className="footer-upper flex flex-col justify-center items-center text-center xl:flex-row xl:justify-between xl:items-start xl:text-left">
          <div className="st-ft-logo-container w-full">
            <Link to="/" className="block mb-4 xl:mb-35px st-ft-logo">
              <Logo />
            </Link>

            <div className="flex justify-center flex-col items-center xl:flex-row xl:justify-start">
              <GatsbyImage
                fluid={
                  siteFooterFields.australianOwnedImg.localFile.childImageSharp
                    .fluid
                }
                className="ao-logo w-full"
                alt={siteFooterFields.australianOwnedText}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: siteFooterFields.australianOwnedText,
                }}
                className="font-pop font-medium xl:ml-4"
              />
            </div>
          </div>
          <FooterCol
            title={data.divisions.name}
            menuItems={data.divisions.menuItems}
          />
          <FooterCol
            title={data.company.name}
            menuItems={data.company.menuItems}
          />
          <FooterCol
            title="Source Technologies"
            generalSiteFields={generalSiteFields}
          />
        </div>
        <div className="footer-lower mt-10 xl:flex xl:justify-between xl:items-center xl:mt-70px">
          <div className="text-center text-smaller">
            &copy;
            {` ${new Date().getFullYear()} ${
              generalSiteFields.companyName
            }. All Rights Reserved.`}
          </div>
          <div className="mt-2 text-lg flex justify-center xl:mt-0 xl:mr-110px">
            {generalSiteFields.facebook && (
              <a
                href={generalSiteFields.facebook}
                target="_blank"
                rel="noreferrer"
                className="mr-8"
              >
                <FaFacebookF className="hover:text-primary fill-current transition cursor-pointer" />
              </a>
            )}
            {generalSiteFields.twitter && (
              <a
                href={generalSiteFields.facebook}
                target="_blank"
                rel="noreferrer"
                className="mr-8"
              >
                <FaTwitter className="hover:text-primary fill-current transition cursor-pointer" />
              </a>
            )}
            {generalSiteFields.youtube && (
              <a
                href={generalSiteFields.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="hover:text-primary fill-current transition cursor-pointer" />
              </a>
            )}
          </div>
        </div>
      </div>
      <FooterIcon className="absolute right-0 bottom-0" />
    </footer>
  )
}

export default Footer
