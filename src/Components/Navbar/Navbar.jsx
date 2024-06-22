import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar-container">
        <h1 className="logo">HCC</h1>
        <h3 className="list-items"><a href="#">Home</a></h3>
        <h3 className="list-items"><a href="#">About</a></h3>
        <h3 className="list-items"><a href="#">Products</a></h3>
        <h3 className="list-items"><a href="#">Service</a></h3>
        <h3 className="list-items"><a href="#">Recycler</a></h3>
        <h3 className="list-items"><a href="#">Find us</a></h3>
        <h3 className="list-items"><a href="#">Contact</a></h3>
    </div>
  )
}

export default Navbar