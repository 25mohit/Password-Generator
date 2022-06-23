import React from 'react'
import './Footer.css'
import {IoMdInformation} from 'react-icons/io'

export const Footer = ({setShowModal}) => {
  return (
    <div className='footer-div-main'>
        <p className="icon-footer"><IoMdInformation onClick={() => {setShowModal(true)}}/></p>
    </div>
  )
}
