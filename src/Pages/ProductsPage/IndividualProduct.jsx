import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams, Link } from 'react-router-dom'
import { client } from '../../lib/sanity'
import Hardware from '../../Images/hardware.jpg'
import Footer from '../../Components/Footer/Footer'

function IndividualProduct() {

    const [singleProduct, setSingleproduct] = useState()
    const {slug} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"]{
                _id,
                name,
                price,
                modelnum,
                slug,
                brand->{
                    _id,
                    brandname
                },
                mainImage{
                    asset -> {
                    _id,
                    url
                    },
                alt
                },
                categories[]->{
                    _id,
                    title
                },
                description,
            }`
        ).then((data) => setSingleproduct(data[0]))
        setIsLoading(false)
        console.log(singleProduct)
    }, [])

  return (
    <div className="ind-product-outer-div">
        <Navbar />
        {
            singleProduct && singleProduct.mainImage && (
                <div className="ind-product-first-container">
                    <div className="ind-product-content-card">
                    <div className="ind-product-content-wrapper">
                        <div className="ind-product-overflow-wrapper">
                            <div className="ind-image-container-product">
                                <img src={singleProduct.mainImage.asset.url} alt="" className='product-img'/>
                            </div>
                            <div className="ind-right-content"> 
                                <h1 className="ind-product-title">{singleProduct.name}</h1>
                                <p className='ind-product-desc'>{singleProduct.description[0].children[1].text}</p>
                                <p className="ind-pro-modelnum"><span className="ind-bold">Model Number: </span>{singleProduct.modelnum}</p>
                                <p className="ind-pro-brand"><span className="ind-bold">Brand: </span>{singleProduct.brand.brandname}</p>
                                <div className="ind-product-price">₹ {singleProduct.price}</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            )
        }
        <Footer />
    </div>
  )
}

export default IndividualProduct