import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/MyContext'
import { logoutUserAction } from '../../redux/Actions/UserAction'
import '../Header/Header.scss'

const Header = () => {

  const { userInfo } = useSelector((state) => state.user)

  const { cartCount } = useContext(CartContext)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () => {
    dispatch(logoutUserAction())
    navigate("/")
  }

  const getProduct = useSelector((state) => state.products.products)


  return (
    <div id='header'>
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <Link to="/">
                <img src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2020/07/Logo.png" alt="" />
              </Link>
            </div>
            <div className="col-lg-7">
              <div className="left-list">
                <ul className='first-list'>
                  <li className='first-list-element'>BirKart əldə edin</li>
                  <li className='first-list-element'>Korporativ satışlar</li>
                  <li className='first-list-element'>Kredit ödənişi</li>
                  <li className='first-list-element'>Mağazalarımız</li>
                  <li className='first-list-element'>Vakansiya</li>
                  <li className='first-list-element number'>*2525</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-2">
              <div className="left-bottom">
                <i className="fa-solid fa-bars icon"></i>
                <p>Kateqoriyalar</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="center-bottom">
                <input placeholder='Məhsul axtar...' type="text"/>
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="right-bottom">
                <span className='company'>Kampaniyalar</span>
                <div className="icon-box">
                  <div className="hoverBox">
                    <svg className='svg-icon' width="40" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19.84 18.193c0 3.296-4.52 3.677-7.92 3.677h-.242C9.512 21.864 4 21.728 4 18.173c0-3.229 4.338-3.66 7.711-3.677h.453c2.165.005 7.676.142 7.676 3.697zm-7.92-2.197c-4.26 0-6.42.732-6.42 2.177 0 1.458 2.16 2.197 6.42 2.197s6.42-.732 6.42-2.177c0-1.458-2.16-2.197-6.42-2.197zM11.92 2a5.315 5.315 0 0 1 5.31 5.31 5.314 5.314 0 0 1-5.31 5.308h-.031a5.3 5.3 0 0 1-5.28-5.311A5.316 5.316 0 0 1 11.922 2zm0 1.428A3.887 3.887 0 0 0 8.039 7.31a3.873 3.873 0 0 0 3.854 3.881l.029.714v-.713A3.886 3.886 0 0 0 15.8 7.31a3.886 3.886 0 0 0-3.88-3.882z" fill="#fff"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M19.84 18.193c0 3.296-4.52 3.677-7.92 3.677h-.242C9.512 21.864 4 21.728 4 18.173c0-3.229 4.338-3.66 7.711-3.677h.453c2.165.005 7.676.142 7.676 3.697zm-7.92-2.197c-4.26 0-6.42.732-6.42 2.177 0 1.458 2.16 2.197 6.42 2.197s6.42-.732 6.42-2.177c0-1.458-2.16-2.197-6.42-2.197zM11.92 2a5.315 5.315 0 0 1 5.31 5.31 5.314 5.314 0 0 1-5.31 5.308h-.031a5.3 5.3 0 0 1-5.28-5.311A5.316 5.316 0 0 1 11.922 2zm0 1.428A3.887 3.887 0 0 0 8.039 7.31a3.873 3.873 0 0 0 3.854 3.881l.029.714v-.713A3.886 3.886 0 0 0 15.8 7.31a3.886 3.886 0 0 0-3.88-3.882z" fill="#fff"></path>
                    </svg>
                    <div className="hoverTextBox">

                      {
                        userInfo.length === 0 ? (
                          <>
                            <span className="text">Daha yaxşı təkliflər üçün hesabınıza giriş edin.</span>
                            <hr />
                            <div className="buttonBox">
                              <button><Link to="/auth">
                                Giriş
                              </Link>
                              </button>
                            </div><div className="buttonBoxx">
                              <button>
                                <Link to="/auth">
                                  Qeydiyyat
                                </Link>
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            <p>{userInfo.name}</p>
                            <span className="text">Siz artıq hesaba daxil olmusunuz.</span>
                            <hr />
                            <div className="buttonBox">
                              <button><Link to="/account">
                                Hesabım
                              </Link>
                              </button>
                            </div>
                            <div className="buttonBox">
                              <button onClick={() => logOut()}>Logout</button>
                            </div>
                          </>
                        )
                      }
                    </div>
                  </div>
                  <Link to="/favories" style={{cursor: "pointer"}}>
                    <svg className='svg-icon' width="40" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.235 4.04c1.626-1.029 3.786-1.313 5.652-.715 4.059 1.31 5.319 5.734 4.192 9.255-1.74 5.53-9.166 9.655-9.481 9.828a.743.743 0 0 1-.72.002c-.312-.17-7.685-4.235-9.482-9.829h-.001c-1.128-3.523.128-7.949 4.183-9.256a6.729 6.729 0 0 1 5.657.714zm-5.197.713c-3.281 1.058-4.105 4.587-3.214 7.37 1.402 4.362 6.94 7.89 8.413 8.762 1.477-.882 7.056-4.448 8.413-8.758.89-2.786.064-6.315-3.222-7.374-1.592-.51-3.45-.2-4.731.792a.75.75 0 0 1-.91.006 5.234 5.234 0 0 0-4.75-.798z" fill="#fff"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.235 4.04c1.626-1.029 3.786-1.313 5.652-.715 4.059 1.31 5.319 5.734 4.192 9.255-1.74 5.53-9.166 9.655-9.481 9.828a.743.743 0 0 1-.72.002c-.312-.17-7.685-4.235-9.482-9.829h-.001c-1.128-3.523.128-7.949 4.183-9.256a6.729 6.729 0 0 1 5.657.714zm-5.197.713c-3.281 1.058-4.105 4.587-3.214 7.37 1.402 4.362 6.94 7.89 8.413 8.762 1.477-.882 7.056-4.448 8.413-8.758.89-2.786.064-6.315-3.222-7.374-1.592-.51-3.45-.2-4.731.792a.75.75 0 0 1-.91.006 5.234 5.234 0 0 0-4.75-.798z" fill="#fff"></path>
                    </svg>
                  </Link>

                  <Link style={{ textDecoration: "none", color: "white" }} to='/cart'>
                    <svg className='svg-icon' width="40" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.058 26.602c.952 0 1.727.774 1.727 1.726s-.775 1.726-1.727 1.726a1.726 1.726 0 0 1 0-3.452zm15.04 0c.954 0 1.729.774 1.729 1.726a1.728 1.728 0 0 1-3.453 0c0-.952.773-1.726 1.725-1.726zM4.358 4.012l2.773.48c.447.08.787.45.826.903l.313 3.735h1.729l2.14.002h.505l2.362.001h.44l1.655.002H18.944l.34.001 1.27.001h.295l.834.001h.262l.966.002h.222l.816.001h.186l.518.001h.16l.578.002h.484l.108.001.381.001h.084l.223.002h.067l.226.001h.048l.123.001h.035l.089.002h.024l.06.001h.017l.038.001h.01l.027.002h.005l.017.002a2.777 2.777 0 0 1 1.841 1.093c.446.596.632 1.33.526 2.067l-1.266 8.744a3.416 3.416 0 0 1-3.364 2.918H10.633a3.415 3.415 0 0 1-3.385-3.123L6.026 6.33l-2.009-.346a1.002 1.002 0 0 1-.816-1.158c.096-.545.623-.9 1.156-.814zm4.81 7.118h-.73l.804 9.562a1.39 1.39 0 0 0 1.395 1.288h14.556c.694 0 1.288-.517 1.386-1.204l1.267-8.745a.783.783 0 0 0-.15-.584.774.774 0 0 0-.517-.308l-.068.001-.145.001h-.1l-.755.002h-2.278l-2.027-.002h-.368l-1.147-.001h-.395l-1.214-.001h-.414l-.837-.002h-.422l-1.277-.001h-.427l-.854-.001h-.426l-.847-.002h-1.661l-.405-.001-1.568-.001h-.376zm13.883 2.928a1 1 0 0 1 0 2h-3.696a1 1 0 1 1 0-2h3.696z" fill="#fff"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.058 26.602c.952 0 1.727.774 1.727 1.726s-.775 1.726-1.727 1.726a1.726 1.726 0 0 1 0-3.452zm15.04 0c.954 0 1.729.774 1.729 1.726a1.728 1.728 0 0 1-3.453 0c0-.952.773-1.726 1.725-1.726zM4.358 4.012l2.773.48c.447.08.787.45.826.903l.313 3.735h1.729l2.14.002h.505l2.362.001h.44l1.655.002H18.944l.34.001 1.27.001h.295l.834.001h.262l.966.002h.222l.816.001h.186l.518.001h.16l.578.002h.484l.108.001.381.001h.084l.223.002h.067l.226.001h.048l.123.001h.035l.089.002h.024l.06.001h.017l.038.001h.01l.027.002h.005l.017.002a2.777 2.777 0 0 1 1.841 1.093c.446.596.632 1.33.526 2.067l-1.266 8.744a3.416 3.416 0 0 1-3.364 2.918H10.633a3.415 3.415 0 0 1-3.385-3.123L6.026 6.33l-2.009-.346a1.002 1.002 0 0 1-.816-1.158c.096-.545.623-.9 1.156-.814zm4.81 7.118h-.73l.804 9.562a1.39 1.39 0 0 0 1.395 1.288h14.556c.694 0 1.288-.517 1.386-1.204l1.267-8.745a.783.783 0 0 0-.15-.584.774.774 0 0 0-.517-.308l-.068.001-.145.001h-.1l-.755.002h-2.278l-2.027-.002h-.368l-1.147-.001h-.395l-1.214-.001h-.414l-.837-.002h-.422l-1.277-.001h-.427l-.854-.001h-.426l-.847-.002h-1.661l-.405-.001-1.568-.001h-.376zm13.883 2.928a1 1 0 0 1 0 2h-3.696a1 1 0 1 1 0-2h3.696z" fill="#fff"></path>
                    </svg> <sup>{cartCount}</sup>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header