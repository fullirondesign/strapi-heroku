import React from 'react'
import { Link, navigate } from 'gatsby'


export default () => {
  const content = { message: '', login: true }

  
  return (
    <div
      style={{
        display: 'flex',
        flex: '1',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d1c1e0',
        backgroundColor: 'aliceblue',
      }}
    >
      <span>{content.message}</span>

      <nav>
        <span>Navigate the app: </span>
        <Link to="/app/">Main</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        
      </nav>
    </div>
  )
}
