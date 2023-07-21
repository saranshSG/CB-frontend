import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Apple, Chevron_Left, Google, LinkedIn } from '../../assets/icons'
import './Auth.css'
const Login = () => {
    return (
        <div className='LoginPage'>

            <Navbar />
            {/* Login form part */}
            <div className='loginForm'>
                <div className='backButton'>
                    <img src={Chevron_Left} alt='left' />
                    <div>BACK</div>
                </div>
                <div className='loginItems'>
                    <div className='login'>Login</div>
                    <div className='form'>
                        <div>E-mail or Phone number</div>
                        <div className='inputField'>
                            <input type='text' placeholder='yourmail@gmail.com' />
                        </div>
                        <div>Password</div>
                        <div className='inputField '>
                            <input type='password' placeholder=' * * * * * * * *' />
                        </div>
                        <div>Forgot Password?</div>
                    </div>
                    <div className='loginButton'>
                        <button type='submit'>Login</button>
                    </div>
                    <div>or</div>
                    <div className='icons'>
                        <div  className='iconBackground'>
                            <img src={Google} alt='Google'/>
                        </div>
                        <div className='iconBackground'>
                            <img src={LinkedIn} alt='LinkedIn'/>
                        </div>
                        <div className='iconBackground'>
                            <img src={Apple} alt='Apple'/>
                        </div>
                    </div>
                    <div className='toggle'>
                        <div>Don’t have an account?</div>
                        <div className='toggleSignup'>Sign Up</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login