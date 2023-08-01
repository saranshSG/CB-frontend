import React from 'react'
// importing emailjs
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const location= useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t2u0dse', 'template_w6rl8dj', form.current, 'sDSMz005V_xZefHn8')
      e.target.reset();
      alert("Message sent successfully!");
    };
    return (
        <div className="footersection16">
            <div className="contents16">
                <div className="logocontent16">
                    <div className="logo35">
                        <div className="connect-border35">CONNECT BORDER</div>
                    </div>
                    <div className="connect-border-is16">
                        Connect border is a dynamic online platform that bridges the gap
                        between mentors and mentees, fostering valuable knowledge exchange
                        within their respective fields.
                    </div>
                </div>
                <div className="home32">
                    <div className="home33" onClick={()=>{location('/')}}>Home</div>
                    <div className="community-blog-posts-container16">
                        <p className="grow-your-startup1" onClick={()=>{location('/community')}}>Community</p>
                        <p className="grow-your-startup1" onClick={()=>{location('/blogposts')}}>Blog Posts</p>
                        <p className="grow-your-startup1" onClick={()=>{location('/entrepreneurship')}}>Entrepreneurship</p>
                        <p className="grow-your-startup1" onClick={()=>{location('/events')}}>Events</p>
                    </div>
                </div>
                <div className="home32">
                    <div className="home33" onClick={()=>{location('/youtube')}}>Company</div>
                    <div className="community-blog-posts-container16">
                        <p className="grow-your-startup1" onClick={()=>{location('/about')}}>About us</p>
                        <p className="grow-your-startup1" onClick={()=>{location('/contact')}}>Contact us</p>
                        <p className="grow-your-startup1" onClick={()=>{location('/join')}}>Join Us</p>
                    </div>
                </div>
            </div>
            <div className="followuson-parent14">
                <div className="followuson16">
                    <div className="follow-us-on16">
                        <div className="home33">Find us on</div>
                        <div className="linkedin-negative-parent14">
                            <img
                                className="sociallinkedin-white-icon31"
                                alt=""
                                src="/linkedin--negative22.svg"
                            />
                            <img
                                className="twitter-negative16"
                                alt=""
                                src="/twitter--negative16.svg"
                            />
                            <img
                                className="sociallinkedin-white-icon31"
                                alt=""
                                src="/instagram--negative13.svg"
                            />
                            <img
                                className="socialbehance-icon29"
                                alt=""
                                src="/group-7213.svg"
                            />
                        </div>
                    </div>
                    <div className="send32">
                        <div className="have-a-question16">
                            Have a question? We're just one click away!
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div style={{
                                display: "flex",
                                width: "505px",
                                padding: "7px 14px",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderRadius: "46px",
                                background: "var(--light-mode-grey-200, #E5E5E5)"
                            }}>
                                <input type="text" name="message" id="message" placeholder='Feel free to ask anything....' style={{
                                    color: "var(--light-mode-grey-300, #858585)",
                                    fontSize: "16px",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "182.5%",
                                    letterSpacing: "0.48px",
                                    border: "none",
                                    background: "transparent",
                                    outline: 'none',
                                    width: "100%"
                                }} required />
                                <div className="btn47" >
                                    <button type='submit' className='can-i-have1' style={{
                                        background: "transparent",
                                        border: 'none',
                                        color: "#fff",
                                        cursor: "pointer"
                                    }}>SEND</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="line-parent14">
                    <div className="frame-child31" />
                    <div className="bottomline16">
                        <div className="termsofuse16">
                            <div className="can-i-have1">Term of Use</div>
                            <div className="div93">|</div>
                            <div className="can-i-have1">Privacy Policy</div>
                            <div className="div93">|</div>
                            <div className="can-i-have1">Help Center</div>
                        </div>
                        <div className="copyright16">
                            <div className="can-i-have1">Copyright 2023 ©</div>
                            <div className="home33">|</div>
                            <div className="can-i-have1">All Rights Reserved</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer