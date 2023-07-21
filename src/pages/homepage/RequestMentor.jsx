import React from 'react'
import { Mensmilling } from '../../assets/images'

const RequestMentor = () => {
    return (
        <section className='RequestMentorSec'>
            <div className='content'>
                <div>Grow your startup with our entrepreneurship coterie
                    and find the perfect <span className='gurus'>gurus</span> and <span className='gurus'>incubators</span> to upscale your dream.</div>
                <div className='CTAs'>
                    <div>Have someone on your mind to guide you?
                        We’ll bring them to you!</div>
                    <div className='Button'>Request a mentor</div>
                </div>

            </div>
            <div className='mensmiling'>
                <img src={Mensmilling} alt='menSmiling'/>
            </div>
        </section>
    )
}

export default RequestMentor