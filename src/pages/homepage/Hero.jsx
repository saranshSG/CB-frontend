import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { sliderData } from '../../assets/images';
import Navbar from '../../components/Navbar';
const Hero = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    return (
        <section className='hero'>
            <Navbar />
            <div className='heading'>Connecting global leaders to aspiring minds</div>
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
                {sliderData.map(data => (
                    <img src={data.url} alt='Slider' width='100%' />
                ))}
            </Carousel>
            <div className='topics'>
                <div className='topic'>Talent Visa</div>
                <div className='topic'>Career Guidance</div>
                <div className='topic'>Marketing</div>
                <div className='topic'>Startup Mentor</div>
            </div>
            <div className='CTAs'>
                <div className='subheading'>Explore your interest with expert mentorship from leaders around the globe.</div>
                <div className='Button'>FIND</div>
            </div>

        </section>
    )
}

export default Hero