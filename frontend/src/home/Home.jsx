import React from 'react'
import Banner from '../components/Banner'
import BestProducts from './BestProducts'
import FavProduct from './FavProduct'
import Promo from './Promo'
import OtherProducts from './OtherProducts'
import Review from './Review'

const Home = () => {
  return (
    <div>
      <Banner/> 
      <BestProducts/>
      <FavProduct/>
      <Promo/>
      <OtherProducts/>
      <Review/>
    </div>
  )
}

export default Home
