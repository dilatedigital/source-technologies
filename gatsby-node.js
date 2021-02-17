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
        categories {
          nodes {
            name
          }
        }
      }
      next {
        id
      }
      previous {
        id
      }
    }
  }
  allWpProject {
    nodes {
      id
      uri
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
      case "Divisions Template":
        template = path.resolve("./src/templates/Divisions.js")
        break
      case "Projects Template":
        template = path.resolve("./src/templates/Projects.js")
        break
      case "About Template":
        template = path.resolve("./src/templates/About.js")
        break
      case "Privacy Template":
        template = path.resolve("./src/templates/PrivacyPolicy.js")
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

  data.allWpPost.edges.forEach(post => {
    //console.log(post.node.categories.nodes)
    const previousId = post.previous == null ? "null" : post.previous.id
    const nextId = post.next == null ? "null" : post.next.id
    actions.createPage({
      path: `/news${post.node.uri}`,
      component: path.resolve("./src/templates/SingleBlog.js"),
      context: {
        id: post.node.id,
        nextPage: nextId,
        previousPage: previousId,
        uri: post.node.uri,
        cat: post.node.categories.nodes[0].name,
      },
    })
  })

  data.allWpProject.nodes.forEach(proj => {
    //console.log(post.node.categories.nodes)

    actions.createPage({
      path: proj.uri,
      component: path.resolve("./src/templates/SingleProject.js"),
      context: {
        id: proj.id,
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
