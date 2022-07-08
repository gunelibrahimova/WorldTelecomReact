import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/config';
import { addToCartAction } from '../../redux/Actions/CartAction';
import { getProductsAction } from '../../redux/Actions/ProductAction';
import './product.scss'

const Product = () => {


    const  {cartItems}  = useSelector((state) => state.cart)

    const addToCartHadler = (id,name) => {
        var myCart = cartItems.find(e => e.id === id)
        if (myCart) {
          dispach(addToCartAction(id, myCart.quantity + 1))
        } else {
          dispach(addToCartAction(id, 1))
        }
      }

    const getProduct = useSelector((state) => state.products.products)

    const dispach = useDispatch();


    

    useEffect(() => {
        dispach(getProductsAction())
    }, [])


    return (

        <div id='product'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-11">
                        <h3>Ən çox satanlar</h3>
                        <div className="row">
                            {
                                getProduct &&
                                getProduct.filter(x => x.isStock === true && x.isSlider === true).map((prod) => (
                                    <div className="col-lg-3">
                                        <div key={prod.id} className="big-box">
                                            <div className="image">
                                                <Link to={"/detail/" + prod.id}>
                                                    <img src={prod.coverPhoto} alt="" />
                                                </Link>

                                                <div className="heart-icon">
                                                    <i class="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                            <hr />
                                            <ul className='category'>
                                                <li className='categoryName'>Telefonlar və planşetlər</li>
                                                <li className='productName'>{prod.name}</li>
                                            </ul>

                                            <div className="row">
                                                <div className="col-lg-7">
                                                    <div className="price">
                                                        <p>{prod.price}₼</p>
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
                                                    
                                                  <i class="fa-solid fa-cart-plus buyIcon" onClick={() => addToCartHadler(prod.id, prod.name)}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product