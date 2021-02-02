import React, { useState } from "react"
import { gql, useQuery } from "@apollo/client"
import EachBlogItem from "../Blog/EachBlogItem"
import Loading from "../../assets/loading.svg"

const GET_PROJS = gql`
  query searchProjects($searchTerm: String!, $first: Int!, $after: String) {
    projects(first: $first, after: $after, where: { search: $searchTerm }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          title
          uri
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`

export const batchSize = 6

const ProjectList = ({ searchTerm }) => {
  const [fetchingNextPage, setFetchingNextPage] = useState(false)

  const { loading, error, data, fetchMore } = useQuery(GET_PROJS, {
    variables: { searchTerm, first: batchSize, after: null },
  })
  // console.log(data)

  async function fetchMoreProjects() {
    if (fetchingNextPage) return // To prevent multiple requests from firing simultaneously.
    setFetchingNextPage(true)

    await fetchMore({
      variables: { after: data.projects.pageInfo.endCursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.projects.edges = [
          ...prevResult.projects.edges,
          ...fetchMoreResult.projects.edges,
        ]
        return fetchMoreResult
      },
    })

    setFetchingNextPage(false)
  }

  if (loading)
    return (
      <div className="flex justify-center px-4 py-12 st-spinner">
        <Loading />
      </div>
    )
  if (error) return `Error! ${error.message}`

  const projectsFound = !!data?.projects.edges.length

  if (!projectsFound) {
    return <p className="text-center py-12">No matching projects found.</p>
  }

  const projects = data.projects.edges.map(edge => edge.node)

  return (
    <div className="px-4 py-14 container-inner mx-auto xl:pb-150px">
      <div className="xl:pt-90px xl:pb-75px xl:grid xl:grid-cols-2 xl:gap-20">
        {projects.map(project => {
          return <EachBlogItem mainBlog={true} proj={true} node={project} />
        })}
      </div>
      {data.projects.pageInfo.hasNextPage && (
        <>
          <button
            className="st-btn w-full mt-8 xl:mt-0"
            aria-label="Load more projects"
            onClick={fetchMoreProjects}
          >
            Load more
          </button>
          {fetchingNextPage && (
            <div className="flex justify-center px-4 py-12 st-spinner">
              <Loading />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ProjectList
