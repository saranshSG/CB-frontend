import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Apple, Chevron_Left, Google, LinkedIn } from '../../assets/icons'
import './Auth.css'
import { API_URL } from '../../services'
import axios from 'axios'

const Login = () => {
    const location = useNavigate();
    const [data, setData] = useState({});
    const [error, setError] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`${API_URL}/auth/login`, data).then(res => {
            location('/congratulation')
            // console.log(res.data);
        }).catch(e => {
            setError(e.response.data)
        })
    }

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
                            <input
                                name='email'
                                type='email'
                                placeholder='yourmail@gmail.com'
                                onChange={handleChange}
                                value={data.email || ""} />
                        </div>
                        <div>Password</div>
                        <div className='inputField '>
                            <input
                                name='password'
                                type='password'
                                placeholder=' * * * * * * * *'
                                value={data.password || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div>Forgot Password?</div>
                    </div>
                    <p style={{
                        color: 'red'
                    }}>{error}</p>
                    <div className='loginButton'>
                        <button type='submit' onClick={handleSubmit}>Login</button>
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
                        <div>Don’t have an account?</div>
                        <div className='toggleSignup' onClick={()=>location('/signup')}>Sign Up</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login