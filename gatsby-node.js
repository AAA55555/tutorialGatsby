/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 *  Используем Gatsby Node для динамического создания страниц каждого поста.
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const {data} = await graphql(`
    query Posts {
        allMarkdownRemark {
            nodes {
                frontmatter {
                    category
                    url
                }
            }
        }
    }
  `)
  console.log(data)
  data.allMarkdownRemark.nodes.forEach(node => {
    const {url, category} = node.frontmatter
    actions.createPage({
      path: `/${category}/${url}`,
      component: path.resolve('./src/templates/single-post.js'),
      context: { url }
    })
  })
}