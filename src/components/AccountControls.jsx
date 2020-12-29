import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import axios from '../axios'
import { useHistory } from 'react-router-dom'
import { UserContext } from './UserContext'
import './AccountControls.css'

function AccountControls() {
  const context = useContext(UserContext)
  const {username} = context
  const history = useHistory()
  const logout = async (e) => {
    e.preventDefault()
    await axios.post('/logout', {username})
    history.replace('/login')
  }
  return (
    <div className='accountControls'>
      <Button className='accountControls__button' onClick={logout}>Log Out</Button>
    </div>
  )
}

export default AccountControls
