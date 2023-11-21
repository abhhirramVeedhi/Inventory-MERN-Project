import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdminSingleProduct = () => {
  const {
    productName,
    imgURL,
    brand,
    description,
    category,
    price,
  } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img
        src={imgURL}
        alt={productName}
        className='h-96 w-full object-contain shadow-2xl bg-white rounded-lg bordered'
      />
      <div className="mt-4">
        <h1 className='text-blue-700 text-2xl font-bold'>{productName}</h1>
        <h2 className='text-xl'>{brand}</h2>
        <h3 className='text-lg'>{category}</h3>
        <p className='mt-2'>{description}</p>
        <h2 className='mt-2 font-bold'><span>&#8377;</span>{price}</h2>
      </div>
    </div>
  );
};

export default AdminSingleProduct;
