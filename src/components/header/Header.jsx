import React from 'react'
import './Header.css'
import { IoIosColorPalette } from 'react-icons/io'

export const Header = ({ setColorChange, colorChange}) => {
  return (
    <div className='header-div' id={colorChange}>
        <div className="header-container">
            <IoIosColorPalette className='icon-color' onClick={() => setColorChange(colorChange == 'dark' ? 'light' : 'dark')}/>
        </div>
    </div>
  )
}
