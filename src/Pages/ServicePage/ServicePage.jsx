import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import RightImage from '../../Images/bg2.jpg'
import Footer from '../../Components/Footer/Footer'
import './servicePage.css'


function ServicePage() {
  return (
    <div className="service-outer-container">
      <Navbar />
      <div className="service-page-mods">
        <div className="about-title-container-left">
          <p className="about-title">Servies</p>
          <h1 className="about-hero-title">Top Laptop Repair Services in Chennai, HiTech 10 Years of Expert Solutions</h1>
          <p className="about-hero-paragraph">Laptop Service @ HITECH COMPUTER CENTRE is a trusted laptop repair provider 
            in Chennai, with over 10 years of experience and multiple branches. Their expert technicians specialize in 
            servicing all major laptop brands like Dell, HP, Lenovo, and more. They offer a wide range of services, 
            including motherboard chip-level repairs, screen replacements, and data recovery, ensuring top-quality 
            solutions for any laptop issue.
          </p>
        </div>
        <div className="about-title-container-right">
          <div className="about-right-image-container">
            <img src={RightImage} alt="" className="about-right-image"/>
          </div>
          <div className="about-stats-container">
            <p className="our-clients-paragraph-right">In addition to repairs, HITECH provides original and compatible 
              accessories such as batteries, adapters, and hard drive upgrades. Their skilled team can handle complex 
              component-level repairs, addressing issues like display problems and motherboard faults. With fast turnaround times, 
              reliable service, and convenient pickup and drop-off options, HITECH is dedicated to meeting all your laptop repair 
              needs efficiently and professionally.
            </p>
          </div>
        </div>
      </div>
      <h1 className="our-services-title">Our Services.</h1>
      <div className="about-second-container margin-top-abt-ctr">
        <div className="services-card">
          <p className="service-name">Virus Removal</p>
        </div>
        <div className="services-card">
          <p className="service-name">Windows Re-Installation</p>
        </div>
        <div className="services-card">
          <p className="service-name">Keyboard and Button Repair</p>
        </div>
        <div className="services-card">
          <p className="service-name">LCD Screen Repair and Replacement</p>
        </div>
        <div className="services-card">
          <p className="service-name">DC Jack Repair</p>
        </div>
        <div className="services-card">
          <p className="service-name">Hard Drive</p>
        </div>
        <div className="services-card">
          <p className="service-name">Memory Upgrades</p>
        </div>
        <div className="services-card">
          <p className="service-name">Cleaning</p>
        </div>
        <div className="services-card">
          <p className="service-name">Data Recovery</p>
        </div>
        <div className="services-card">
          <p className="service-name">Data Backup</p>
        </div>
        <div className="services-card">
          <p className="service-name">Upgrades</p>
        </div>
        <div className="services-card">
          <p className="service-name">Blue Screen Fix</p>
        </div>
        <div className="services-card">
          <p className="service-name">Freeze Up Fix</p>
        </div>
        <div className="services-card">
          <p className="service-name">Tune Up</p>
        </div>
        <div className="services-card">
          <p className="service-name">Make it Faster</p>
        </div>
        <div className="services-card">
          <p className="service-name">Make it Work</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ServicePage