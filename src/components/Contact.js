import React from 'react'
import { useParams } from 'react-router-dom'
import Formal from "react"
import SocialLink from './SocialLinks'

const Contact = () => {
  const { type} = useParams()
  return (
    <div>
        <h2>Contact</h2>
        <p>For business and queries reach me through:</p>
        {type==="formal" && <Formal /> }
        {type==="socialLink" && <SocialLink/> }
    </div>
  )
}

export default Contact