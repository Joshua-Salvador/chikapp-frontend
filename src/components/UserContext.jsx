import React, { useState, useEffect, createContext } from 'react'
import { useParams } from "react-router-dom";
import axios from '../axios'

export const UserContext = createContext()

export const UserProvider = (props) => {
  const [user, setUser] = useState({})

  const { account } = useParams();

  useEffect(() => {
    async function fetchUserData() {
      const req = await axios.get('/' + account);

      const { _id, username, displayname, tagname, chikaId, userImg, isVerified, isAuthenticated} = req.data[0];

      setUser({
        _id,
        username,
        displayname, 
        tagname,
        chikaId,
        userImg,
        isVerified,
        isAuthenticated
      })
    }
    fetchUserData()
  })

  return (
    <UserContext.Provider value={user} >
      {props.children}
    </UserContext.Provider>
  );
}
