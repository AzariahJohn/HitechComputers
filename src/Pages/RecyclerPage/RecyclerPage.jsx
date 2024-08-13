import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import './recyclerPage.css'

import FourthImg from '../../Images/service.jpg'
import Recovery from '../../Images/recovery.jpg'
import Hardware from '../../Images/hardware.jpg'

function RecyclerPage() {
  return (
    <div className="recycler-outer-container">
      <Navbar />
      <div className="fourth-container">
          <div className="fourth-container-card">
            <div className="fourth-left-content">
              <h1 className="fourth-title">Recycling Electronic Waste.</h1>
              <p className="fourth-description-recyc">Hitech Electronic Waste Recycler India Private Limited's policy goal is to promote electronics reuse such that a significant number of good useable IT equipment can be collected and refurbished and made available to others in need of all electronic recycling legislation. Electronics reuse has good local 'green collar' job creation potential. Newer IT equipment is diverted from collection streams so it can be refurbished and put back in use by schools, nonprofit charities, libraries, and low-income families - rather than all the material collected going to destruction as is the case now in nearly all electronics recycling legislation.
              Recycling is not the most effective way to keep computers and other technology out of landfills. A more important goal for us at Hitech Electronic Waste Recycler India Private Limited is reuse. However, when electronics come into our receiving area that we can't grant or sell at a low cost in our ReUSE Store, they are sent to our recycling warehouse for dismantling. Almost all of the electronics deconstruction is done by workers - many of whom have come to Hitech Electronic Waste Recycler to receive job and/or social skills training.
              </p>
            </div>
            <div className="fourth-right-content">
              <img src={FourthImg} alt="" className="fourth-container-img" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default RecyclerPage