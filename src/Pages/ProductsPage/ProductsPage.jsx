import React, { useEffect, useState } from 'react'
import './productsPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { client } from '../../lib/sanity';
import { Link } from 'react-router-dom';

function ProductsPage() {

  // const productData = [
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },

  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  //   {"name": "Dell XPS",
  //     "price": "40,000",
  //     "slug": "hello-123",
  //     "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Macbook_Air_15_inch_-_2_%28blurred%29.jpg/1200px-Macbook_Air_15_inch_-_2_%28blurred%29.jpg"
  //   },
  // ]

  const [products, setProducts] = useState([])

  useEffect(() => {
    client.fetch(
      `*[_type == "product" && category == "Laptops and Notebooks"]{
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
      <div className="products-section-container">
      <Link to="/desktop">
        <div className="product-section">
          <h1 className="section-title">Desktops</h1>
        </div>
      </Link>
      <Link to="/laptop">
        <div className="product-section">
          <h1 className="section-title">Laptops and Notebooks</h1>
        </div>
      </Link>
      <Link to="/server">
        <div className="product-section">
          <h1 className="section-title">Servers</h1>
        </div>
      </Link>
      <Link to="/monitor">
        <div className="product-section">
          <h1 className="section-title">Monitors</h1>
        </div>
      </Link>
      <Link to="/networking">
        <div className="product-section">
          <h1 className="section-title">Networking</h1>
        </div>
      </Link>
      <Link to="/hard-disk">
        <div className="product-section">
          <h1 className="section-title">Server Hard Disk</h1>
        </div>
      </Link>
      <Link to="/processor">
        <div className="product-section">
          <h1 className="section-title">CPUs / Processors</h1>
        </div>
      </Link>
      <Link to="/interface">
        <div className="product-section">
          <h1 className="section-title">Interface</h1>
        </div>
      </Link>
      <Link to="/memory">
        <div className="product-section">
          <h1 className="section-title">Server Memory</h1>
        </div>
      </Link>
      <Link to="/motherboard">
        <div className="product-section">
          <h1 className="section-title">Server Motherboard</h1>
        </div>
      </Link>
      <Link to="/psu">
        <div className="product-section">
          <h1 className="section-title">Server Powersupply</h1>
        </div>
      </Link>
      <Link to="/cables">
        <div className="product-section">
          <h1 className="section-title">Cables</h1>
        </div>
      </Link>
      </div>
    </div>
  )
}

export default ProductsPage