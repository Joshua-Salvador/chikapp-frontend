import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from '../axios'
import Header from './Header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css'

function Login() {
  const [displayname, setDisplayname] = useState('')
  const [password, setPassword] = useState('')

  let [incorrect, setIncorrect] = useState(false);

  const data = {
    displayname,
    password
  }

  useEffect(() => {
    setIncorrect(false)
  }, [])

  let history = useHistory();
  const loginUser = async (e) => {
    e.preventDefault() 
    try {
      await axios.post('/loginuser', data)
      history.replace('/' + displayname)
    } catch (err) {
      setIncorrect(true)
    }
    
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
          <p className='login__incorrectPassword' style={{display: !incorrect ? 'none' : 'block'}} >Check your username or password</p>
        </Form.Group>
        <Button className='registerLogin__button' type='submit' variant='primary'>Login</Button>
        <Link to='register'>
          <Button className='registerLogin__button' >Register</Button>
        </Link>
      </Form>
      
    </div>
  )
}

export default Login
