import React from 'react'
import './Chika.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


function Chika({username, chika, userImg, tagname, isVerified, index}) {

  return (
    <div className='chika' style={{borderTop: index !== 0 ? 'none' : ''}}>
      <div className="chika__userInfo">
        <img className='chika__userImg' src={userImg} alt=""/>
        <h6 className="chika__username">{username}</h6>
        {isVerified ? <CheckCircleIcon fontSize='small' style={{color: '#6975F9', position: 'relative', top: 0, marginLeft: '5px'}} /> : ''}
        <h6 className="chika__tagname">@{tagname}</h6>
      </div>
      <div className="chika__userText">
        <p className="chika__text">{chika}</p>
      </div>
    </div>
  )
}

export default Chika
