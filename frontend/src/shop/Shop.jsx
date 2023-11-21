import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';


const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4002/view-product").then(res => res.json()).then(data => setProducts(data));
  }, [])
  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center center'>Store Products</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          products.map(gadgets =>
            <Card className='max-w-sm shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered' >
              <img src={gadgets.imgURL} alt='..' className='h-96' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{gadgets.productName}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {gadgets.description}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              <span>&#8377;</span> {gadgets.price}
              </p>
              <br />

              <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Add to Cart</button>
            </Card>)
        }
      </div>
    </div>
  )
}

export default Shop


// import React, { useState, useEffect } from 'react';
// import { Card } from 'flowbite-react';

// const Shop = () => {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const query = new URLSearchParams(window.location.search).get('query');
//     setSearchQuery(query || '');
//   }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       let endpoint = 'http://localhost:4002/view-product';

//       if (searchQuery) {
//         endpoint = `http://localhost:4002/search?query=${encodeURIComponent(searchQuery)}`;
//       }

//       try {
//         const response = await fetch(endpoint);
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [searchQuery]);

//   return (
//     <div className='mt-28 px-4 lg:px24'>
//       <h2 className='text-5xl font-bold text-center center'>All Products Listed</h2>

//       <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
//         {products.map((gadget) => (
//           <Card
//             key={gadget._id}
//             className='max-w-sm shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg bordered'
//           >
//             <img src={gadget.imgURL} alt={gadget.productName} className='h-96' />
//             <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
//               <p>{gadget.productName}</p>
//             </h5>
//             <p className='font-normal text-gray-700 dark:text-gray-400'>{gadget.description}</p>
//             <br />
//             <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;
