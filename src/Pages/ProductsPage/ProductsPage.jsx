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
      
    </div>
  )
}

export default ProductsPage