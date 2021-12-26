import React from 'react'

import { useSelector } from 'react-redux'
import Nav from './Nav'




function Home () {
const user = useSelector(state=>state.user)

  return (
    <>
      {user == 0? <h1>Welcome {user?.name}</h1>:<h1>Hi There login to start!</h1>}
    </>
  )
}

export default Home