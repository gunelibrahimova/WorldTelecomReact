import React from 'react'
import Slider  from '../components/Slider/Slider'
import Product  from '../components/Product/Product'
import NewProducts  from '../components/NewProducts/NewProducts'
import SalesProduct  from '../components/SalesProduct/SalesProduct'
import Partners  from '../components/Partners/Partners'


const Home = () => {
  return (
    <div>
      <Slider />
      <Product />
      <NewProducts />
      <SalesProduct />
      <Partners />
    </div>
  )
}

export default Home