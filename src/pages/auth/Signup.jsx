import React from 'react'
import './Auth.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Apple, Chevron_Left, Google, LinkedIn } from '../../assets/icons'

const Signup = () => {
    return (
        <div>
            <Navbar />

            <div className='loginForm signupForm'>
                <div className='backButton'>
                    <img src={Chevron_Left} alt='left' />
                    <div>BACK</div>
                </div>
                <div className='loginItems'>
                    <div className='signup'>Signup</div>
                    <div className='form'>
                        <div>E-mail</div>
                        <div className='inputField'>
                            <input type='text' placeholder='yourmail@gmail.com' />
                        </div>
                        <div>Phone number</div>
                        <div className='inputField phoneInput'>
                            <input type='text' placeholder='+91' />
                            <input type='text' placeholder='(IND)' />
                            <span>|</span>
                            <input type='text' placeholder='Phone number' />
                        </div>
                        <div>Password</div>
                        <div className='inputField '>
                            <input type='password' placeholder=' * * * * * * * *' />
                        </div>
                        <div>Confirm Password</div>
                        <div className='inputField '>
                            <input type='password' placeholder=' * * * * * * * *' />
                        </div>
                    </div>
                    <div className='loginButton signupButton'>
                        <button type='submit'>Sign Up</button>
                    </div>
                    <div>or</div>
                    <div className='icons'>
                        <div className='iconBackground'>
                            <img src={Google} alt='Google' />
                        </div>
                        <div className='iconBackground'>
                            <img src={LinkedIn} alt='LinkedIn' />
                        </div>
                        <div className='iconBackground'>
                            <img src={Apple} alt='Apple' />
                        </div>
                    </div>
                    <div className='toggle'>
                        <div className='toggleText'>Don’t have an account?</div>
                        <div className='toggleSignin'>Sign Up</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup