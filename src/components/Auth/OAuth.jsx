import React from 'react'
import {FcGoogle} from "react-icons/fc"
import "./OAuth.css"

const OAuth = () => {
  return (
    <button className='google-btn'>
      <FcGoogle className='google-icon'/>
      Continue with Google
    </button>
  )
}

export default OAuth
