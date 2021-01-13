import React from "react"
import PropTypes from "prop-types"
import { AnchorLink } from "gatsby-plugin-anchor-links"

export const firstWordBr = string => {
  let splitedString = string.split(" ")
  let restOfString = splitedString.slice(1).join(" ")

  return (
    <>
      {splitedString[0]}
      <br /> {restOfString}
    </>
  )
}

const HomeDivision = ({ nodes: { nodes } }) => {
  //console.log(nodes)
  let delay = 100
  return (
    <section className="container-md px-4 mx-auto st-divisions py-14 xl:py-0">
      <div
        className={`${
          nodes.length > 3 ? "max-w-1400px" : "max-w-815px"
        } mx-auto divisions-container md:flex md:justify-between`}
      >
        {nodes.map((division, i) => {
          return (
            <AnchorLink
              key={division.id}
              to={`/divisions/#${division.slug}`}
              stripHash={true}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: division.divisionFields.iconSvg,
                }}
                className={division.divisionFields.color}
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-delay={delay + i}
              />
              <h3 className="font-semibold text-center text-larger mt-4 md:mt-8">
                {firstWordBr(division.title)}
              </h3>
            </AnchorLink>
          )
        })}
      </div>
    </section>
  )
}

HomeDivision.propTypes = {
  nodes: PropTypes.objectOf(PropTypes.array).isRequired,
}

export default HomeDivision
