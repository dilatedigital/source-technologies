import React from "react"

import { gql, useQuery } from "@apollo/client"
import EachBlogItem from "../Blog/EachBlogItem"

const searchProjects = gql`
  query searchPosts($searchTerm: String!) {
    projects(where: { search: $searchTerm }) {
      nodes {
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
`

const ProjectList = ({ searchTerm }) => {
  const { loading, error, data } = useQuery(searchProjects, {
    variables: { searchTerm },
  })

  if (loading)
    return (
      <div className="flex justify-center px-4 py-12">
        <svg
          class="animate-spin -ml-1 mr-3 h-12 w-12 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    )
  if (error) return `Error! ${error.message}`

  const projectsFound = !!data?.projects.nodes.length

  if (!projectsFound) {
    return <p className="text-center py-12">No matching posts found.</p>
  }

  return (
    <div className="px-4 py-14 container-inner mx-auto">
      <div className="xl:pt-75px xl:pb-100px xl:grid xl:grid-cols-2 xl:gap-20">
        {data.projects.nodes.map(project => {
          //console.log(project)
          return <EachBlogItem mainBlog={true} proj={true} node={project} />
        })}
      </div>
    </div>
  )
}

export default ProjectList
