import React from 'react'
import { Link } from 'react-router-dom'
import ProductImg from '../assets/award.webp'

const Promo = () => {
  return (
    <div className='mt-15 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>
                    2023 Best Product Sold
                </h2>
                <Link to="/shop" className=' block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
            </div>
            <div>
                <img src={ProductImg} alt='15' className='w-96'/>
            </div>
        </div>
    </div>
  )
}

export default Promo
