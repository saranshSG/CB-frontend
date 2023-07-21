import React from 'react'
import './Homepage.css'
import Footer from '../../components/Footer'
import Hero from './Hero'
import RequestMentor from './RequestMentor'
import MentorSection from './MentorSection'
import Overview from './Overview'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
const Homepage = () => {
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        gap: "100px"
      }}>
        <Hero />
        <RequestMentor />
        <MentorSection />
        <Overview />
        <Testimonials/>
        <FAQ/>
      </div >
      <Footer />
    </div>


  )
}

export default Homepage