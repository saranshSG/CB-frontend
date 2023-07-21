import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css"
import { Testimonial1 } from '../../assets/images';

const Testimonials = () => {
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
    const testimonials = [
        {
            id: 1,
            image: Testimonial1,
            name: 'Marvin McKinney',
            about: 'Marketing Coordinator',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
        },
        {
            id: 2,
            image: Testimonial1,
            name: 'Marvin McKinney',
            about: 'Marketing Coordinator',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
        },
        {
            id: 3,
            image: Testimonial1,
            name: 'Marvin McKinney',
            about: 'Marketing Coordinator',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
        },
    ]
  return (
    <section className='testimonials'>
        <div className='heading'>What users says?</div>
        {/* <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                focusOnSelect={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            >
                {testimonials.map(data => (
                    <>
                    {console.log(data.image)}
                    <img src={data.image} alt='Slider' width='100px' />
                    </>
                ))}
            </Carousel> */}
    </section>
  )
}

export default Testimonials