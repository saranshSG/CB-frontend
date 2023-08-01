import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Apple, Chevron_Left, Google, LinkedIn } from '../../assets/icons'
import './Auth.css'
import { API_URL } from '../../services'
import axios from 'axios'

const Signup = () => {
    const location = useNavigate()

    const [data, setData] = useState({});
    const [confirmpassword, setConfirmpassword]= useState("");
    const [error, setError] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(value);
        setData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.password === confirmpassword) {
            await axios.post(`${API_URL}/auth/signup`, data).then(res => {
                location('/login')
            }).catch(e => {
                setError(e.response.data)
            })
        }
        else {
            setError("Password not matched!")
        }
    }
    return (
        <div>
            <Navbar />
            <form action='POST'>
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
                                <input
                                    name='email'
                                    type='email'
                                    placeholder='yourmail@gmail.com'
                                    value={data.email || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>Phone number</div>
                            <div className='inputField phoneInput'>
                                <input type='text' placeholder='+91' />
                                <input type='text' placeholder='(IND)' />
                                <span>|</span>
                                <input
                                    type='number'
                                    placeholder='Phone number'
                                    name='phoneNumber'
                                    value={data.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>Password</div>
                            <div className='inputField '>
                                <input
                                    name='password'
                                    type='text'
                                    placeholder=' * * * * * * * *'
                                    value={data.password || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>Confirm Password</div>
                            <div className='inputField '>
                                <input
                                    type='text'
                                    placeholder=' * * * * * * * *'
                                    onChange={(e)=>{setConfirmpassword(e.target.value)}} />
                            </div>
                        </div>
                        <p style={{
                            color: 'red'
                        }}>{error}</p>
                        <div className='loginButton signupButton'>
                            <button type='submit' onClick={handleSubmit}>Sign Up</button>
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
                            <div className='toggleText'>Already have an account?</div>
                            <div className='toggleSignin' onClick={() => location('/login')}>Sign In</div>
                        </div>
                    </div>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Signup
