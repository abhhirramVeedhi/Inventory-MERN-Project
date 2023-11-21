import React, { useEffect, useState } from 'react'

import ProductCards from '../components/ProductCards';

const BestProducts=()=> {
    const[products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch("https://inventory-mern-project.vercel.app/view-product").then(res => res.json()).then(data => setProducts(data.slice(0,)))
    },[])
  return (
    <div>
      <ProductCards products={products} headline="Best Products in the STORE"/>
    </div>
  )
}

export default BestProducts
