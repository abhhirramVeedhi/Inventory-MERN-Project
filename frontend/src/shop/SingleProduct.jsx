import React from 'react'
import { useLoaderData } from 'react-router-dom'

const  SingleProduct=()=> {
    const{_id , productName , imgURL , brand , description , category , price}  = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24 '>
        <img src={imgURL} alt='zz'className='h-96 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered'/>
        <h1 className='text-blue-700 text-2xl'><b>{brand}</b></h1>
        <h2 className='text-xl'>{productName}</h2>
        <h4>{category}</h4>
        <h4>{description}</h4>
        <h2><span>&#8377;</span>{price}</h2>
    </div>
  )
}

export default SingleProduct