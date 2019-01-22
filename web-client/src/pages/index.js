import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great!2</p>
    <Link to="/admin">Strapi admin panel is available at /admin.</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> 
    <Link to="/page-3/">Go to page 3 - posts</Link> 
    <Link to="/app/">
                      <b>Go to App (with Netlify Identity)</b>
                    </Link>{' '}
  </Layout>
)

export default IndexPage
