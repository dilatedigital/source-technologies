import React, { useRef } from "react"
import PropTypes from "prop-types"
//import BackgroundImage from "gatsby-background-image"
import GatsbyImage from "gatsby-image"
import { SRLWrapper } from "simple-react-lightbox"
import Slider from "react-slick"

const options = {
  settings: {
    usePreact: true,
    showThumbnailsButton: false,
    autoplaySpeed: 0,
  },
}

const EachDivision = ({ nodes }) => {
  //console.log(nodes.nodes)

  const sourceSlider = useRef()
  const next = () => {
    sourceSlider.current.slickNext()
  }
  const prev = () => {
    sourceSlider.current.slickPrev()
  }

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
      },
      {
        breakpoint: 10000, // a unrealistically big number to cover up greatest screen resolution
        settings: "unslick",
      },
    ],
  }

  const sorted = nodes.nodes
    .filter(item => item.id !== "cG9zdDozODA=")
    .concat(nodes.nodes.filter(item => item.id === "cG9zdDozODA="))

  return (
    <section className="xl:pt-50px st-division">
      {sorted.map(node => {
        return (
          <div key={node.id} id={node.slug} className="each-division">
            <div
              dangerouslySetInnerHTML={{ __html: node.divisionFields.iconSvg }}
              className={`${node.divisionFields.color}`}
            />
            <h2 className="text-center text-3xl xl:text-h2 font-semibold mt-4 mb-8">
              {node.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: node.content }}
              className="text-center max-w-1090px mx-auto each-division-content"
            />
            {node.divisionFields.images && (
              <SRLWrapper options={options}>
                <div
                  className={`div-image mt-45px mb-50px lg:block lg:grid-cols-2 lg:gap-12  ${
                    node.divisionFields.images.length < 4
                      ? "justify-center less-four"
                      : "lg:justify-items-center xl:justify-items-start xl:grid-cols-4 great-four"
                  }`}
                >
                  <Slider {...settings} ref={sourceSlider}>
                    {node.divisionFields.images.map(image => {
                      return (
                        <div
                          key={image.id}
                          className="max-w-385px mt-12 mx-auto lg:mx-0 lg:mt-0"
                        >
                          <a
                            href={
                              image.image.localFile.childImageSharp.fluid.src
                            }
                          >
                            <GatsbyImage
                              fluid={
                                image.image.localFile.childImageSharp.fluid
                              }
                              className="w-full md:w-385px h-400px mx-auto md:mx-0 product-img"
                            />
                          </a>
                          <h4 className="text-larger font-semibold text-center mt-35px">
                            {image.imageTitle}
                          </h4>
                        </div>
                      )
                    })}
                  </Slider>
                </div>
              </SRLWrapper>
            )}

            {node.divisionFields.showButton && (
              <a
                href={node.divisionFields.buttonUrl}
                className={`st-btn ${node.divisionFields.color}`}
              >
                {node.divisionFields.buttonText}
              </a>
            )}
          </div>
        )
      })}
    </section>
  )
}

EachDivision.propTypes = {
  nodes: PropTypes.object.isRequired,
}

export default EachDivision
