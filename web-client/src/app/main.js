import React from 'react'
// import { getUser } from './services/auth'

class Main extends React.Component {
  state = { loading: false, json: null }
  handleClick = e => {
    e.preventDefault()
    
    this.setState({ loading: true })
   
  }

  render() {
    const { loading, json } = this.state
   
    return (
      <>
        <h1>Your Main App</h1>
        <ul>
          <li>API: user.api placeholder</li>
          <li>ID: id placeholder</li>
        </ul>
        <hr />

        <button onClick={this.handleClick}>
          {loading ? 'Loading...' : 'Call Lambda Function'}
        </button>
        
      </>
    )
  }
}

export default Main
