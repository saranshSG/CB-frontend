import React from 'react'
import { Pin, angledowndark } from '../../assets/icons'
const FAQ = () => {
    const FAQs = [
        {
            question: 'Can I have more than one mentor at a time?',
            answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con'
        },
        {
            question: 'Can I switch mentors if needed?',
            answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con'
        },
        {
            question: "What if I'm not satisfied with my mentor?",
            answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con'
        },
        {
            question: 'What are the benefits of being a mentor/mentees?',
            answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con'
        },
        {
            question: 'How long does a mentorship program typically last?',
            answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con'
        },
    ]
    return (
        <section className='faqs'>
            <div className='heading'>FAQs</div>
                {FAQs.map(data => (
                    <div className='faq'>
                        <div className='content'>
                            <img src={Pin} alt='pin' />
                            <div className='maincontent'>
                                <div className='question'>{data.question}
                                </div>
                                <div className='answer'>{data.answer}
                                </div>
                            </div>
                            <img src={angledowndark} alt='up-icon'/>
                        </div>
                    </div>
                ))}
        </section>
    )
}

export default FAQ