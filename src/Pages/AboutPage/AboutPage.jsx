import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './aboutPage.css'
import RightImage from '../../Images/bg1.jpg'

function AboutPage() {
  return (
    <div className="about-outer-container">
      <Navbar />
      <div className="about-title-container">
        <div className="about-title-container-left">
          <p className="about-title">About us</p>
          <h1 className="about-hero-title"><span className="grey-color">HiTech Computer Center</span> specializes in low-price, <span className="grey-color">refurbished IT hardware</span> with exceptional service.</h1>
          <p className="about-hero-paragraph">Established in 1991, HiTech Computer Center specializes in low-cost, 
            authentic computer parts and refurbished hardware from major brands. Known for quality, speed, 
            and affordability, they focus on customer satisfaction by constantly improving services, 
            aiming to provide enterprise-class IT hardware on time, on spec, and on budget.
          </p>
        </div>
        <div className="about-title-container-right">
          <div className="about-right-image-container">
            <img src={RightImage} alt="" className="about-right-image"/>
          </div>
          <div className="about-stats-container">
            <p className="our-clients-paragraph-right">Most clients are educational 
              institutions seeking affordable, used computers for learning software. 
              Major customers include schools, polytechnics, colleges, BPOs, software 
              companies, and those with annual maintenance contracts, prioritizing 
              quantity and low maintenance costs.</p>
          </div>
        </div>
      </div>
      <div className="about-second-container">
        Second-container
      </div>
    </div>
  )
}

export default AboutPage