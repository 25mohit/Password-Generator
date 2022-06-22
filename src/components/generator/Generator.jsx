import { useState } from 'react'
import './Generator.css'
import { number, uLetters, lLetters, sLetters } from '../assets/char'
import {RiFileCopyLine } from 'react-icons/ri'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const Generator = ({colorChange}) => {
    const [password, setPassword] = useState('')
    const [pRange, setPRange] = useState(0)
    const [upperCase, setUpperCase] = useState(false)
    const [lowerCase, setLowerCase] = useState(false)
    const [specialChara, setSpecialChara] = useState(false)
    const [numbers, setNumbers] = useState(false)

    const generatePassword = () => {
        
        let charList = ""
        if(upperCase){
            charList = charList +uLetters
        }
        if(lowerCase){
            charList = charList + lLetters
        }
        if(numbers){
            charList = charList + number
        }
        if(specialChara){
            charList = charList + sLetters
        }
        setPassword(createPassword(charList))
    }
    const createPassword = (charList) => {
        let newPassword = ''
        const charListLength = charList.length

        for(let i=0;i<pRange;i++){
            const charIndex = Math.round(Math.random()*charListLength)
            newPassword = newPassword + charList.charAt(charIndex)
        }
        return newPassword
    }
  return (
    <div className='generator-div' id={colorChange}>
                <div className="container-generator">
                            <div className="result-div">
                                <CopyToClipboard text={password}><RiFileCopyLine id='copy-icon'/></CopyToClipboard><div className="passowrd-text">{password}</div>
                            </div>
                            <button onClick={ generatePassword }>GENERATE</button>
                            <div className="features">
                            <div className="checkbox-div">
                                    {pRange}
                                    <input type="range" min="1" max="100" value={pRange} onChange={e=>setPRange(e.target.value)}/>100
                                    <p className="length-text">Length</p>
                            </div>
                                    <div className="checkbox-div">
                                            <input type="checkbox"checked={upperCase} onChange={e => setUpperCase(e.target.checked)} id='upperCase'/>
                                            <label htmlFor="upperCase">Include Upper Case</label>
                                    </div>
                                    <div className="checkbox-div">
                                            <input type="checkbox"checked={lowerCase} onChange={e => setLowerCase(e.target.checked)} id='lowerCase'/>
                                            <label htmlFor="lowerCase">Include Lower Case</label>
                                    </div>
                                    <div className="checkbox-div">
                                            <input type="checkbox"checked={numbers} onChange={e => setNumbers(e.target.checked)} id='numbers'/>
                                            <label htmlFor="numbers">Include Numbers</label>
                                    </div>
                                    <div className="checkbox-div">
                                            <input type="checkbox"checked={specialChara} onChange={e => setSpecialChara(e.target.checked)} id='specialChara'/>
                                            <label htmlFor="specialChara">Include Special Case</label>
                                    </div>
                            </div>
                </div>
    </div>
  )
}
