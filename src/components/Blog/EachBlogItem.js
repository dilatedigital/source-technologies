import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

const EachBlogItem = ({ node }, mainBlog) => {
  //console.log(node)
  return (
    <Link
      className="each-blog shadow-2xl block rounded-b-30px xl:max-w-645px"
      to={`/news${node.uri}`}
    >
      <BackgroundImage
        fluid={node.featuredImage.node.localFile.childImageSharp.fluid}
        className="h-each-slide-sm md:h-each-blog-md each-blog-img"
      />
      <div className="p-4 md:p-8 xl:p-12">
        <h3 className="text-each-blog-h3 font-semibold mb-4">{node.title}</h3>
        <p className="opacity-50 text-each-blog-p mb-4">{node.date}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${node.content.substring(0, 140)}...`,
          }}
          className="each-blog-content mb-8"
        />
        <p className="text-primary font-medium font-pop xl:text-each-blog-link">
          Read more
        </p>
      </div>
    </Link>
  )
}

EachBlogItem.propTypes = {
  node: PropTypes.object.isRequired,
  mainBlog: PropTypes.bool.isRequired,
}

export default EachBlogItem
