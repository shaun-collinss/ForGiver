import React from 'react'

import { Link } from 'react-router-dom'



function Nav () {
  return(
    <>
      <Link to='/'>Home</Link>
      <Link to='/User'>UserDetails</Link>
      <Link to='/About'>About</Link>
      <Link to='/Login'>Login</Link>
    </>
  )
}

export default Nav