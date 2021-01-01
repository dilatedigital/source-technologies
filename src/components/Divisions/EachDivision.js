import React from "react"
import PropTypes from "prop-types"

const EachDivision = ({ nodes }) => {
  console.log(nodes)
  return (
    <section className="xl:pt-50px">
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
