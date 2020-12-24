import React, { useState } from 'react'
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

  let history = useHistory();

  const data = {
    displayname,
    tagname,
    password,
    userImg
  }

  const registerUser = async (e) => {
    e.preventDefault()
    console.log(data);
    await axios.post('/registeruser', data)
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
    history.push('/' + displayname)
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
        </Form.Group>
        <Button type='submit' variant='primary'>Register</Button>
      </Form>
      <Link to='/login'>
        <Button>Login</Button>
      </Link>
      
    </div>
  )
}

export default RegisterLogin
