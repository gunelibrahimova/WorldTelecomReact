import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../components/Account/Account'
import Auth from '../components/Auth/Auth'
import Cart from '../components/Cart/Cart'
import Detail from '../Pages/Detail'
import Home from '../Pages/Home'


const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/account' element={<Account />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default MyRouter