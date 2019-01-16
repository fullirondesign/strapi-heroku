import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 3</p>
      {/* {data.allFile.edges.map(({ node }, index) => (
        <li key={index}>
          <ul>
            <img
              style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
              src={node.publicURL}
              alt="file"
            />
          </ul>
          <ul>{node.prettySize}</ul>
          <ul>{node.extension}</ul>
          <ul>{node.birthTime}</ul>
        </li>
      ))} */}

      {data.allStrapiPost.edges.map(({ node }, index) => (
        <li key={index}>
          <ul>
            {/* <img
              style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
              src={node.publicURL}
              alt="file"
            /> */}
            <ul>{node.id}</ul>
            <ul>{node.title}</ul>
            <ul>{node.content}</ul>

          </ul>
        </li>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`
