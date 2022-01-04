import React from 'react'

import { Routes, Route } from 'react-router'
import Home from './Home'
import Nav from './Nav'
import User from './User'
import About from './About'

function App () {
  return (
    <div className='app'>
      <div>
        <Nav/>
      </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Nav' element={<Nav/>}/>
      <Route path='User' element={<User/>}/>
      <Route path='About' element={<About/>}/>
    </Routes>
  </div>
  )
}

export default App