import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './cart.scss'
import Swal from "sweetalert2";
import { removeAllCartAction } from "../../redux/Actions/CartAction";
import { getUserAction } from "../../redux/Actions/UserAction";
import { CheckOutAction } from "./../../redux/Actions/CheckOutAction";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispach = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [count, setCounter] = useState(0);

  const countTotal = () => {
    var price = 0;
    cartItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

  useEffect(() => {
    countTotal();
    dispach(getUserAction());
  }, [totalPrice, cartItems]);

  return (
    <div id="cart">
      <div className="container">
        <h3>Səbətim</h3>
        <div className="container">
          <div className="top">
            <table>
              <tr>
                <th>Şəkil</th>
                <th>Məhsulun adı</th>
                <th>Sayı</th>
                <th>Qiyməti</th>
                <th>Məbləğ</th>
              </tr>

              {cartItems.length > 0 ?
                cartItems.map((product) => (
                  <tr>
                    <td>
                      <img
                        width="150px"
                        src={product.img}
                        alt=""
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.quantity} ədəd</td>
                    <td>{product.price}₼</td>
                    <td>
                      {product.price * product.quantity}₼
                    </td>
                  </tr>

                )) : (
                  "Mehsul yoxdur"
                )
              }
            </table>
          </div>
          <div className="bottom">
            <div className="container">
              <div className="bottom">
                <div className="row">
                  <div className="col-lg-7">

                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                      <button className="shoppingButton">
                        Alış-verişə davam edin
                      </button></Link>

                  </div>
                  <div className="col-lg-5">
                    <h3>Ümumi hesab</h3>
                    <table>
                      <tr>
                        <td>
                          <div className="row justify-content-between align-items-center">
                            <div className="col-lg-8">Məbləğ</div>
                            <div className="col-lg-4 price"> {totalPrice}₼</div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="row justify-content-between align-items-center">
                            <div className="col-lg-8">Ümumi məbləğ</div>
                            <div className="col-lg-4 price"> {totalPrice}₼</div>
                          </div>
                        </td>
                      </tr>
                    </table>


                    {
                      cartItems.length > 0 ?
                        <Link to="/finish">
                          <button>Sifarişi rəsmiləşdir</button>
                        </Link>
                        : (
                          <Link to="/cart">
                            <button>Sifarişi rəsmiləşdir</button>
                          </Link>
                        )
                    }



                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Cart;