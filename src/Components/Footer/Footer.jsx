import React from 'react'
import './footer.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

function Footer() {
  return (
    <div className="footer-outer-container">
        <div className="footer-wrapper">
            <h1 className="footer-logo">HCC</h1>
            <div className="socials-container">
                <div className="icon-wrapper-footer"><InstagramIcon style={{fill: "antiquewhite"}}/></div>
                <div className="icon-wrapper-footer"><WhatsAppIcon style={{fill: "antiquewhite"}}/></div>
                <div className="icon-wrapper-footer"><FacebookIcon style={{fill: "antiquewhite"}}/></div>
                <div className="icon-wrapper-footer"><GoogleIcon style={{fill: "antiquewhite"}}/></div>
            </div>
        </div>
        <div className="coppyright">© HiTech Computer Center</div>
    </div>
  )
}

export default Footer