import React from 'react'

import { useSelector } from 'react-redux'




function Home () {
const user = useSelector(state=>state.user)

  return (
    <div className='app'>
      {user == 0? <h1>Welcome {user?.name}</h1>:<h1>Hi There login to start!</h1>}
    </div>
  )
}

export default Home