import React from 'react'
// import { isLoggedIn } from '../services/auth'
import { navigate } from 'gatsby'

class PrivateRoute extends React.Component {
  componentDidMount = () => {
      navigate(`/app/`)
      return null
    }
  

  render() {
    const { component: Component, location, ...rest } = this.props
    return <Component {...rest} />
  }
}

export default PrivateRoute
