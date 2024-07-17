import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="full-page-navbar">
        <h1 className="logo">HCC</h1>
        <div className="nav-links-wraper">
          <h3 className="list-items"><a href="#">Home</a></h3>
          <p className="list-items"><a href="#">About</a></p>
          <p className="list-items"><a href="#">Products</a></p>
          <p className="list-items"><a href="#">Service</a></p>
          <p className="list-items"><a href="#">Recycler</a></p>
          <p className="list-items"><a href="#">Find us</a></p>
        </div>
        <button className="list-items-btn"><a href="#">Contact</a></button>
      </div>
      <div className="responsive-nav-container"></div>
    </div>
  )
}

export default Navbar