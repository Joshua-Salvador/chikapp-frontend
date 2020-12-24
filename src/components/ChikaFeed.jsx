import axios from '../axios'
import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from './UserContext'
import Chika from './Chika'
import './ChikaFeed.css'
function ChikaFeed() {
  // const chikas = [
  //   {
  //     username: 'Chicken Little',
  //     tagname: "lil-chick",
  //     chika: 'The sky is falling!!!!',
  //     userImg: 'https://i.pinimg.com/originals/a8/7d/a9/a87da979fe1ba60ab9bc13308ced8e6e.jpg',
  //     isVerified: false
  //   },
  //   {
  //     username: 'Red',
  //     tagname: "redface",
  //     chika: 'Dumb pigs',
  //     userImg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/086ec545-e6e7-40da-81a3-7165477c1bb8/dagg1wd-090bc373-c1bd-4d9d-b3f1-468d0ab1b7cf.png/v1/fill/w_1600,h_2848,q_80,strp/red___angry_birds_flat_wallpaper_lockscreen__by_armaghanbashir_dagg1wd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yODQ4IiwicGF0aCI6IlwvZlwvMDg2ZWM1NDUtZTZlNy00MGRhLTgxYTMtNzE2NTQ3N2MxYmI4XC9kYWdnMXdkLTA5MGJjMzczLWMxYmQtNGQ5ZC1iM2YxLTQ2OGQwYWIxYjdjZi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.mpL35IndkM08ol-2N4-QnPN6JEyCkP1PMlQ6ufWTRdc',
  //     isVerified: false
  //   },
  //   {
  //     username: 'Blu',
  //     tagname: "themagicalfbceo",
  //     chika: "Why do I always sound nervous. I have this weird feeling I've built an app that takes over the world and used my magic skills to do magic stuff like robbing and being robin hood but with magic. ",
  //     userImg: 'https://i.pinimg.com/originals/97/db/8c/97db8c320535d799be4a7bec2eb71a6b.png',
  //     isVerified: true
  //   }
  // ]

  // const {isVerified} = useContext(UserContext)


  const [chikas, setChikas] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/get-chika')

      setChikas(req.data)
    }
    fetchData()
  })

  return (
    <div className='chikaFeed'>
      {chikas.map((chika, index) => (
        <Chika key={index} index={index} username={chika.username} tagname={chika.tagname} chika={chika.chika} userImg={chika.userImg} isVerified={chika.isVerified} />
      ))}
    </div>
  )
}

export default ChikaFeed
