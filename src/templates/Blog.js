import { graphql, Link } from "gatsby"
import React from "react"
import EachBlogItem from "../components/Blog/EachBlogItem"
import Hero from "../components/Home/Hero"
import Layout from "../components/layout"
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc"
import Seo from "../components/seo"

const Blog = ({ data: { wpPage }, data: { allWpPost }, pageContext }) => {
  //console.log(pageContext)
  //console.log(allWpPost.edges)
  const { currentPage, numPages } = pageContext

  const prevPage = currentPage - 1 === 1 ? `/news` : `/news/${currentPage - 1}`
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const nextPage = `/news/${currentPage + 1}`

  return (
    <Layout>
      <Seo
        title={wpPage.seo.title}
        description={wpPage.seo.metaDesc}
        image={
          wpPage.seo.opengraphImage
            ? wpPage.seo.opengraphImage.localFile.publicURL
            : null
        }
      />
      <Hero
        home={false}
        heroFields={wpPage.innerPagesHeroFields}
        title={wpPage.title}
      />
      <div className="px-4 py-14 container-inner mx-auto">
        <div className="xl:pt-75px xl:pb-100px xl:grid xl:grid-cols-2 xl:gap-20">
          {allWpPost.edges.map(post => (
            <EachBlogItem key={post.node.id} node={post.node} mainBlog={true} />
          ))}
        </div>
        <div
          className={`${
            numPages > 1 ? "flex" : "hidden"
          } text-paginate-black container-inner items-center justify-center mt-90px xl:mt-0 xl:mb-90px`}
        >
          <Link
            to={prevPage}
            className={`flex items-center mr-4 ${
              isFirst
                ? "pointer-events-none text-disabled-grey"
                : "pointer-events-auto"
            }`}
          >
            <VscChevronLeft />
            prev
          </Link>
          <div className="flex items-center justify-center numbers-container">
            {Array.from({ length: numPages }, (_, i) => {
              return (
                <Link
                  to={`/news/${i === 0 ? "" : i + 1}`}
                  className={`${
                    i + 1 === currentPage
                      ? "bg-primary text-white hover:bg-primary-lighter"
                      : "bg-light-grey hover:bg-gray-50"
                  } flex items-center justify-center mr-4 focus:ring-2 focus:ring-primary active:ring-2 active:ring-primary focus:outline-none`}
                >
                  {i + 1}
                </Link>
              )
            })}
          </div>
          <Link
            to={nextPage}
            className={`flex items-center ${
              isLast
                ? "pointer-events-none text-disabled-grey"
                : "pointer-events-auto"
            }`}
          >
            next
            <VscChevronRight />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allWpPost(skip: $skip, limit: $limit) {
      edges {
        node {
          uri
          id
          content
          title
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
          date(formatString: "MMM DD, YYYY")
        }
      }
    }
    wpPage(id: { eq: "cG9zdDoxNzI=" }) {
      id
      uri
      title
      seo {
        metaDesc
        title
        opengraphImage {
          localFile {
            publicURL
          }
        }
      }
      innerPagesHeroFields {
        heroImage {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`

export default Blog
