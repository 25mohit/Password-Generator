import React, { useEffect } from 'react'
import './ErrorModal.css'

export const ErrorModal = ({ message, setShowError, id }) => {
    useEffect(() => {
        const interval = setInterval(() => {
            setShowError(false)
        },1500)
        return () => {
            clearInterval(interval)
        }
    },[])

  return (
    <div className='error-modal-window' id={ id }>
            <div className="container-modal">
                <div className="sidebar"></div>
                    <p className="mesage">{message}</p>
            </div>  
    </div>
  )
}
