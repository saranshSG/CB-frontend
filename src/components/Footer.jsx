import React from 'react'
import './Footer.css'
import { FacebookNegative, InstagramNegative, LinkedInNegative, TwitterNegative } from '../assets/icons'

const Footer = (props) => {
    return (
        <footer >
            <div class="Rectangle16">
                <div className='Start'>
                    <div className='Info footerInfo'>
                        <div className='footerLogo' >
                            <div><span>CONNECT.</span><span className='border'>border</span></div>
                        </div>
                        <div className='description'>
                            Connect border is a dynamic online platform that bridges the gap between mentors and mentees, fostering valuable knowledge exchange within their respective fields.
                        </div>
                    </div>
                    <div className='Info'>
                        <div className='mainText'>Home</div>
                        <div className='otherNavItems'>
                            <div >About Us</div>
                            <div >Entrepreneurship</div>
                            <div >Community</div>
                            <div >Contact Us</div>
                        </div>
                    </div>
                    <div className='Info'>
                        <div className='mainText'>Find Us On</div>
                        <div>
                            <div className='footerIcons'>
                                <img src={LinkedInNegative} alt='linkedIn' />
                                <img src={TwitterNegative} alt='Twitter' />
                                <img src={InstagramNegative} alt='Instagram' />
                                <img src={FacebookNegative} alt='Facebook' />
                            </div>
                            <div className='have-a-question'>
                                Have a question? We're just one click away!
                            </div>
                            <div className='emailForm'>
                                    <input type='text' placeholder='Feel free to ask anything....'></input>
                                    <button type='submit'>SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='line'>
                </div>
                <div className='End'>
                    <div className='terms-privacy'>
                        <div>Term of Use</div>
                        <div>|</div>
                        <div>Privacy Policy</div>
                        <div>|</div>
                        <div>Help Center</div>
                    </div>
                    <div className='terms-privacy'>
                        <div>Copyright 2023 ©</div>
                        <div>|</div>
                        <div>All Rights Reserved</div>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer