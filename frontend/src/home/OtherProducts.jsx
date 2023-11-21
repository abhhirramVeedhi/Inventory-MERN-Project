import React from 'react'
import { useState , useEffect } from 'react';
import ProductCards from '../components/ProductCards';

const OtherProducts = () => {
    const[products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch("https://inventory-mern-project.vercel.app/view-product").then(res => res.json()).then(data => setProducts(data.slice(4,6)))
    },[])
  return (
    <div>
      <ProductCards products={products} headline="Other Products in the STORE"/>
    </div>
  )
}

export default OtherProducts
