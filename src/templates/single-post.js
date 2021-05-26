import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

//TODO динамически создает страницу

const SinglePost = ({data}) => {
    const {html} = data.markdownRemark
    const { title, url, category } = data.markdownRemark.frontmatter
    return (
      <Layout>
          <Seo title={title} />
          <div>
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
      </Layout>
    )
}
export default SinglePost

export const query = graphql`
    query PostQuery($url: String) {
        markdownRemark(frontmatter: {url: {eq: $url}}) {
            html
            frontmatter {
                title
                url
                category
            }
        }
    }
`