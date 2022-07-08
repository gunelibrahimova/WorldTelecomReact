import React, { useEffect, useState } from 'react'
import './productDetail.scss'
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/config';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from '../../redux/Actions/CartAction';

const ProductDetail = () => {

    const dispach = useDispatch();


    const  {cartItems}  = useSelector((state) => state.cart)

    const addToCartHadler = (id,name) => {
        var myCart = cartItems.find(e => e.id === id)
        if (myCart) {
          dispach(addToCartAction(id, myCart.quantity + 1))
        } else {
          dispach(addToCartAction(id, 1))
        }
      }

    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [photo, setPhoto] = useState([]);


    const getProducts = async () => {
        await fetch(BASE_URL + "Product/getbyid/" + id)
            .then((res) => res.json())
            .then((data) => setProduct(data.message));
    };

    useEffect(() => {
        getProducts();
    }, []);

    console.log(product);


    return (
        <div id='productDetail'>
            <div className="container">
                <div className="top">
                    <Link to='/'>
                        <p className='turnBack'>Ana səhifə</p>
                    </Link>
                </div>
                <div className="bottom">
                    <div className="title">
                        <h4>{product.name}</h4>
                        <p></p>
                    </div>
                    <div className="center-box">
                        <div className="top-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="left">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                {
                                                    product.productPictures &&
                                                    product.productPictures.map(e => (
                                                        <img onClick={a => setPhoto(e)} className='sml-picture' width='100%' src={e} alt="" />
                                                    ))
                                                }
                                            </div>
                                            <div className="col-lg-10">
                                                {
                                                    product.productPictures &&
                                                    <div className="big-picture">
                                                        <img width="80%" src={photo.length === 0 ? product.productPictures[0] : photo} alt="" />
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h5>#Teglər</h5>
                                    <div className="right-box">
                                        <div className="row">
                                            <div className="col-lg-5 stock"><span>Stokda var</span> </div>
                                            <div className="col-lg-5 order"><span>Pulsuz çatdırılma</span> </div>
                                        </div>
                                        <div className="text">
                                            <p>{product.description}</p>
                                            
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <div className="whatsapp">
                                                    <span><svg width="16" height="16" viewBox="0 0 16 16" className='icons' fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.653 7.607a6.67 6.67 0 0 0-7.786-6.18c-2.787.46-5.02 2.72-5.454 5.506a6.678 6.678 0 0 0 .807 4.4l-.593 2.207c-.134.5.326.953.82.813l2.173-.6c.987.58 2.14.914 3.373.914 3.76 0 6.88-3.314 6.66-7.06zm-3.4 2.873a1.518 1.518 0 0 1-.773.733c-.2.087-.42.127-.653.127-.34 0-.707-.08-1.087-.247a6.11 6.11 0 0 1-1.147-.66A9.632 9.632 0 0 1 6.5 9.5a9.533 9.533 0 0 1-.933-1.093 5.864 5.864 0 0 1-.654-1.14c-.16-.38-.24-.747-.24-1.094 0-.226.04-.446.12-.646.08-.207.207-.394.387-.56.213-.214.447-.314.693-.314.094 0 .187.02.274.06.086.04.166.1.226.187l.774 1.093c.06.087.106.16.133.234.033.073.047.14.047.206 0 .08-.027.16-.074.24-.046.08-.106.16-.186.24l-.254.267a.171.171 0 0 0-.053.133c0 .027.007.054.013.08a.46.46 0 0 1 .027.067c.06.113.167.253.313.427.154.173.314.353.487.526.18.18.353.34.533.494.174.146.32.246.434.306.02.007.04.02.06.027a.183.183 0 0 0 .086.013c.06 0 .1-.02.14-.06l.254-.253c.086-.087.166-.147.24-.187a.46.46 0 0 1 .446-.026c.074.033.154.073.234.133l1.106.787c.087.06.147.133.187.213a.698.698 0 0 1 .053.26c-.04.113-.066.24-.12.36z" fill="#8DC63F"></path></svg>Whatsapp ilə sifariş</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="sebet" onClick={() => addToCartHadler(product.id, product.name)}>
                                                    <i class="fa-solid fa-cart-shopping" ></i>
                                                    <span>Səbətə əlavə et</span>

                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <div className="heart-icon">
                                                    <i class="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>

                        <div className="bottom-box">
                            <div className="container">
                                <h6>Texniki Parametrlər</h6>
                                <div className="parametrs">
                                    <div className="row ">
                                        <div className="col-lg-6">
                                            <div className="grey-box">
                                                <div className="d-flex justify-content-between">
                                                    <span>Marka</span>
                                                    <span>Apple</span>
                                                </div>
                                            </div>
                                            <div className="grey-box">
                                                <div className="d-flex justify-content-between">
                                                    <span>Model</span>
                                                    <span>{product.name}</span>
                                                </div>
                                            </div>
                                            <div className="grey-box">
                                                <div className="d-flex justify-content-between">
                                                    <span>Ekranın ölçüsü</span>
                                                    <span>6.1"</span>
                                                </div>
                                            </div><div className="grey-box">
                                                <div className="d-flex justify-content-between">
                                                    <span>Ekranın imkanları</span>
                                                    <span>1170 x 2532 px</span>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-lg-6">
                                            <div className="grey-box">
                                                <div className="d-flex justify-content-between">
                                                    <span>Radio</span>
                                                    <span>-</span>
                                                </div>
                                            </div><div className="grey-box">
                                                <div className="d-flex justify-content-between">
                                                    <span>Təhlükəsizlik</span>
                                                    <span>PIN, Face ID</span>
                                                </div>
                                            </div><div className="grey-box">
                                                <div className="d-flex justify-content-between">
                                                    <span>Sim-kart sayı</span>
                                                    <span>1</span>
                                                </div>
                                            </div>
                                            <div className="grey-box">
                                                <div className="d-flex justify-content-between">
                                                    <span>Yaddaş kart dəstəyi</span>
                                                    <span>-</span>
                                                </div>
                                            </div>
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

export default ProductDetail