import React from "react"
import PropTypes from "prop-types"

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

  return (
    <section className="container-md px-4 mx-auto st-divisions py-14 xl:py-0">
      <div
        className={`${
          nodes.length > 3 ? "max-w-1400px" : "max-w-815px"
        } mx-auto divisions-container md:flex md:justify-between`}
      >
        {nodes.map(division => {
          return (
            <div key={division.id}>
              <div
                dangerouslySetInnerHTML={{
                  __html: division.divisionFields.iconSvg,
                }}
                className={division.divisionFields.color}
              />
              <h3 className="font-semibold text-center text-larger mt-4 md:mt-8">
                {firstWordBr(division.title)}
              </h3>
            </div>
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
