import React from 'react'
import { useState , useEffect } from 'react';
import ProductCards from '../components/ProductCards';

const OtherProducts = () => {
    const[products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch("http://localhost:4002/view-product").then(res => res.json()).then(data => setProducts(data.slice(4,6)))
    },[])
  return (
    <div>
      <ProductCards products={products} headline="Other Products in the STORE"/>
    </div>
  )
}

export default OtherProducts
