import axios from 'axios';
import "../ViewProduct/ViewProduct.css"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs'
import Navbar from "../Navbar/Navbar"


const ViewProduct = () => {

    const [productData, setProductData] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                // console.log(response.data)
                setProductData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    return (
        <>
            <Navbar />
            <div className='pd_view_container'>

                <div className="pd_view_wrapper">
                    <div className="pd_img_wrapper">

                        <div className='thumbnail_wrapper'>
                            <img src={productData?.thumbnail} alt="safbsub" />
                        </div>

                        <div className='pd_images'>
                            {
                                productData?.images?.map((imgSrc, id) => {
                                    return (
                                        <div className='pd_image_wrap' key={id}>
                                            <img src={imgSrc} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className="pd_data_rapper">

                        <span className='pd_category'>Category: <span>{productData?.category}</span></span>
                        <span className='pd_brand'>Brand: <span>{productData?.brand}</span></span>
                        <p className='pd_title'>{productData?.title}</p>
                        <hr />
                        <p className='pd_price'>${productData?.price}</p>
                        <p className='pd_discount'>{productData?.discountPercentage}% off</p>
                        <p className='pd_rating'>Review: {productData?.rating} <BsFillStarFill style={{
                            color: "#ff6900"
                        }} /></p>
                        <p className='pd_desc'>{productData?.description}</p>

                        <div className="btn_wrapper">
                            <button className='pd_cart_btn'>Add To Cart</button>
                            <button className='pd_purchase_btn'>Purchase Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProduct
