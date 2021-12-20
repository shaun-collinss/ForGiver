import React from 'react'

import { Routes, Route } from 'react-router'
import Home from './Home'
import Nav from './Nav'

function App () {
  return (
    <div className='app'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Nav' element={<Nav/>}/>
    </Routes>
  </div>
  )
}

export default App