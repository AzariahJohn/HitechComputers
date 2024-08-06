import React, { useLayoutEffect, useRef } from 'react'
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

import HeroSection from './FirstContainer'
import CursorBot from './CursorBot'
import Chips from '../../Models/Chips'
import Particles from '../../Models/Particles'

import LottieOne from '../../Lottie/LottieOne.json'
import LottieTwo from '../../Lottie/LottieTwo.json'
import LottieThree from '../../Lottie/LottieThree.json'

import CardOne from '../../Lottie/CardOne.json'
import CardTwo from '../../Lottie/CardTwo.json'
import CardThree from '../../Lottie/CardThree.json'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function HomePage() {

  return (
    <div className='outer-container'>
        <Navbar />
        <div className="hero-container">
          {/* <HeroSection /> */}
          {/* <p className="hero-company-name">HiTech Computer Centere</p> */}
          <div className="hero-container-left">
            <h1 className="hero-text">Revitalize Your Tech, Premium Refurbished Laptops & Desktops.</h1>
            <p className="hero-paragraph">Discover high-performance, eco-friendly refurbished laptops and 
              desktops. Save money without compromising on quality. Upgrade your tech today</p>
            <div className="hero-button-container">
              <button className="hero-button">Explore Products</button>
              <button className="hero-button plain-btn">Learn More</button>
            </div>
          </div>
          <div className="hero-container-right">
            <CursorBot />
          </div>
        </div>
        <div className="second-container">
          <div className="second-container-card">
            <div className="second-container-sec-right">
              <div className="second-container-left-content">
                <h1 className="second-container-title">Why go for refurbished computer products?</h1>
                <p className="second-container-description">Refurbished servers and networking equipment 
                save you money that can go towards everything else you need to keep your business running 
                efficiently. Not only do we offer reliability and flexibility in catering to your specific 
                needs, from sourcing to customization, but we also offer prices lower than anywhere else 
                in the market. We get you what you need, when you need it, at the most competitive price 
                and highest quality.</p>
              </div>
              <div className="second-container-right-content lottie-container">
                <Lottie animationData={LottieOne}/>
              </div>
            </div>
            <div className="second-container-sec-right reverse-content">
              <div className="second-container-left-content lottie-container">
                <Lottie animationData={LottieThree}/>
              </div>
              <div className="second-container-right-content">
                <h1 className="second-container-title">Why choose us?</h1>
                <p className="second-container-description">If you're looking for refurbished, 
                new or used computer parts, you're at the right place. By leveraging our buying power, 
                knowledge of product availability and market sources we maximize our customer's competitive 
                advantage and minimize supply chain costs for genuine higher quality products. 
                Instead of keeping latest computers in minimum numbers we give more numbers of used computers 
                that is more than enough to learn all latest software packages with minimum maintenance cost.</p>
              </div>
            </div>
            <div className="second-container-sec-right">
              <div className="second-container-left-content">
                <h1 className="second-container-title">Reuse as well as recycling</h1>
                <p className="second-container-description">By bringing millions of buyers and sellers together, 
                the eBay marketplace enables reuse on a large scale. Reusing computers, cell phones and electronics 
                extends their useful life. That maximizes their value before they’re finally recycled, and delays 
                their entry into the waste stream–another advantage as more advanced recycling 
                techniques are developed.</p>
              </div>
              <div className="second-container-right-content lottie-container">
                <Lottie animationData={LottieTwo}/>
              </div>
            </div>
          </div>
        </div>
        <div className="first-container">
          <div className="first-cards-wrapper">
            <div className="carosel-card card-1">
              <div className="card-right-content">
                <h1 className="first-container-title">Computer Recycling and Reuse.</h1>
                <h3 className="first-container-description">Recycling is not the most effective 
                way to keep computers and other technology out of landfills. A more important 
                goal for us at Hitech is reuse.</h3>
              </div>
              <div className="card-left-content">
                <Lottie animationData={CardOne} className='lottie-file'/>
              </div>
            </div>
            <div className="carosel-card card-2">
              <div className="card-right-content">
                <h1 className="first-container-title">Services that we offer here.</h1>
                <h3 className="first-container-description">We specialize in instant repair 
                services for laptops and computer-related products, ensuring swift solutions 
                to all your technical issues and concerns.</h3>
              </div>
              <div className="card-left-content">
                <Lottie animationData={CardTwo} className='lottie-file'/>
              </div>
            </div>
            <div className="carosel-card card-3">
              <div className="card-right-content">
                <h1 className="first-container-title">Computer Product Categories.</h1>
                <h3 className="first-container-description">We offer a comprehensive range 
                of branded computer and laptop products, catering to diverse needs with quality 
                and reliability as our hallmark.</h3>
              </div>
              <div className="card-left-content">
                <Lottie animationData={LottieTwo} className='lottie-file'/>
              </div>
            </div>
            <div className="carosel-card card-4">
              <div className="card-right-content">
                <h1 className="first-container-title">Who we are?</h1>
                <h3 className="first-container-description">From modest beginnings Hi-Tech Computer Centere
                has become a digital market maker around the world selling products on the 
                secure web site.</h3>
              </div>
              <div className="card-left-content">
                <Lottie animationData={LottieOne} className='lottie-file'/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="third-container">
          <div className="brands-container">
            <div className="brands-container-slider">
              <img src={Brand1} alt="" className="brands-logo" />
              <img src={Brand2} alt="" className="brands-logo" />
              <img src={Brand3} alt="" className="brands-logo" />
              <img src={Brand4} alt="" className="brands-logo" />
              <img src={Brand5} alt="" className="brands-logo" />
              <img src={Brand6} alt="" className="brands-logo" />
              <img src={Brand7} alt="" className="brands-logo" />
              <img src={Brand8} alt="" className="brands-logo" />
            </div>
            <div className="brands-container-slider">
              <img src={Brand1} alt="" className="brands-logo" />
              <img src={Brand2} alt="" className="brands-logo" />
              <img src={Brand3} alt="" className="brands-logo" />
              <img src={Brand4} alt="" className="brands-logo" />
              <img src={Brand5} alt="" className="brands-logo" />
              <img src={Brand6} alt="" className="brands-logo" />
              <img src={Brand7} alt="" className="brands-logo" />
              <img src={Brand8} alt="" className="brands-logo" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage