import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <div class="Navbar" >
            <div class="Logo" >
                <div class="ConnectBorder" ><span >CONNECT.</span><span >border</span></div>
            </div>
            <div class="NavItems" >
                <div class="NavItem" >
                    <div class="NavItemText" >About Us</div>
                </div>
                <div class="NavItem" >
                    <div class="NavItemText" >Entrepreneurship</div>
                </div>
                <div class="NavItem" >
                    <div class="NavItemText" >Community</div>
                </div>
                <div class="NavItem" >
                    <div class="NavItemText" >Contact Us</div>
                </div>
            </div> 
            <div class="Buttons" >
                <div class="LogIn" >
                    <div >Log In</div>
                </div>
                <div class="SignUp" >
                    <div >Sign Up</div>
                </div>
            </div>
        </div>



        // <div className="Navbar" style={{ width: 1440, height: 117, paddingTop: 20, paddingBottom: 20, justifyContent: 'center', alignItems: 'center', gap: 83, display: 'inline-flex' }}>
        //     <div className="Logo" style={{ padding: 10, background: '#5B5B5B', borderRadius: 6, justifyContent: 'center', alignItems: 'center', gap: 16, display: 'flex' }}>
        //         <div className="ConnectBorder" style={{ textAlign: 'center' }}><span style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word'}}>CONNECT.</span><span style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>border</span></div>
        //     </div>
        //     <div className="NavItem" style={{ padding: 15, justifyContent: 'center', alignItems: 'center', gap: 26, display: 'flex' }}>
        //         <div className="FindWork" style={{ padding: 10, justifyContent: 'center', alignItems: 'center', gap: 1, display: 'flex' }}>
        //             <div className="AboutUs" style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>About Us</div>
        //         </div>
        //         <div className="Community" style={{ padding: 10, justifyContent: 'center', alignItems: 'center', gap: 1, display: 'flex' }}>
        //             <div className="Entrepreneurship" style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Entrepreneurship</div>
        //         </div>
        //         <div className="Membership" style={{ padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
        //             <div className="Community" style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Community</div>
        //         </div>
        //         <div className="AboutUs" style={{ padding: 10, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
        //             <div className="ContactUs" style={{ textAlign: 'center', color: 'black', fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Contact Us</div>
        //         </div>
        //     </div>
        //     <div className="Buttons" style={{ justifyContent: 'center', alignItems: 'center', gap: 20, display: 'flex' }}>
        //         <div className="LogIn" style={{ width: 87, paddingLeft: 20, paddingRight: 20, paddingTop: 17, paddingBottom: 17, borderRadius: 91, overflow: 'hidden', border: '0.50px black solid', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        //             <div className="LogIn" style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Log In</div>
        //         </div>
        //         <div className="SignUp" style={{ height: 44, paddingLeft: 27, paddingRight: 27, paddingTop: 10, paddingBottom: 10, background: 'black', borderRadius: 36, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        //             <div className="SignUp" style={{ textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Sign Up</div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Navbar