import React from "react"
import PropTypes from "prop-types"
import EachDivisionSlider from "./EachDivisionSlider"
//import BackgroundImage from "gatsby-background-image"

const EachDivision = ({ nodes }) => {
  const sorted = nodes.nodes
    .filter(item => item.id !== "cG9zdDozODA=")
    .concat(nodes.nodes.filter(item => item.id === "cG9zdDozODA="))

  //console.log(sorted)

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
              <EachDivisionSlider images={node.divisionFields.images} />
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
