import React, { useEffect, useState } from 'react'
import "../Categories/Categories.css"
import axios from 'axios'

const Categories = ({onCategory}) => {
    const [categoryArray, setCategoryArray] = useState([])

    // const [categoryItem, setCategoryItem] = useState("")
    // const header = {
    //     'Content-Type': 'application/json'
    // }


    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories", {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                // console.log(response.data)
                setCategoryArray(response.data)
            })
    }, [])

    const handleClick = (category) => {
        // setCategoryItem(category)
        onCategory(category)
    }


    return (
        <div className='categories_container'>
            <div className="categories_wrapper">
                {
                    categoryArray?.map((item, index) => {
                        return (

                            <div key={index} className="categories_item" onClick={() => { handleClick(item) }}>
                                <span>{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories
