import React from 'react'

import { Link } from 'react-router-dom'



function Nav () {
  return(
    <>
      <Link to='/'>Home</Link>
      <Link to='/user'>UserDetails</Link>
    </>
  )
}

export default Nav