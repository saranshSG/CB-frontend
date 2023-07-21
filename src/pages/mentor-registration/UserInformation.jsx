import React from 'react'
import './index.css'
import { BACK, Calendar_Days, Chevron_Left, LinkedInNegative, angledowndark } from '../../assets/icons'
const UserInformation = () => {
    return (
        <div className='UserInfo' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="UserinformationStep1" style={{ width: 1056, height: 1168, position: 'relative', background: '#94989B', borderRadius: 22, overflow: 'hidden' }}>
                <div className="Frame427320637" style={{ left: 202.50, top: 154.50, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'inline-flex' }}>
                    <div className="City" style={{ width: 652, height: 117, position: 'relative' }}>
                        <div className="CityTextbox" style={{ width: 316, height: 67, left: 0, top: 50, position: 'absolute' }}>
                            <div className="Rectangle4" style={{ width: 316, height: 67, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 15 }} />
                            <div className="FirstName" style={{ left: 29, top: 18, position: 'absolute', color: '#94989B', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>First Name</div>
                        </div>
                        <div className="StateTextbox" style={{ width: 316, height: 67, left: 336, top: 50, position: 'absolute' }}>
                            <div className="Rectangle4" style={{ width: 316, height: 67, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 15 }} />
                            <div className="LastName" style={{ left: 29, top: 18, position: 'absolute', color: '#94989B', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Last Name</div>
                        </div>
                        <div className="Label" style={{ left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Full Name</div>
                    </div>
                    <div className="Designation" style={{ width: 652, height: 117, position: 'relative' }}>
                        <div className="DesignationTextbox" style={{ width: 652, height: 67, left: 0, top: 50, position: 'absolute' }}>
                            <div className="Rectangle4" style={{ width: 652, height: 67, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 15 }} />
                            <div className="ExUiUxDesigner" style={{ width: 182, left: 29, top: 18, position: 'absolute', color: '#94989B', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Ex. UI/UX Designer</div>
                        </div>
                        <div className="Label" style={{ left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>What do you do?</div>
                        <div className="ArrowAngleDown" style={{ width: 40, height: 40, left: 591.50, top: 63, position: 'absolute' }}>
                            <img src={angledowndark} alt='downArrow' />
                        </div>
                    </div>
                    <div className="DateField" style={{ height: 107, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 11, display: 'flex' }}>
                        <div className="Label" style={{ alignSelf: 'stretch', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Date of Birth</div>
                        <div className="Textbox" style={{ alignSelf: 'stretch', paddingLeft: 21, paddingRight: 21, paddingTop: 18, paddingBottom: 18, background: '#D9D9D9', borderRadius: 15, overflow: 'hidden', justifyContent: 'space-between', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div className="YourmailGmailCom" style={{ color: '#94989B', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>13/06/2023</div>
                            <div className="CalendarCalendarDays" style={{ width: 24, height: 24, position: 'relative' }}>
                                <img src={Calendar_Days} alt='calendar' />
                            </div>
                        </div>
                    </div>
                    <div className="City" style={{ width: 652, height: 117, position: 'relative' }}>
                        <div className="CityTextbox" style={{ width: 316, height: 67, left: 0, top: 50, position: 'absolute' }}>
                            <div className="Rectangle4" style={{ width: 316, height: 67, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 15 }} />
                            <div className="City" style={{ width: 40, left: 29, top: 18, position: 'absolute', color: '#94989B', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>City </div>
                            <div className="ArrowAngleDown" style={{ width: 40, height: 40, left: 263, top: 13, position: 'absolute' }}>
                                <img src={angledowndark} alt='downArrow' />
                            </div>
                        </div>
                        <div className="StateTextbox" style={{ width: 316, height: 67, left: 336, top: 50, position: 'absolute' }}>
                            <div className="Rectangle4" style={{ width: 316, height: 67, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 15 }} />
                            <div className="State" style={{ width: 53, left: 29, top: 18, position: 'absolute', color: '#94989B', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>State</div>
                            <div className="ArrowAngleDown" style={{ width: 40, height: 40, left: 264.50, top: 13.50, position: 'absolute' }}>
                                <img src={angledowndark} alt='downArrow' />
                            </div>
                        </div>
                        <div className="Label" style={{ left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Where are you from?</div>
                    </div>
                    <div className="Frame427320635" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                        <div className="Age" style={{ width: 316, height: 117, position: 'relative' }}>
                            <div className="AgeTextbox" style={{ width: 316, height: 67, left: 0, top: 50, position: 'absolute' }}>
                                <div className="Rectangle4" style={{ width: 316, height: 67, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 15 }} />
                                <div className="Age" style={{ width: 40, left: 29, top: 18, position: 'absolute', color: '#94989B', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Age </div>
                            </div>
                            <div className="Label" style={{ left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Age</div>
                        </div>
                        <div className="Gender" style={{ width: 316, height: 117, position: 'relative' }}>
                            <div className="GenderTextbox" style={{ width: 316, height: 67, left: 0, top: 50, position: 'absolute' }}>
                                <div className="Rectangle4" style={{ width: 316, height: 67, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 15 }} />
                                <div className="Gender" style={{ width: 75, left: 29, top: 18, position: 'absolute', color: '#94989B', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Gender</div>
                                <div className="ArrowAngleDown" style={{ width: 40, height: 40, left: 264.50, top: 14.50, position: 'absolute' }}>
                                    <img src={angledowndark} alt='downArrow' />
                                </div>
                            </div>
                            <div className="Label" style={{ left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Gender</div>
                        </div>
                    </div>
                    <div className="Sociallinks" style={{ width: 652, height: 119, position: 'relative' }}>
                        <div className="Rectangle4" style={{ width: 652, height: 67, left: 0, top: 52, position: 'absolute', background: '#D9D9D9', borderRadius: 15 }} />
                        <div className="Label" style={{ left: 1, top: 0, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Social Links</div>
                        <div className="AddMore" style={{ left: 550, top: 2, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '500', textDecoration: 'underline', wordWrap: 'break-word' }}>Add more</div>
                        <div className="Frame427320638" style={{ width: 330, height: 30, left: 35, top: 71, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 34, display: 'inline-flex' }}>
                            <div className="LinkedinNegative" style={{ width: 24, height: 24, position: 'relative' }}>
                                <img src={LinkedInNegative} alt='downArrow' />
                            </div>
                            <div className="HttpsWwwLinkedinCom" style={{ width: 272, color: '#565656', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>https://www.linkedin.com/</div>
                        </div>
                    </div>
                    <div className="Frame427320636" style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex' }}>
                        <div className="OtherSendotpBtn" style={{ width: 204, height: 60, paddingLeft: 34, paddingRight: 34, paddingTop: 16, paddingBottom: 16, background: '#5F22D9', borderRadius: 58, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex' }}>
                            <div className="SendOtp" style={{ textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Next</div>
                        </div>
                        <div className="OtherCancelBtn" style={{ width: 204, height: 60, paddingLeft: 101, paddingRight: 101, paddingTop: 16, paddingBottom: 16, borderRadius: 58, overflow: 'hidden', border: '1px white solid', justifyContent: 'center', alignItems: 'center', gap: 35, display: 'flex' }}>
                            <div className="Cancel" style={{ textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word' }}>Cancel</div>
                        </div>
                    </div>
                </div>
                <div className="OtherBackbtn" style={{ height: 28, paddingLeft: 20, paddingRight: 20, paddingTop: 4, paddingBottom: 4, left: 90.50, top: 76.50, position: 'absolute', background: 'white', borderRadius: 49, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div className="Frame27" style={{ width: 52, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                        <div className="ArrowChevronLeft" style={{ width: 20, height: 20, position: 'relative' }}>
                            <img src={Chevron_Left} alt='left'/>
                            
                        </div>
                        <img src={BACK} alt='left'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInformation