import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/Home'

const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      
    </Routes>
  )
}

export default MyRouter