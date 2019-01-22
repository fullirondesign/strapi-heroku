import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import NavBar from './components/NavBar'

import Main from './main'


const App = () => {
  return (
    <Layout>
      <NavBar />
      <Router>
        {/* <PrivateRoute path="/app/profile" component={Profile} /> */}
        <PublicRoute path="/app" component={Main} >
          
        </PublicRoute>
      </Router>
    </Layout>
  )
}
function PublicRoute(props) {
  return <div>{props.children}</div>
}

export default App
