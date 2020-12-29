import axios from '../axios'
import React, { useState, useEffect } from 'react'
import Chika from './Chika'
import './ChikaFeed.css'
function ChikaFeed() {



  const [chikas, setChikas] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/get-chika')
      setChikas(req.data)
    }
    fetchData()
    // return () => {
    //   setChikas([])
    // }
  }, [chikas])

  // console.log(chikas)

  return (
    <div className='chikaFeed'>
      {chikas.map((chika, index) => (
        <Chika key={index} index={index} username={chika.displayname} tagname={chika.tagname} chika={chika.chika} userImg={chika.userImg} isVerified={chika.isVerified} />
      ))}
    </div>
  )
}

export default ChikaFeed
