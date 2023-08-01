import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = ({ fontcolor, logocolor }) => {
  const location = useNavigate();
  return (
    <nav className="navbar16" style={{
      color: fontcolor,
    }}>
      <div className="logo34">
        <a className="favicon18" href="/">
          <img className="group-icon1" alt="" src={logocolor === "white" ? "/logo-white.svg" : "/group.svg"} />
        </a>
        <a className="connect-border34" href="/">CONNECT BORDER</a>
      </div>
      <div className="navitem18" style={{
        color: fontcolor,
      }}>
        <div className="find-work18" onClick={(e) => { location('/community') }}>
          <div className="community36">Community</div>
        </div>
        <div className="find-work18" onClick={(e) => { location('/blogposts') }}>
          <div className="community36">Blog Posts</div>
        </div>
        <div className="find-work18" onClick={(e) => { location('/entrepreneurship') }}>
          <div className="community36">Entrepreneurship</div>
        </div>
        <div className="find-work18" onClick={(e) => { location('/events') }}>
          <div className="community36">Events</div>
        </div>
      </div>
      <div className="buttons18" >
        <div className="pricing36" style={{
          border: "" || "1px solid" + fontcolor,
        }}>
          <div className="pricing37" onClick={(e) => { location('/pricing') }} >Pricing</div>
        </div>
        <div className="sign-up19">
          <div className="pricing37" onClick={(e) => { location('/login') }}>Log in</div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar