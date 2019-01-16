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
      <h1>Here are some Posts</h1>
      <p>Welcome to good-ua selection</p>
      
      {data.allStrapiPost.edges.map(({ node }, index) => (
        <div key={index}>
          <div style={{background:"darksalmon", borderRadius:"3px"}}>
            {/* <img
              style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
              src={node.publicURL}
              alt="file"
            /> */}
            <ul style={{fontSize:"21px", fontFamily:'monospace', padding:"12px 0 6px 0"}} >{node.title}</ul>
            <ul>{node.id}</ul>
            <ul>{node.content}</ul>

          </div>
        </div>
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
