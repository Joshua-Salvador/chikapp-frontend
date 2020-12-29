import React from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import './Welcome.css'

function Welcome() {
  const date = new Date()
  const year = date.getFullYear()

  const history = useHistory()

  const login = () => {
    history.replace('/login')
  }

  const register = () => {
    history.replace('/register')
  }

  return (
    <div className='welcome'>
      <Header />
      <div className="welcome__container">
        <h3 className='welcome__statement' >A basic Twitter-like Webapp Clone made by © Joshua Enrick Salvador {year}</h3>
        <div className="welcome__links">
            <Button onClick={login}>Login</Button>
            <Button onClick={register}>Register</Button>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Welcome
