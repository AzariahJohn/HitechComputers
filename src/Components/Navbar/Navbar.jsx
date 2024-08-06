import React, {useState} from 'react'
import './Navbar.css'
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Link } from "react-router-dom";

function Navbar() {

  const [open, isOpen] = useState(false)

  const handleResponsive = () => {
    isOpen(!open);
  }

  return (
    <div className="navbar-container">
      <div className="full-page-navbar">
        <h1 className="logo">HCC</h1>
        <div className="nav-links-wraper">
          <p className="list-items"><Link to='/'>Home</Link></p>
          <p className="list-items"><Link to='/about'>About</Link></p>
          <p className="list-items"><Link to="/products">Products</Link></p>
          <p className="list-items"><Link to='/service'>Service</Link></p>
          <p className="list-items"><Link to='/recycler'>Recycler</Link></p>
          <p className="list-items"><Link to='/contact'>Find us</Link></p>
        </div>
        <button className="list-items-btn"><Link to='/contact'>Contact</Link></button>
        <div className="hamburger-menu-container">
          <MenuTwoToneIcon onClick={handleResponsive} className='hamburger' style={ { display: open ? 'none' : 'block' } }/>
        </div>
      </div>
      <div className="responsive-nav-container" style={ { display: open ? 'block' : 'none' } }>
        <div className="nav-background-cover"></div>
        <div className="nav-side-bar">
          <div className="full-nav-links-wraper">
            <div className="close-icon-container">
              <CloseTwoToneIcon onClick={handleResponsive} className='close-icon'/>
            </div>
            <p className="list-items"><Link to="/">Home</Link></p>
            <p className="list-items"><Link to='/about'>About</Link></p>
            <p className="list-items"><Link to='/products'>Products</Link></p>
            <p className="list-items"><Link to='/service'>Service</Link></p>
            <p className="list-items"><Link to='/recycler'>Recycler</Link></p>
            <p className="list-items"><Link to='/contact'>Find us</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar