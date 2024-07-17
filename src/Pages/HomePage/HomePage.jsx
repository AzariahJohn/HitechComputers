import React, { useRef } from 'react'
import './homePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Lottie from 'lottie-react'
import LaptopAnimation from '../../Images/laptopServerGif.json'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination} from 'swiper/modules';

import Brand1 from '../../Images/Brands/brand1.svg'
import Brand2 from '../../Images/Brands/brand2.svg'
import Brand3 from '../../Images/Brands/brand3.svg'
import Brand4 from '../../Images/Brands/brand4.svg'
import Brand5 from '../../Images/Brands/brand5.svg'
import Brand6 from '../../Images/Brands/brand6.svg'
import Brand7 from '../../Images/Brands/brand7.svg'
import Brand8 from '../../Images/Brands/brand8.png'

import C1 from '../../Images/c1.jpeg'
import C2 from '../../Images/c2.webp'
import C3 from '../../Images/c3.png'
import C4 from '../../Images/c4.webp'

import Ig from '../../Images/ig.svg'
import Fb from '../../Images/fb.svg'
import X from '../../Images/x.svg'
import Sphere from '../../Models/Sphere'

function HomePage() {

  return (
    <div className='outer-container'>
        <Navbar />
        <div className="first-container">
          <div className="carosel-cards-container">
            <div className="carosel-card card-1">
              <div className="card-right-content">
                Content
              </div>
              <div className="card-left-content">
                <Sphere />
              </div>
            </div>
            <div className="carosel-card card-2">Card Two</div>
            <div className="carosel-card card-3">Card Three</div>
            <div className="carosel-card card-4">Card Four</div>
            <div className="carosel-card card-5">Card Five</div>
          </div>
        </div>
        <div className="second-container">
          <div className="second-container-card">Second Container</div>
        </div>
    </div>
  )
}

export default HomePage