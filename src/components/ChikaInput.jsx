import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from '../axios'
import { UserContext } from './UserContext'
import {useHistory} from 'react-router-dom'
import './ChikaInput.css'


function ChikaInput() {
  const history = useHistory()
  const [chika, setChika] = useState('')
  const context = useContext(UserContext);
  // console.log(context)
  const {displayname, username, tagname, userImg, isVerified} = context
  const data = {
    username,
    displayname,
    tagname,
    isVerified,
    userImg,
    chika
  }

  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
  };


  const handleChange = (e) => {
    e.preventDefault()
    setChika(prev => e.target.value)
  }

  const submitChika = async (e) => {
    e.preventDefault()
    if (chika === '') {
      return setShow(true)
    } else {
      setChika('')
      await axios.post('/create-chika', data);
      
    }   
    
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
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Oops...</Modal.Title>
        </Modal.Header>
        <Modal.Body>It looks like you tried to send an empty chika</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ChikaInput
