import React, { useEffect, useState } from 'react'
import './productsPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { client } from '../../lib/sanity';
import { Link } from 'react-router-dom';

function MonitorsPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      client.fetch(
        `*[_type == "product"]{
          name,
          price,
          slug,
          mainImage{
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error)
    }, [])
  
    return (
      <div className="products-outer-container">
        <Navbar />
        <div className="products-content-container">
          <div className="search-bar-container">
            <input type="text" placeholder='Search for products' className='products-search-bar'/>
            <button className="search-button"><SearchTwoToneIcon/></button>
          </div>
          <div className="all-products-container">
            {products.map((product) => (
              <Link to={product.slug.current}>
                <div className="product-card">
                  <div className="product-image-wrapper">
                    <img src={product.mainImage.asset.url} alt="" className="product-image" />
                  </div>
                  {/* <div className="image-gradient-cover"></div> */}
                  <div className="bottom-details-wrapper">
                    <p className="product-name">{product.name}</p>
                    {/* <p className="product-price">Price {product.price}</p> */}
                  </div>
                </div>
              </Link>
              ))
            }
          </div>
        </div>
      </div>
    )
}

export default MonitorsPage