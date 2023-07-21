import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Mentor1, Mentor2, Mentor3 } from '../../assets/images';
import { Behance, LinkedInWhite, Twitter } from '../../assets/icons';
const MentorSection = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    const mentors = [
        {
            image: Mentor1,
            name: "Esther Howard",
            profession: "Web Designer",
            thoughts: '"Success is not final, failure is not fatal: It is the courage to continue that counts."'
        },
        {
            image: Mentor2,
            name: "Jerome Bell",
            profession: "Marketing Coordinator",
            thoughts: '"The future belongs to those who believe in the beauty of their dreams."'
        },
        {
            image: Mentor3,
            name: "Bessie Cooper",
            profession: "President of Sales",
            thoughts: '"The only limit to our realization of tomorrow will be our doubts of today."'
        },
        {
            image: Mentor1,
            name: "Esther Howard",
            profession: "Web Designer",
            thoughts: '"Success is not final, failure is not fatal: It is the courage to continue that counts."'
        },
        {
            image: Mentor2,
            name: "Jerome Bell",
            profession: "Marketing Coordinator",
            thoughts: '"The future belongs to those who believe in the beauty of their dreams."'
        },
    ]
    return (
        <section className='mentorSection'>
            <div>
                <div className='our-mentors'>Our  Mentors</div>
                <div className='description'>Your destination to find global leaders to guide you through your journey.
                    Leaders from over 30 countries. All in one place, ready to guide you.</div>
            </div>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                focusOnSelect={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            >
                {mentors.map(data => (
                    <div className='box'>
                    {/* {console.log(data.name)} */}
                        <div className='image'>
                            <img src={data.image} alt='mentor' />
                        </div>
                        <div className='description'>
                            <div className='personal'>
                                <div className='name'>{data.name}</div>
                                <div className='profession'>{data.profession}</div>
                            </div>
                            <div className='thought'>{data.thoughts}</div>
                        </div>
                        <div className='sociallinks'>
                            <img src={LinkedInWhite} alt='icons'/>
                            <img src={Twitter} alt='icons'/>
                            <img src={Behance} alt='icons'/>
                        </div>
                    </div>
                ))}
            </Carousel>
            <div className='view-all'>View all</div>
        </section>
    )
}

export default MentorSection