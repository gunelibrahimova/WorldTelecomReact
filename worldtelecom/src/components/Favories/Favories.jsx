import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/MyContext';
import { addToCartAction } from '../../redux/Actions/CartAction';
import { removeFromFavories } from '../../redux/Actions/FavoriesAction';
import { getUserAction } from '../../redux/Actions/UserAction';
import "./favories.scss"

const Favories = () => {
  const {favoriesItems}  = useSelector((state) => state.favories);
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useSelector((state) => state.cart);
  const {cartCount,setCartCount} = useContext(CartContext);
  const dispach = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const countTotal = () => {
    var price = 0;
    favoriesItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

  const removeFromFavoriesHandler = (id) =>{
    dispach(removeFromFavories(id));
  }


  const addToCartHadler = (id,name) => {
    var myCart = cartItems.find(e => e.id === id)
    if (myCart) {
      dispach(addToCartAction(id, myCart.quantity + 1))
    } else {
      dispach(addToCartAction(id, 1))
    }
    setCartCount(cartCount+1);
  }

  useEffect(() => {
    countTotal();
    dispach(getUserAction());
  }, [totalPrice, favoriesItems]);

  return (
    <div id="favories">
      <div className="container">
        <h3>İstək Siyahısı</h3>
        <div className="container">
          <div className="top">
            <table>
              <tr>
                <th>Şəkil</th>
                <th>Məhsulun adı</th>
                <th>Qiyməti</th>
                <th>Hərəkət</th>
              </tr>

              {favoriesItems.length > 0
                ? favoriesItems.map((product) => (
                    <tr>
                      <td>
                        <img width="80px" src={product.img} alt="" />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price}₼</td>
                      <td>
                        <div className="d-flex">
                          <div className="icon">
                            <i class="fa fa-shopping-cart" onClick={() => addToCartHadler(product.id, product.name)}></i>
                          </div>
                          <div className="icon1" onClick={() => removeFromFavoriesHandler(product.product)}>
                            <i class="fa fa-times"></i>
                          </div>
                        </div>
                      </td>
                      
                    </tr>
                  ))
                : "İstəklər siyahısına əlavə edilmiş məhsul yoxdur."
                }
            </table>
          </div>

          <div className="bottom">
            <div className="container">
              <div className="bottom">
                <div className="row">
                  <div className="col-lg-9">
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <button className="shoppingButton">
                        Davam edin
                      </button>
                    </Link>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Favories