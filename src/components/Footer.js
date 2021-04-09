import React, { useContext, useEffect, useState } from "react"
import Logo from "../assets/sourcetechnologies-logo.svg"
import { useStaticQuery, graphql, Link } from "gatsby"
import GatsbyImage from "gatsby-image"
import FooterCol from "./FooterCol"
import ModalForm from "../components/Forms/ModalForm"
import { MenuContext } from "../context/MenuContext"
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa"
import FooterIcon from "../assets/footerIcon.svg"
import Modal from "react-modal"
import FixedBottom from "./FixedBottom"

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "50",
    overflow: "scroll",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    maxWidth: "815px",
    width: "100%",
    minHeight: "500px",
    padding: "60px 0",
  },
}

const Footer = () => {
  const [isStandAloneMode, setIsStandAloneMode] = useState(null)
  useEffect(() => {
    setIsStandAloneMode(
      window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone ||
        document.referrer.includes("android-app://")
    )
  }, [])
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
            termsConditions {
              privacyPolicy {
                ... on WpPage {
                  uri
                }
              }
              tradingTermsFile {
                localFile {
                  publicURL
                }
              }
            }
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
            linkedin
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
            url
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
  const termsConditions =
    data.wp.themeFooterSettings.siteFooterFields.termsConditions

  //console.log(termsConditions)

  const { isModalOpen, closeModal, openModal } = useContext(MenuContext)

  return (
    <>
      {isStandAloneMode && <FixedBottom openModal={openModal} />}
      <footer className="mt-auto px-4 relative">
        <div className="border-t border-ct-black container-md border-opacity-10 py-12 lg:pt-120px lg:pb-12 relative z-10">
          <div className="footer-upper flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between lg:items-start lg:text-left">
            <div className="st-ft-logo-container w-full">
              <Link
                to="/"
                className="block mb-4 lg:mb-35px st-ft-logo"
                aria-label="Logo"
              >
                <Logo />
              </Link>

              <div className="flex justify-center flex-col items-center lg:flex-row lg:justify-start">
                <GatsbyImage
                  fluid={
                    siteFooterFields.australianOwnedImg.localFile
                      .childImageSharp.fluid
                  }
                  className="ao-logo w-full"
                  alt={siteFooterFields.australianOwnedText}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: siteFooterFields.australianOwnedText,
                  }}
                  className="font-pop font-medium lg:ml-4"
                />
              </div>
            </div>
            <FooterCol
              title={data.divisions.name}
              menuItems={data.divisions.menuItems}
              innerLinks={true}
            />
            <FooterCol
              title={data.company.name}
              menuItems={data.company.menuItems}
            />
            <FooterCol
              title="Terms & Conditions"
              termsConditions={termsConditions}
            />
            <FooterCol
              title="Source Technologies"
              generalSiteFields={generalSiteFields}
            />
          </div>
          <div className="footer-lower mt-10 lg:flex lg:justify-between lg:items-center lg:mt-70px">
            <div className="text-center text-smaller">
              &copy;
              {` ${new Date().getFullYear()} ${
                generalSiteFields.companyName
              }. All Rights Reserved.`}
            </div>
            <div className="mt-2 text-lg flex justify-center lg:mt-0 lg:mr-217px footer-social-container">
              {generalSiteFields.facebook && (
                <a
                  href={generalSiteFields.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-8"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="hover:text-primary fill-current transition cursor-pointer" />
                </a>
              )}
              {generalSiteFields.twitter && (
                <a
                  href={generalSiteFields.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="mr-8"
                  aria-label="Twitter"
                >
                  <FaTwitter className="hover:text-primary fill-current transition cursor-pointer" />
                </a>
              )}
              {generalSiteFields.youtube && (
                <a
                  href={generalSiteFields.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube className="hover:text-primary fill-current transition cursor-pointer" />
                </a>
              )}
              {generalSiteFields.linkedin && (
                <a
                  href={generalSiteFields.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <FaLinkedinIn className="hover:text-primary fill-current transition cursor-pointer" />
                </a>
              )}
            </div>
          </div>
        </div>
        <FooterIcon className="absolute right-0 bottom-0" />
        <Modal
          isOpen={isModalOpen}
          style={modalStyles}
          contentLabel="Contact Us"
          onRequestClose={closeModal}
          shouldCloseOnEsc={true}
          ariaHideApp={false}
        >
          <ModalForm />
        </Modal>
      </footer>
    </>
  )
}

export default Footer
