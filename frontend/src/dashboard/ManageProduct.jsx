// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link component from React Router

// const ManageProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4002/view-product")
//       .then((res) => res.json())
//       .then(data => setAllProducts(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, [])

//   //delete Product
//   const handleDel = (id)=>{
//     console.log(id);
//     fetch(`http://localhost:4002/delete-product/${id}`, {
//       method:"DELETE",})
//     .then(res=> res.json())
//     .then(data => {alert("Product Deleted successfully")}
//     //  setAllProducts(data);
//     )
//   }

//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Manage Your Products</h2>
      // <table style={{borderCollapse: 'collapse', width: '100%', border: '1px solid #ccc' }}>
      //   <thead style={{background: '#007bff', color: '#fff'}}>
      //     <tr>
      //       <th style={{padding: '8px', border: '1px solid #ccc'}}>No</th>
      //       <th style={{padding: '8px', border: '1px solid #ccc'}}>Product Name</th>
      //       <th style={{padding: '8px', border: '1px solid #ccc'}}>Brand</th>
      //       <th style={{padding: '8px', border: '1px solid #ccc'}}>Category</th>
      //       <th style={{padding: '8px', border: '1px solid #ccc'}}>Price</th>
      //       <th style={{padding: '8px', border: '1px solid #ccc'}}>Actions</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {
      //       allProducts.map((product, index) => (
      //         <tr key={index} style={{background: index % 2 === 0 ? '#f9f9f9' : '#fff'}}>
      //           <td style={{padding: '8px', border: '1px solid #ccc', textAlign: 'center'}}>{index + 1}</td>
      //           <td style={{padding: '8px', border: '1px solid #ccc'}}>{product.productName}</td>
      //           <td style={{padding: '8px', border: '1px solid #ccc'}}>{product.brand}</td>
      //           <td style={{padding: '8px', border: '1px solid #ccc'}}>{product.category}</td>
      //           <td style={{padding: '8px', border: '1px solid #ccc'}}>{product.price}</td>
      //           <td style={{padding: '8px', border: '1px solid #ccc'}}>
      //             <Link to={`/admin/dashboard/edit/${product._id}`} style={{color: 'white', fontWeight:'bold', backgroundColor:'#3980ec', padding:'2px 5px 2px 5px ' , borderRadius:'7px'}}>Edit</Link>
      //            &emsp;
      //            <button onClick={() => handleDel(product._id)} style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#f16767', padding: '0 5px 0 5px', borderRadius: '7px', border: 'none', cursor: 'pointer' }}>Delete</button>
      //           </td>
      //         </tr>
      //       ))
      //     }
      //   </tbody>
      // </table>
//     </div>
//   );
// }

// export default ManageProduct;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://inventory-mern-project.vercel.app/view-product")
      .then((res) => res.json())
      .then(data => setAllProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDel = (id) => {
    fetch(`https://inventory-mern-project.vercel.app/delete-product/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        alert("Product Deleted successfully");
        // Optionally update the product list after deletion
        const updatedProducts = allProducts.filter(product => product._id !== id);
        setAllProducts(updatedProducts);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Products</h2>
      <table style={{borderCollapse: 'collapse', width: '100%', border: '1px solid #ccc' }}>
        <thead style={{background: '#007bff', color: '#fff'}}>
          <tr>
            <th style={{padding: '8px', border: '1px solid #ccc'}}>No</th>
            <th style={{padding: '8px', border: '1px solid #ccc'}}>Product Name</th>
            <th style={{padding: '8px', border: '1px solid #ccc'}}>Brand</th>
            <th style={{padding: '8px', border: '1px solid #ccc'}}>Category</th>
            <th style={{padding: '8px', border: '1px solid #ccc'}}>Price</th>
            <th style={{padding: '8px', border: '1px solid #ccc'}}>Actions</th>
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
                <td style={{padding: '8px', border: '1px solid #ccc'}}>
                  <Link to={`/admin/dashboard/edit/${product._id}`} style={{color: 'white', fontWeight:'bold', backgroundColor:'#3980ec', padding:'2px 5px 2px 5px ' , borderRadius:'7px'}}>Edit</Link>
                 &emsp;
                 <button onClick={() => handleDel(product._id)} style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#f16767', padding: '0 5px 0 5px', borderRadius: '7px', border: 'none', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ManageProduct;
