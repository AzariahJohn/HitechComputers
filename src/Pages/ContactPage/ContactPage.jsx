import React from 'react'
import './contactPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function ContactPage() {
  return (
    <div className="contact-outer-container">
      <Navbar />
      <div className="google-forms-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdaR_usp6tUqaYkeoIz5FcEcSvKsvclRABsOUFVLAuESL_HYg/viewform" 
          width="550" height="600" 
          frameborder="0" marginheight="0"
          marginwidth="0"
          className="google-forms-iframe">
        </iframe>
      </div>
      <div className="map-container">
        <div className="address-container">
          <div className='map-inner-container'>
            <iframe width="100%" className='map-iframe-edit' height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=ground%20floor,%205TH,%20FLOOR,CITY%20CENTRE%20PLAZA%203,%20Mount%20Road,%20Chennai,%20Tamil%20Nadu%20600002+(HiTech%20Computer%20center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
          <h1 className="company-name-address">HITECH COMPUTER CENTRE</h1>
          <p className="address-of-company">5th Floor, City Centre Plaza,
            No.3,Mount Road, Chennai - 600 002.
          </p>   
          <p className="phone-num-addr">
            <span className="ind-bold">Contact No: </span> 044-28549242,28419941
          </p> 
          <p className="phone-num-addr">
            <span className="ind-bold">Mobile: </span> 9444049242,9600144455
          </p>
          <p className="phone-num-addr">
            <span className="ind-bold">Mail: </span> hitech@hitechcomputers.in
          </p>
          <p className="phone-num-addr">
            <span className="ind-bold">Mail: </span>Sales@hitechcomputers.in
          </p>
          <p className="phone-num-addr">
            <span className="ind-bold">Web: </span> www.hitechcomputercentre.com
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage