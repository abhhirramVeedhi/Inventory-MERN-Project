import React,{useState,useEffect} from 'react'
import { Table } from 'flowbite-react'
import { Link } from 'react-router-dom';

const UViewproduct = () => {
    const [allProducts, setAllProducts] =useState([]);
    useEffect(()=>{
      fetch("http://localhost:4002/view-product").then(res => res.json()).then(data =>setAllProducts(data));
    },[])

    return (
      <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Products in Stock</h2>
        <table style={{borderCollapse: 'collapse', width: '100%', border: '1px solid #ccc' }}>
          <thead style={{background: '#007bff', color: '#fff'}}>
            <tr>
              <th style={{padding: '8px', border: '1px solid #ccc'}}>No</th>
              <th style={{padding: '8px', border: '1px solid #ccc'}}>Product Name</th>
              <th style={{padding: '8px', border: '1px solid #ccc'}}>Brand</th>
              <th style={{padding: '8px', border: '1px solid #ccc'}}>Category</th>
              <th style={{padding: '8px', border: '1px solid #ccc'}}>Price</th>
              <th style={{padding: '8px', border: '1px solid #ccc'}}>Quantity</th>
              
            </tr>
          </thead>
          <tbody>
            {
              allProducts.map((product, index) => (
                <tr key={index} style={{background: index % 2 === 0 ? '#f9f9f9' : '#fff'}}>
                  <td style={{padding: '8px', border: '1px solid #ccc', textAlign: 'center'}}>{index + 1}</td>
                  <td style={{padding: '8px', border: '1px solid #ccc'}}>{product.productName}</td>
                  <td style={{padding: '8px', border: '1px solid #ccc'}}>{product.brand}</td>
                  <td style={{padding: '8px', border: '1px solid #ccc'}}>{product.category}</td>
                  <td style={{padding: '8px', border: '1px solid #ccc'}}>{product.price}</td>
                  <td style={{padding: '8px', border: '1px solid #ccc'}}>{product.quantity}</td>
                  
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }

export default UViewproduct
