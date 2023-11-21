import React from 'react'
import FavProductsImg from '../assets/Fav.jpg'
import { Link } from 'react-router-dom'

const FavProduct = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={FavProductsImg} alt='15' className='rounded md:w-9/12'/>
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-large'>Find Your  <spam className='text-blue-700'>Favorite Product</spam> Here!</h2>
        <p className='mb-10 text-lg md:w-5/6'>
        Find your favorite product amidst a tapestry of offerings that echo individuality and craftsmanship, each item promising an unparalleled experience.Explore, experience, and make your choice. Your journey to finding the perfect product starts here!Our treasure trove houses an eclectic collection designed to captivate your senses and fulfill your desires.
</p>
        {/* Stats */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className='text-3xl font-bold'>
                    800+ Products
                </h3>
                <p className='text-base'>
                    And <b className='text-blue-700'>COUNTING!</b>
                </p>
            </div>
            <div>
                <h3 className='text-3xl font-bold'>
                    5500+ Users
                </h3>
                <p className='text-base'>
                    And <b className='text-blue-700'>COUNTING!</b>
                </p>
            </div>
            <div>
                <h3 className='text-3xl font-bold'>
                    12000+ Downloads
                </h3>
                <p className='text-base'>
                    And <b className='text-blue-700'>COUNTING!</b>
                </p>
            </div>
            </div>
            <br/>
            <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
      </div>
    </div>
  )
}

export default FavProduct
