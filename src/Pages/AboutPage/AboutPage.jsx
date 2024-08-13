import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './aboutPage.css'
import RightImage from '../../Images/bg1.jpg'
import Footer from '../../Components/Footer/Footer'

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
        <div className="abt-sec-container-wrapper">
          <h1 className="abt-sec-container-title">The Industry</h1>
          <p className="abt-sec-continer-description">Refurbished servers and networking 
            equipment save money while maintaining high quality and flexibility. We offer reliable, 
            customizable products at competitive prices, backed by rigorous testing. By choosing 
            pre-owned IT equipment, you not only reduce costs but also support environmental 
            goals of reducing, recycling, and reusing.
          </p>
        </div>
        <div className="abt-sec-container-wrapper">
          <h1 className="abt-sec-container-title">Our Product</h1>
          <p className="abt-sec-continer-description">We stock a wide range of genuine refurbished 
            and used parts for servers, desktops, and notebooks from major OEMs like Dell, HP, and IBM. 
            Offering 50-80% savings, we provide strategic sourcing and procurement to reduce supply chain costs. 
            Our commitment to excellent customer service ensures long-term support and cost-effective solutions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage