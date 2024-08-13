import React, { useRef } from 'react'
import './homePage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Lottie from 'lottie-react'

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

import CursorBot from './CursorBot'

import LottieOne from '../../Lottie/LottieOne.json'
import LottieTwo from '../../Lottie/LottieTwo.json'

import FourthImg from '../../Images/service.jpg'
import Recovery from '../../Images/recovery.jpg'
import Hardware from '../../Images/hardware.jpg'

import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

function HomePage() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

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
              <Link to='/products'><button className="hero-button">Explore Products</button></Link>
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
                <img src={Hardware} alt="" className='second-image'/>
              </div>
            </div>
            <div className="second-container-sec-right reverse-content">
              <div className="second-container-left-content lottie-container">
                <img src={Hardware} alt="" className='second-image'/>
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
                <img src={Hardware} alt="" className='second-image'/>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="carosel-card card-1">
              <div className="card-right-content">
                <h1 className="first-container-title">Computer Recycling and Reuse.</h1>
                <h3 className="first-container-description">Recycling is not the most effective 
                way to keep computers and other technology out of landfills. A more important 
                goal for us at Hitech is reuse.</h3>
              </div>
              <div className="card-left-content">
                <Lottie animationData={LottieTwo} className='lottie-file'/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carosel-card card-2">
              <div className="card-right-content">
                <h1 className="first-container-title">Services that we offer here.</h1>
                <h3 className="first-container-description">We specialize in instant repair 
                services for laptops and computer-related products, ensuring swift solutions 
                to all your technical issues and concerns.</h3>
              </div>
              <div className="card-left-content">
                <Lottie animationData={LottieOne} className='lottie-file'/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
          </div>
          </Swiper>
        
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
        <div className="fourth-container">
          <div className="fourth-container-card">
            <div className="fourth-left-content">
              <h1 className="fourth-title">Smart Tech Savings at HCC.</h1>
              <p className="fourth-description">Hitech Computer Centre offers 
                great deals by purchasing new products and surplus inventories in bulk, 
                allowing them to provide the best prices. They also follow a "Reduce, 
                Reuse, Recycle" policy through their recycling company to extend 
                product lifespans and reuse raw materials. Hitech has reduced operating 
                costs, improved customer service, and enhanced shipping, resulting in 
                better products for their customers.
              </p>
            </div>
            <div className="fourth-right-content">
              <img src={FourthImg} alt="" className="fourth-container-img" />
            </div>
          </div>
          <div className="fourth-container-card rev-card">
            <div className="fourth-left-content">
              <h1 className="fourth-title">Hardware Solutions & Services</h1>
              <p className="fourth-description">Across India, HITECH offers Customer-Centric 
                Service Solutions, including fulfillment, logistics and multi-commodity repair, 
                with the option of managing the total outsourcing of all the client's warranty 
                responsibilities. These technological services are provided to some of the key 
                players in the IT and Telecommunications hardware industry, including OEM/ODM, 
                System Integrator and EMS companies.
              </p>
            </div>
            <div className="fourth-right-content">
              <img src={Recovery} alt="" className="fourth-container-img" />
            </div>
          </div>
          <div className="fourth-container-card">
            <div className="fourth-left-content">
              <h1 className="fourth-title">Asset Recovery</h1>
              <p className="fourth-description">With rapid advancement in technology, 
                getting the best value out of existing and often dated technical systems 
                and hardware is what HITECH helps its clients with. Auditing assets, 
                taking inventory, screening, testing either onsite or at our location 
                with 100% data sanitization and offering best residual value for assets 
                is what makes HITECH with a base of over 2000 clients, a valued partner 
                in asset recovery.
              </p>
            </div>
            <div className="fourth-right-content">
              <img src={Hardware} alt="" className="fourth-container-img" />
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default HomePage