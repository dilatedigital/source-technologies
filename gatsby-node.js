const path = require("path")

const query = `
{
  allWpPage(filter: {id: {ne: "cG9zdDoxNzI="}}) {
    nodes {
      uri
      template {
        templateName
      }
      isFrontPage
      id
    }
  }
  allWpPost {
    edges {
      node {
        uri
        id
      }
    }
  }
}
`

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    ${query}
  `)

  if (!data) return null

  data.allWpPage.nodes.forEach(page => {
    const { isFrontPage } = page
    const uri = isFrontPage ? `/` : page.uri

    let template

    switch (page.template.templateName) {
      case "Home Template":
        template = path.resolve("./src/templates/Home.js")
        break
      default:
        template = path.resolve("./src/templates/BasicPage.js")
    }

    actions.createPage({
      path: uri,
      component: template,
      context: {
        id: page.id,
        slug: page.uri,
      },
    })
  })

  //blogs pagination
  // amount of posts
  const posts = data.allWpPost.edges
  // post per page
  const postsPerPage = 6
  //how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      component: path.resolve("./src/templates/Blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
