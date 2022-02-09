import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { loginUser } from '../actions/users'

function Login () {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: ''
  })

  function handleChange (evt) {
    evt.preventDefault()
    const { name, value } = evt.target
    const updated = { ...form, [name]: value }
    setForm(updated)
  }

  function handleSubmit (evt) {
    evt.preventDefault()
    const action = loginUser(form)
    dispatch(action)
    navigate('/Home')
  }


return (
  <>
    <h2 className='header'>Login</h2>
    <div className='container'>
      <form onSubmit={handleSubmit} className='login'>
        <label htmlFor='username'>username: <input id='username' onChange={handleChange} value={form.username} name='username' required/></label>
        <label htmlFor='password'>password: <input id='password' type='password' onChange={handleChange} value={form.password} name='password' required/></label>
        <button>Login</button>
      </form>
    </div>
  </>
)
}

export default Login