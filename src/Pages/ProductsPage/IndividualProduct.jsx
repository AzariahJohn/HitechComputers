import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useParams, Link } from 'react-router-dom'
import { client } from '../../lib/sanity'

function IndividualProduct() {

    const [singleProduct, setSingleproduct] = useState([])
    const slug = useParams()

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
    }, [])

  return (
    <div className="ind-product-outer-div">
        <Navbar />
    </div>
  )
}

export default IndividualProduct