import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
const SecondPage = ({data}) => {
  const {html} = data.markdownRemark
  const {title} = data.markdownRemark.frontmatter
  return (
  <Layout>
    <Seo title="About" />
    <h1>{title}</h1>
    <p>{html}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)}

export default SecondPage

export const listMd = graphql`
    query MyQuery {
        markdownRemark {
            html
            frontmatter {
                title
            }
        }
    }

`
