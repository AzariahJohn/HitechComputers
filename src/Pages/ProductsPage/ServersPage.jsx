import React, { useEffect, useState } from 'react'
import './productsPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { client } from '../../lib/sanity';
import { Link } from 'react-router-dom';

function ServersPage() {
  const [products, setProducts] = useState([])

  const [searchProduct, setSearchProduct] = useState([])
  const [searchText, setSearchText] = useState()

  const handleSearch = () => {
    client.fetch(
      `*[_type == "product" && name match "${searchText}"]{
    _id,
    name,
    price,
    modelnum,
    slug,
    brand->{
      _id,
      brandname
    },
    mainImage,
    categories[]->{
      _id,
      title
    },
    description,
    "relatedProducts": *[_type == "product" && references(^._id) || ^.categories[]->._id in categories[]->_id && _id != ^._id]{
      _id,
      name,
      price,
      mainImage
    }
  }`
    )
    .then((data) => setSearchProduct(data))
    .catch(console.error)
  }

  // const productData = [
  //     {"name": "Dell XPS",
  //       "price": "40,000",
  //       "slug": "hello-123",
  //       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //     },
  //     {"name": "Dell XPS",
  //       "price": "40,000",
  //       "slug": "hello-123",
  //       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //     },
  //     {"name": "Dell XPS",
  //       "price": "40,000",
  //       "slug": "hello-123",
  //       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //     },
  //     {"name": "Dell XPS",
  //       "price": "40,000",
  //       "slug": "hello-123",
  //       "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //     },
  //   ]

  useEffect(() => {
    client.fetch(
      `*[_type == "product" && "Servers" in categories[]->title]{
        _id,
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
          <input type="text" placeholder='Search for products' className='products-search-bar' onChange={(e) => setSearchText(e.target.value)}/>
          <button className="search-button" onClick={handleSearch}><SearchTwoToneIcon/></button>
        </div>
        {searchText && <div className="suggestion-search-box">
            {searchProduct.map((product) => (
              <Link to={`/product/${product.slug.current}`}>
                <div className="search-items">
                  <p>{product.name}</p>
                </div>
              </Link>
            ))}
        </div>}
        <div className="all-products-container">
          {products.map((product) => (
            <Link to={`/product/${product.slug.current}`}>
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

export default ServersPage