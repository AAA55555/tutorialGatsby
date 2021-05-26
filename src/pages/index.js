import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark
  return (
    <>
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <div className="posts">
        {nodes.map(post => {
          const { category, title, url } = post.frontmatter

          return (
            <Link to={`/${category}/${url}`} key={post.id} className="post">
              {title}
            </Link>
          )
        })}
      </div>
    </Layout>
      <Link to={`/about`}>About</Link>
      </>
  )
}

export default IndexPage

export const query = graphql`
  query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
        }
        id
      }
    }
  }
`
