import React, { useState } from 'react'
import './LoginSignup.css'
import crossIcon from '../../Assets/assets/cross_icon.png'

const LoginSignup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-signup'>
        <form action="" className='login-container'>
            <div className='heading-btn'>
                <h2>{currState}</h2>
                <img src={crossIcon} onClick={() => setShowLogin(false)} alt="" />
            </div>
            <div className='inputs-btn'>
                {currState === "Login"?<></>:<input type="text" className='fields' placeholder='Enter name' required />}
                <input type="email" className='fields' placeholder='Enter email' required />
                <input type="password" className='fields' placeholder='Enter password' required />
                <div className='check'>
                    <input type="checkbox" />
                    <label htmlFor="">Agree terms & policies</label>
                </div>
                <button>{currState}</button>
                <div className='login-signup-links'>
                    {currState === "Login"?
                    <p>Not have an account? <span onClick={() => setCurrState("Sign up")}>Register here</span></p>:            
                    <p>If have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
                </div>
            </div>
        </form>


      
    </div>
  )
}

export default LoginSignup
