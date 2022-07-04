import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BASE_URL } from '../../api/config';
import { getProductAction } from '../../redux/Actions/ProductAction';
import './product.scss'

const Product = () => {

    const { getProduct } = useSelector((state) => state)

    // console.log(getProduct);

    const dispach = useDispatch();




    useEffect(() => {
        dispach(getProductAction())
    }, [])




    return (

        <div id='product'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-11">
                        <h3>Ən çox satanlar</h3>
                        <div className="row">

                            <div className="col-lg-3">
                                <div className="big-box">
                                    <div className="image">
                                        <img src="" alt="" />
                                        <div className="heart-icon">
                                            <i class="fa-solid fa-heart"></i>
                                        </div>
                                    </div>
                                    <hr />
                                    <ul className='category'>
                                        <li className='categoryName'>Telefonlar və planşetlər</li>
                                        <li className='productName'>Apple Iphone 13Pro</li>
                                    </ul>

                                    <div className="row">
                                        <div className="col-lg-7">
                                            <div className="price">
                                                <p>2699₼</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="timeBox">
                                                <p>
                                                    12 ay
                                                    224.92₼
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <button className='buyButton'>İndi al</button>
                                        </div>
                                        <div className="col-lg-3">
                                            <i class="fa-solid fa-cart-plus buyIcon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product