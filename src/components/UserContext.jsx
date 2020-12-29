import React, { useState, useEffect, createContext } from 'react'
import { useParams } from "react-router-dom";
import axios from '../axios'

export const UserContext = createContext()

export const UserProvider = (props) => {
  const [user, setUser] = useState({})

  const { account } = useParams();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const request = await axios.get('/' + account);
        const { _id, username, displayname, tagname, chikaId, userImg, isVerified, isAuthenticated} = request.data;
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
      } catch (error) {
      }
      return () => setUser({})
    }
    fetchUserData()
   
  }, [])

  return (
    
    <UserContext.Provider value={user} >
      {props.children}
    </UserContext.Provider> 
  );
}
