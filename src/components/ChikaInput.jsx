import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from '../axios'
import { UserContext } from './UserContext'
import './ChikaInput.css'


function ChikaInput() {
  
  const [chika, setChika] = useState('')
  const context = useContext(UserContext);
  const {username, tagname, userImg, isVerified} = context
  const data = {
    username,
    tagname,
    isVerified,
    userImg,
    chika
  }

  const handleChange = (e) => {
    e.preventDefault()
    setChika(e.target.value)
  }

  const submitChika = async (e) => {
    e.preventDefault()
    setChika('')
    console.log(data);
    await axios.post('/create-chika', data);
  }

  return (
    <div className='chikaInput'>
      
      <Form id="form" className='chikaInput__form' onSubmit={submitChika} >
        <img src={userImg} alt="" className="chikaInput__profileImg"/> 
        <Form.Group className='chikaInput__formGroup' controlId='textArea'>
          <Form.Control name="chika" className='chikaInput__textarea' border='none' placeholder="Let's Chika" as='textarea' minLength={1} rows={3} size='lg' value={chika} onChange={handleChange}/>
          <Button type="submit" className='chikaInput__button rounded-pill' variant='primary' >Chika</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default ChikaInput
