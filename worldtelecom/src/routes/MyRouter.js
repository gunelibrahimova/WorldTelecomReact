import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from '../components/Account/Account'
import Auth from '../components/Auth/Auth'
import Cart from '../components/Cart/Cart'
import Contact from '../components/Contact/Contact'
import Favories from '../components/Favories/Favories'
import NotFound from '../components/NotFound/NotFound'
import Search from '../components/Search/Search'
import Detail from '../Pages/Detail'
import FinishPages from '../Pages/FinishPages'

import Home from '../Pages/Home'


const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/account' element={<Account />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/favories' element={<Favories />} />
      <Route path='/finish' element={<FinishPages />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  )
}

export default MyRouter