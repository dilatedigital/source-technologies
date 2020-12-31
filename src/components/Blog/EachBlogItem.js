import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const EachBlogItem = ({ node, mainBlog }) => {
  //console.log(mainBlog)
  return (
    <Link
      className={`each-blog shadow-2xl block rounded-30px focus:ring-2 focus:ring-primary focus:outline-none active:outline-none ${
        mainBlog ? "xl:max-w-645px" : "lg:max-w-435px"
      }`}
      to={`/news${node.uri}`}
    >
      <BackgroundImage
        fluid={node.featuredImage.node.localFile.childImageSharp.fluid}
        className={`h-each-slide-sm  each-blog-img ${
          mainBlog ? "md:h-each-blog-md" : "md:h-related-img"
        }`}
      />
      <div className={`p-4 md:p-8 ${mainBlog ? "xl:p-12" : "xl:p-8"}`}>
        <h3
          className={`${
            mainBlog ? "text-each-blog-h3" : "text-lg"
          } font-semibold mb-4`}
        >
          {node.title}
        </h3>
        <p
          className={`opacity-50 text-each-blog-p ${
            mainBlog ? "mb-4" : "mb-0"
          }`}
        >
          {node.date}
        </p>
        {mainBlog && (
          <>
            <div
              dangerouslySetInnerHTML={{
                __html: `${node.content.substring(0, 140)}...`,
              }}
              className="each-blog-content mb-8"
            />
            <p className="text-primary font-medium font-pop xl:text-each-blog-link">
              Read more
            </p>
          </>
        )}
      </div>
    </Link>
  )
}

EachBlogItem.propTypes = {
  node: PropTypes.object.isRequired,
  mainBlog: PropTypes.bool.isRequired,
}

export default EachBlogItem
