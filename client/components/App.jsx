import React from 'react'

import { Routes, Route } from 'react-router'
import Home from './Home'
import Nav from './Nav'
import User from './User'
import About from './About'
import Login from './Login'

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
      <Route path='Login' element={<Login/>}/>
    </Routes>
  </div>
  )
}

export default App