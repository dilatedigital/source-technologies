import { graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import Layout from "../components/layout"
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc"
import Share from "../components/Blog/Share"
import EachBlogItem from "../components/Blog/EachBlogItem"
import SEO from "../components/seo"

const SingleBlog = ({
  data: { wpPost },
  location,
  data: { nextPage },
  data: { previousPage },
  data: { relatedPosts },
}) => {
  //console.log(location)
  //console.log(relatedPosts.edges)

  const prev = previousPage?.uri
  const next = nextPage?.uri

  return (
    <Layout>
      <SEO
        title={wpPost.seo.title}
        description={wpPost.seo.metaDesc}
        image={
          wpPost.seo.opengraphImage
            ? wpPost.seo.opengraphImage.localFile.publicURL
            : null
        }
      />
      <div className="container-inner px-4 py-14 xl:pt-220px xl:pb-130px">
        <h1 className="text-4xl xl:text-hero-h1">{wpPost.title}</h1>
        <BackgroundImage
          fluid={wpPost.featuredImage.node.localFile.childImageSharp.fluid}
          className="my-8 xl:mt-70px xl:mb-50px sb-featured h-each-slide-sm md:h-slider-img-mobile xl:h-single-feature"
        />
        <div
          dangerouslySetInnerHTML={{ __html: wpPost.content }}
          className="sb-content container-sm"
        />
        <div className="container-sm my-8 xl:mt-85px md:flex md:items-center md:justify-between md:mb-130px">
          <div className="flex items-center w-full max-w-120px justify-between prev-next-container relative mx-auto md:mx-0">
            <Link
              to={`/news${prev ? prev : ""}`}
              className={`flex items-center ${
                prev
                  ? "text-ct-black"
                  : "pointer-events-none text-disabled-grey"
              }`}
            >
              <VscChevronLeft className="mr-1" />
              prev
            </Link>
            <Link
              to={`/news${next ? next : ""}`}
              className={`flex items-center ${
                next
                  ? "text-ct-black"
                  : "pointer-events-none text-disabled-grey"
              }`}
            >
              next
              <VscChevronRight className="ml-1" />
            </Link>
          </div>
          <Share url={location.href} text="Share this" direction="row" />
        </div>
        {relatedPosts.edges.length > 0 && (
          <div>
            <h3 className="text-3xl xl:text-h2 font-semibold">
              Related Articles
            </h3>
            <div className="mt-6 xl:mt-40px lg:grid lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
              {relatedPosts.edges.map(post => {
                return (
                  <EachBlogItem
                    mainBlog={false}
                    node={post.node}
                    key={post.node.id}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query(
    $id: String!
    $nextPage: String
    $previousPage: String
    $uri: String!
    $cat: String
  ) {
    wpPost(id: { eq: $id }) {
      title
      date(formatString: "MMM DD, YYYY")
      content
      link
      seo {
        title
        metaDesc
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      terms {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    nextPage: wpPost(id: { eq: $nextPage }) {
      uri
    }
    previousPage: wpPost(id: { eq: $previousPage }) {
      uri
    }
    relatedPosts: allWpPost(
      filter: {
        uri: { ne: $uri }
        categories: { nodes: { elemMatch: { name: { eq: $cat } } } }
      }
      limit: 3
    ) {
      edges {
        node {
          uri
          title
          date(formatString: "MMM DD, YYYY")
          id
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default SingleBlog
