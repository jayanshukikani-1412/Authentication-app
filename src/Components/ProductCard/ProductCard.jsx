import React from 'react'
import '../ProductCard/ProductCard.css'
import { Link } from 'react-router-dom';


const ProductCard = (data) => {
    // console.log(data.data)


    return (
        <Link to={`/viewProduct/${data.data.id}`} style={{
            textDecoration:"none",
            color:"white"
        }}>

            <div className='card_container'>
                <div className='card_wrapper'>
                    <div className="image_wrapper">
                        <img src={data.data.thumbnail} alt="" />
                        <span className='id_data'>{data.data.id}</span>
                    </div>
                    <div className="body_wrapper">
                        <span className='pd_category'>{data.data.category}</span>
                        <p className='pd_title'>{data.data.title.slice(0, 25)}</p>
                        <p className="pd_desc">{data.data.description.slice(0, 50)}</p>

                        <hr />
                        <div className="price_wrapper">
                            <p className='pd_price'>$ {data.data.price}</p>
                            <p className='pd_discount'>{data.data.discountPercentage} % off</p>
                        </div>
                        <hr />
                        <div className="btn_wrapper">
                            <Link to={`/viewProduct/${data.data.id}`} style={{
                                textDecoration:"none",
                                color:"white"
                            }}>
                                <button >View Product</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </Link>

    )
}

export default ProductCard


/////////////////////////////////////////////////////////////