import React, { useEffect, useState } from 'react'
import "../ProductContainer/ProductContainer.css"
import ProductCard from '../ProductCard/ProductCard'
import axios from 'axios'
const ProductContainer = ({searchQuery}) => {
    const [productData, setProductData] = useState([]);

   

    // useEffect(() => {
    //     axios.get("https://dummyjson.com/products")
    //         .then((response) => {
    //             // console.log(response.data.products)
    //             setProductData(response.data.products)
    //         })
    // }, [])
    
    useEffect(()=>{
        axios.get("https://dummyjson.com/products/search?q=" + searchQuery)
        .then((response) => {
            // console.log(response.data.products)
            setProductData(response.data.products)
        })
    },[searchQuery])

    return (
        <div className='productCard_container'>
            {
                productData?.map((productItem, id) => {
                    return (
                        <ProductCard key={id} data={productItem} />
                    )
                })
            }
        </div>
    )
}

export default ProductContainer

////////////////////////////////////////////