import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import './recyclerPage.css'

import FourthImg from '../../Images/service.jpg'
import Recovery from '../../Images/recovery.jpg'
import Hardware from '../../Images/hardware.jpg'
import Footer from '../../Components/Footer/Footer'

function RecyclerPage() {
  return (
    <div className="recycler-outer-container">
      <Navbar />
      <div className="fourth-container">
          <div className="fourth-container-card">
            <div className="fourth-left-content">
              <h1 className="fourth-title">Recycling Electronic Waste.</h1>
              <p className="fourth-description-recyc">
              Hitech Electronic Waste Recycler India Private Limited focuses on promoting electronics reuse to refurbish and redistribute IT equipment to schools, nonprofits, and low-income families, creating local jobs and reducing landfill waste. When reuse isn’t possible, electronics are dismantled by trained workers in their recycling warehouse.
              </p>
            </div>
            <div className="fourth-right-content">
              <img src={FourthImg} alt="" className="fourth-container-img" />
            </div>
          </div>
        </div>
        <div className="qna-section-contas">
          
        </div>
        <Footer />
    </div>
  )
}

export default RecyclerPage