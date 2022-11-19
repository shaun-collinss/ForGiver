import React from 'react'

import { useSelector } from 'react-redux'

function Home () {
const user = useSelector(state=>state.user)
const inventory = useSelector(state => state.inventory)

  return (
    <>
      <div>
        <h1 className="Title">THE FORGIVERS</h1>
      </div>
      {user == 0? <h3>Welcome {user?.name}</h3>:<h3>Hi There login to start!</h3>}
      <div>
        <h2 className="headliner"></h2>
      </div>
      <div>
        <h2 className="headliner">The game thats based on giving to others!</h2>
      </div>
      <h2></h2>

    </>
  )
}

export default Home