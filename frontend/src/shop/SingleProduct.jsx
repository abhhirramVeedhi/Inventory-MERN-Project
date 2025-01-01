// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// const  SingleProduct=()=> {
//     const{_id , productName , imgURL , brand , description , category , price}  = useLoaderData();
//   return (
//     <div className='mt-28 px-4 lg:px-24 '>
//         <img src={imgURL} alt='zz'className='h-96 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered'/>
//         <h1 className='text-blue-700 text-2xl'><b>{brand}</b></h1>
//         <h2 className='text-xl'>{productName}</h2>
//         <h4>{category}</h4>
//         <h4>{description}</h4>
//         <h2><span>&#8377;</span>{price}</h2>
//     </div>
//   )
// }

// export default SingleProduct

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://inventory-mern-project-lu4g.vercel.app/searchById/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError(err.response?.data?.error || 'An error occurred while fetching the product.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Product Details</h2>
      {product ? (
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
          <h3>{product.productName}</h3>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
          <p><strong>Description:</strong> {product.description || 'No description available.'}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default SingleProduct;
