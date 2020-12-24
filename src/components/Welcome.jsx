import React from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './Welcome.css'

function Welcome() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='welcome'>
      <Header />
      <div className="welcome__container">
        <h3>A basic Twitter-like Webapp made by © Joshua Enrick Salvador {year}</h3>
        <div className="welcome__links">
          <Link to='/login'>
            <Button>Login</Button>
          </Link>
          <Link to='register'>
            <Button>Register</Button>
          </Link>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Welcome
