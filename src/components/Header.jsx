import React from 'react'
import './Header.css'

import {GiChicken} from 'react-icons/gi'

function Header() {
  return (
    <div className='header'>
      <GiChicken size={'3em'}/>
      <h1>Chikapp</h1>
    </div>
  )
}

export default Header
