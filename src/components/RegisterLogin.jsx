import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from '../axios'
import Header from './Header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './RegisterLogin.css'
function RegisterLogin() {
  const [displayname, setDisplayname] = useState('')
  const [tagname, setTagname] = useState('')
  const [password, setPassword] = useState('')
  const [userImg, setUserImg] = useState('')

  let [incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    setIncorrect(false)
  }, [])

  let history = useHistory();

  const data = {
    displayname,
    tagname,
    password,
    userImg
  }

  const registerUser = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/registeruser', data)
      history.replace('/' + displayname)
    } catch (error) {
      setIncorrect(true)
    }
    
  }



  return (
    <div className="registerLogin">
      <Header />
      <Form className='registerLogin__registerForm' onSubmit={registerUser} > 
        <Form.Group className='registerLogin__formGroup'>
          <Form.Label>Username: </Form.Label>
          <Form.Control type="text" placeholder='Your Name' onChange={(e) => setDisplayname(e.target.value)} value={displayname} ></Form.Control>
        </Form.Group>
        <Form.Group className='registerLogin__formGroup'>
          <Form.Label>Tagname: </Form.Label>
          <Form.Control type="text" placeholder='yourname' onChange={(e) => setTagname(e.target.value)}  value={tagname} ></Form.Control>
        </Form.Group>
        <Form.Group className='registerLogin__formGroup'>
          <Form.Label>Display Picture: </Form.Label>
          <Form.Control type="text" placeholder='https://picsum.photos/200' onChange={(e) => setUserImg(e.target.value)}  value={userImg} ></Form.Control>
        </Form.Group>
        <Form.Group className='registerLogin__formGroup'>
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}  value={password} ></Form.Control>
          <p className='register__error' style={{display: !incorrect ? 'none' : 'block'}} >Username or tagname already in use</p>
        </Form.Group>
        <Button className='registerLogin__button' type='submit' variant='primary'>Register</Button>
        <Link to='/login'>
          <Button className='registerLogin__button'>Login</Button>
        </Link>
      </Form>
      
      
    </div>
  )
}

export default RegisterLogin
