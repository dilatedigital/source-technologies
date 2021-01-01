import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"

const EachDivision = ({ nodes }) => {
  console.log(nodes)
  return (
    <section className="xl:pt-50px st-division">
      {nodes.nodes.map(node => {
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
              <div
                className={`div-image mt-45px mb-50px lg:grid lg:grid-cols-2 lg:gap-12  ${
                  node.divisionFields.images.length < 4
                    ? "justify-center"
                    : "lg:justify-items-center xl:justify-items-start xl:grid-cols-4"
                }`}
              >
                {node.divisionFields.images.map(image => {
                  return (
                    <div
                      key={image.id}
                      className="max-w-385px mt-12 mx-auto lg:mx-0 lg:mt-0"
                    >
                      <BackgroundImage
                        fluid={image.image.localFile.childImageSharp.fluid}
                        className="w-full md:w-385px h-400px mx-auto md:mx-0 product-img"
                      />
                      <h4 className="text-larger font-semibold text-center mt-35px">
                        {image.imageTitle}
                      </h4>
                    </div>
                  )
                })}
              </div>
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
