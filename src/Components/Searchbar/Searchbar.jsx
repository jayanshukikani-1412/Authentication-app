// import axios from 'axios';

import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"
// import ProductCard from '../ProductCard/ProductCard';
// import ProductContainer from '../ProductContainer/ProductContainer';

const Searchbar = ({onSearchbar}) => {
    const [searchData, setSearchData] = useState("");
    // const [searchProduct, setSearchProduct] = useState([]);

    const searchFunc = (event) => {
        setSearchData(event.target.value)
        const input = event.target.value;

        onSearchbar(input)
        // axios.get("https://dummyjson.com/products/search?q=" + input)
        //     .then((response) => {
        //         console.log(response.data.products)
        //         setSearchProduct(response.data.products)

        //         searchProduct.map((productItem, id) => {
        //             return (
        //                 <ProductCard key={id} data={productItem} />
        //             )

        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

    }
    return (

        <div className='search_section'>
            <div className="search_container">
                <div className="search_wrapper">
                    <input type="text" placeholder='search product here' value={searchData} onChange={searchFunc} />
                    <button ><FaSearch /></button>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
////////////////////