import React from 'react';
import { Link } from 'react-router-dom';


export const Welcome = ({name}) => {
  return (
    <div>
      <h1>Welcome{name}
      </h1>
      <p>
      <Link to='/'>Logout</Link>
      </p>
    </div>
    
  )
}
