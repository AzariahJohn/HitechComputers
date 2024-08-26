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
          <a href="https://maps.app.goo.gl/NJS7q4jaZRs35Xzy9">
            <div className='map-inner-container'>
              <img src="https://storage.googleapis.com/lb-images-asia/in/2245103/staticmap.png_webp.webp" alt="" className='map-image'/>
            </div>
          </a>
          <h1 className="company-name-address">HITECH COMPUTER CENTRE</h1>
          <p className="address-of-company">Ground Floor, City Centre Plaza,
            No.3,Mount Road, Chennai - 600 002.
          </p>   
          <p className="phone-num-addr">
            <span className="ind-bold">Contact No: </span> 044-28549242,28419941
          </p> 
          <p className="phone-num-addr">
            <span className="ind-bold">Mobile: </span> 9444049242, 9840889242
          </p>
          <p className="phone-num-addr">
            <span className="ind-bold">Mail: </span> hitech@hitechcomputers.in
          </p>
          <p className="phone-num-addr">
            <span className="ind-bold">Mail: </span>Sales@hitechcomputers.in
          </p>
          <p className="phone-num-addr">
            <span className="ind-bold">Web: </span> www.hitechcomputers.in
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage