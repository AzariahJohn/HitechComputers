import React from 'react'
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

function HomePage() {
  return (
    <div className='outer-container'>
        <div className="nav-bar-container">
            <Navbar />
        </div>
        {/* <div className="carosel-container"> */}
        <Swiper
        style={{
            '--swiper-navigation-color': '#303030',
            '--swiper-pagination-color': '#909090',
        }}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
            <SwiperSlide className='first-carosel'>
                <div className="hero-content-container">
                    <h1 className="hero-text">Computer Recycling and Reuse</h1>
                    <p className="hero-paragraph">Recycling is not the most effective way to keep computers and other technology out of landfills. A more important goal 
                    for us at Hitech is reuse.</p>
                    <button className="hero-button">Click for Details</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='second-carosel'>
                <div className="hero-content-container">
                    <h1 className="hero-text">Computer Recycling and Reuse.</h1>
                    <p className="hero-paragraph">Recycling is not the most effective way to keep computers and other technology out of landfills. A more important goal 
                    for us at Hitech is reuse.</p>
                    <button className="hero-button">Click for Details</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='third-carosel'>
                <div className="hero-content-container">
                    <h1 className="hero-text">Computer Recycling and Reuse.</h1>
                    <p className="hero-paragraph">Recycling is not the most effective way to keep computers and other technology out of landfills. A more important goal 
                    for us at Hitech is reuse.</p>
                    <button className="hero-button">Click for Details</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='fourth-carosel'>
                <div className="hero-content-container">
                    <h1 className="hero-text">Computer Recycling and Reuse.</h1>
                    <p className="hero-paragraph">Recycling is not the most effective way to keep computers and other technology out of landfills. A more important goal 
                    for us at Hitech is reuse.</p>
                    <button className="hero-button">Click for Details</button>
                </div>
            </SwiperSlide>
        </Swiper>
        {/* </div> */}
        <div className="brand-slider">
            <img src={Brand1} alt="" className="brand-logo" />
            <img src={Brand2} alt="" className="brand-logo" />
            <img src={Brand3} alt="" className="brand-logo" />
            <img src={Brand4} alt="" className="brand-logo" />
            <img src={Brand5} alt="" className="brand-logo" />
            <img src={Brand6} alt="" className="brand-logo" />
            <img src={Brand7} alt="" className="brand-logo" />
            <img src={Brand8} alt="" className="brand-logo" />
        </div>
        <div className="second-main-container">
            <div className="second-content-container">
                <h1 className="second-title">Why go for refurbished 
                computer products?</h1>
                <p className="second-cont-paragraph">
                Refurbished servers and networking equipment save you money 
                that can go towards everything else you need to keep your business 
                running efficiently. Not only do we offer reliability and flexibility 
                in catering to your specific needs, from sourcing to customization, 
                but we also offer prices lower than anywhere else in the market. 
                We get you what you need, when you need it, at the most competitive 
                price and highest quality.
                </p>
            </div>
        </div>

        <div className="choose-container">
            <div className="choose-text-container">
                <h1 className="choose-title">Why choose us?</h1>
                <p className="choose-paragraph">If you're looking for refurbished, new or used computer parts, 
                    you're at the right place. By leveraging our buying power, knowledge of product availability 
                    and market sources we maximize our customer's competitive advantage and minimize supply chain 
                    costs for genuine higher quality products. Instead of keeping latest computers in minimum numbers 
                    we give more numbers of used computers that is more than enough to learn all latest software 
                    packages with minimum maintenance cost.
                </p>
            </div>
            <div className="choose-image-container">
                {/* <Parallax pages={2} style={{ top: '0', left: '0' }} className='parallax-container'>
                    <ParallaxLayer offset={0} speed={2.5}>
                        <img src={C1} alt="" className="choose-img" />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={1.5}>
                        <img src={C4} alt="" className="choose-img" />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={0.5}>
                        <img src={C2} alt="" className="choose-img" />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0} speed={2.5}>
                        <img src={C3} alt="" className="choose-img" />
                    </ParallaxLayer>
                </Parallax> */}
                <img src={C1} alt="" className="choose-img" />
                <img src={C4} alt="" className="choose-img" />
                <img src={C2} alt="" className="choose-img" />
                <img src={C3} alt="" className="choose-img" />
            </div>
        </div>
        <div className="reuse-container-black">
            <div className="reuse-left-container">
                <Lottie animationData={LaptopAnimation} className='lottie-laptop'/>
            </div>
            <div className="reuse-right-container">
                <div className="right-reuse-card">
                    <h1 className="reuse-title">Reuse as well as recycling.</h1>
                    <p className="reuse-paragraph">By bringing millions of buyers and 
                        sellers together, the eBay marketplace enables reuse on a large scale. 
                        Reusing computers, cell phones and electronics extends their useful life. 
                        That maximizes their value before they’re finally recycled, and delays their 
                        entry into the waste stream–another advantage as more advanced recycling 
                        techniques are developed.
                    </p>
                </div>
            </div>
        </div>
        <div className="four-box-container">
            <div className="four-card-one">
                <p className="four-paragraph">Hitech Computer Centre offers hottest deals 
                    in the computer industry! We purchase new products as well as manufacturer 
                    excess, overstock, and slightly obsolete inventories in large quantities. 
                    This allows us to offer products to you at the best price. Hitech Electronic 
                    Waste Recyclers India Pvt Ltd. follows "Reduce, Reuse, Recycle" policy. 
                    Reuse is a good way to increase a product's lifespan. Recycling can be a good 
                    way to reuse the raw materials in a product.</p>
            </div>
            <div className="four-card-one">
                <p className="four-paragraph">Asset Recovery: With rapid advancement in technology, 
                    getting the best value out of existing and often dated technical systems and hardware 
                    is what HITECH helps its clients with. Auditing assets, taking inventory, screening, 
                    testing either onsite or at our location with 100% data sanitization and offering best 
                    residual value for assets is what makes HITECH with a base of over 2000 clients, 
                    a valued partner in asset recovery.</p>
            </div>
            <div className="four-card-one">
                <p className="four-paragraph">Hardware Solutions & Services: Across India, HITECH offers 
                    Customer-Centric Service Solutions, including fulfillment, logistics and multi-commodity 
                    repair, with the option of managing the total outsourcing of all the client's warranty 
                    responsibilities. These technological services are provided to some of the key players 
                    in the IT and Telecommunications hardware industry, including OEM/ODM, System Integrator 
                    and EMS companies.</p>
            </div>
            <div className="four-card-one">
                <p className="four-paragraph">Today HITECH has successfully reduced operating costs improved 
                    customer service levels and enhanced world class shipping capabilities which equates to best 
                    products for our customers.</p>
            </div>
        </div>
        <div className="footer-container">
            <h1 className="logo-footer">HCC</h1>
            <p className="logo-full-form">Hitech Computer Centre</p>
            <div className="social-media-box">
                <img src={Ig} alt=""className='footer-socials'/>
                <img src={Fb} alt=""className='footer-socials'/>
                <img src={X} alt="" className='footer-socials'/>
            </div>
        </div>
    </div>
  )
}

export default HomePage