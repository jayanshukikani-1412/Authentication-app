import axios from 'axios'
import "../CategoryProducts/CategoryProducts.css"
import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const CategoryProducts = ({ searchCategory }) => {
    const [catData, setcatData] = useState([])
    // console.log(searchCategory)

    useEffect(() => {
        axios.get("https://dummyjson.com/products/category/" + searchCategory)
            .then((response) => {
                // console.log(response.data.products)
                setcatData(response.data.products)

            })
    }, [searchCategory])


    return (
        <div className='cat_product_container'>
            {
                catData?.map((productItem, id) => {
                    return (
                        <ProductCard key={id} data={productItem} />
                    )
                })
            }
        </div>
    )
}

export default CategoryProducts
