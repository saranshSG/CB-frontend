import React from 'react'
import './Congratulation.css'
const Congratulation = () => {
  return (
    <div className='congratulationPage'>
        <div className='congratulationBox'>
            <div className='congratulationMain'>
                <div>Congratulation!</div>
                <div>You have successfully created an account.</div>
            </div>
            <div className='congratulationSubmit'>
                <div>Start by Building a Connection: Let's Get Acquainted!</div>
                <button type='submit'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Congratulation