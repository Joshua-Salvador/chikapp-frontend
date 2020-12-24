import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from '../axios'
import Header from './Header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'

function Login() {
  const [displayname, setDisplayname] = useState('')
  const [password, setPassword] = useState('')

  const data = {
    displayname,
    password
  }

  let history = useHistory();
  const loginUser = async (e) => {
    e.preventDefault() 
    await axios.post('/loginuser', data)
    history.push('/' + displayname)
  }
  return (
    <div className='login'>
      <Header />
      <Form className='registerLogin__loginForm' onSubmit={loginUser} > 
        <Form.Group className='registerLogin__formGroup'>
          <Form.Label>Username: </Form.Label>
          <Form.Control type="text" placeholder='Your Name' onChange={(e) => setDisplayname(e.target.value)} value={displayname} ></Form.Control>
        </Form.Group>
        <Form.Group className='registerLogin__formGroup'>
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}  value={password} ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>Login</Button>
      </Form>
      <Link to='register'>
        <Button>Register</Button>
      </Link>
    </div>
  )
}

export default Login
