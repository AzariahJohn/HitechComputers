import React, { useEffect, useState } from 'react'
import './productsPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { client } from '../../lib/sanity';
import { Link } from 'react-router-dom';

function ProductsPage() {

  const productData = [
    {"name": "Dell XPS",
      "price": "40,000",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
    }
  ]

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
                <img src={product.mainImage.asset.url} alt="" className="product-image" />
                <div className="image-gradient-cover"></div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">Price {product.price}</p>
              </div>
            </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductsPage