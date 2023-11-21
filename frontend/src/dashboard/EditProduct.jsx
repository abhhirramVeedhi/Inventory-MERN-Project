import React,{useState} from 'react'
import {  useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';


const EditProduct = () => {
  const {id}= useParams();
  const {productName , brand ,  imgURL , description , price , quantity } = useLoaderData();
  const productCategory = [
    "Television (TV)",
    "Smartphone",
    "Laptop",
    "Desktop Computer",
    "Tablet",
    "Digital Camera",
    "Headphones",
    "Bluetooth Speaker",
    "Microwave Oven",
    "Refrigerator",
    "Air Conditioner",
    "Washing Machine",
    "Game Console (e.g., PlayStation, Xbox)",
    "Smartwatch",
    "Fitness Tracker",
    "E-reader (e.g., Kindle)",
    "Drone",
    "Projector",
    "GPS Device",
    "Electric Toothbrush",
    "Digital Thermometer",
    "Electric Shaver",
    "Hair Dryer",
    "Vacuum Cleaner",
    "Electric Fan",
  ];

  const [productCat, setProductCat] = useState(productCategory[0]);

  const handleChangeSelectedValue = (event) => {
    setProductCat(event.target.value);
  }

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;

    const productName = form.productName.value;
    const price = form.price.value;
    const description = form.description.value;
    const brand = form.brand.value;
    const imgURL = form.imgURL.value;
    const category = form.category.value;
    const quantity = form.quantity.value;


    const updateGadgets = {
      productName,
      price,
      description,
      brand,
      imgURL,
      category,
      quantity,
    };
    // console.log(gadgets);
    // update product details
    fetch(`http://localhost:4002/update-product/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateGadgets)
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => {
    console.log(data);
    alert("Product Updated successfully");
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    alert("Error updating product. Please try again later.");
  });
  }

  return (
    <div className='px-4 my-12' >
      <h2 className='mb-8 text-3xl font-bold'>Update the Product </h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      
        <div className='flex gap-8'>
          {/* Product Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="productName" value="productName" />
            </div>
            <TextInput id="productName" name='productName' placeholder="Product Name" defaultValue={productName} required type="text" />
          </div>

          {/* Brand */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="brand" value="Brand" />
            </div>
            <TextInput id="brand" name='brand' placeholder="Brand" required type="text" defaultValue={brand}/>
          </div>
        </div>

        {/* Catageory */}
        <div className='flex gap-8'>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Category" />
            </div>
            <Select id="inputState" name='category' className='w-full rounded' value={productCat} onChange={handleChangeSelectedValue}>
              {
                productCategory.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>
          </div>

          {/* Description */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description" />
            </div>
            <Textarea id="description" name='description' placeholder="Description" required type="text" defaultValue={description}/>
          </div>
        </div>

        <div className='flex gap-8'>

          {/* Price */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput id="price" name='price' placeholder="Price" required type="text" defaultValue={price}/>
          </div>


          {/* imgURL */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imgURL" value="imgURL" />
            </div>
            <TextInput id="imgURL" name='imgURL' placeholder="Product Image Link" required type="url" defaultValue={imgURL}/>
          </div>


          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <TextInput id="quantity" name='quantity' placeholder="Quantity" required type="text" defaultValue={quantity}/>
          </div>

        </div>

        <Button type='submit' className='mt-5 bg-blue-700' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          Update Product
        </Button>


      </form>
    </div>
  )
}

export default EditProduct

// import React, { useState, useEffect } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

// const EditProduct = () => {
//   const { id } = useParams();
//   const {
//     productName,
//     brand,
//     imgURL,
//     description,
//     price,
//     quantity: initialQuantity,
//   } = useLoaderData();

//   const productCategory = [
//     // ... your product categories
//   ];

//   const [productCat, setProductCat] = useState('');
//   const [quantity, setQuantity] = useState('');

//   const handleChangeSelectedValue = (event) => {
//     setProductCat(event.target.value);
//   };

//   const handleUpdate = async (event) => {
//     event.preventDefault();

//     const form = event.target;

//     const updatedProductName = form.productName.value;
//     const updatedPrice = form.price.value;
//     const updatedDescription = form.description.value;
//     const updatedBrand = form.brand.value;
//     const updatedImgURL = form.imgURL.value;
//     const updatedCategory = form.category.value;
//     const updatedQuantity = form.quantity.value || quantity;

//     const updatedGadgets = {
//       productName: updatedProductName,
//       price: updatedPrice,
//       description: updatedDescription,
//       brand: updatedBrand,
//       imgURL: updatedImgURL,
//       category: updatedCategory,
//       quantity: updatedQuantity,
//     };

//     try {
//       const response = await fetch(`http://localhost:4002/update-product/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(updatedGadgets)
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }

//       const data = await response.json();
//       console.log(data);
//       alert("Product Updated successfully");
//     } catch (error) {
//       console.error('Error:', error.message);
//       alert('Failed to update the product. Please try again.');
//     }
//   };

//   useEffect(() => {
//     if (typeof initialQuantity !== 'undefined') {
//       setQuantity(initialQuantity);
//     }
//   }, [initialQuantity]);

//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Update the Product </h2>
//       <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      
//         <div className='flex gap-8'>
//           {/* Product Name */}
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="productName" value="productName" />
//             </div>
//             <TextInput id="productName" name='productName' placeholder="Product Name" defaultValue={productName} required type="text" />
//           </div>

//           {/* Brand */}
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="brand" value="Brand" />
//             </div>
//             <TextInput id="brand" name='brand' placeholder="Brand" required type="text" defaultValue={brand}/>
//           </div>
//         </div>

//         {/* Category and Description */}
//         <div className='flex gap-8'>

//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="inputState" value="Category" />
//             </div>
//             <Select id="inputState" name='category' className='w-full rounded' value={productCat} onChange={handleChangeSelectedValue}>
//               {
//                 productCategory.map((option) => <option key={option} value={option}>{option}</option>)
//               }
//             </Select>
//           </div>

//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="description" value="Description" />
//             </div>
//             <Textarea id="description" name='description' placeholder="Description" required type="text" defaultValue={description}/>
//           </div>
//         </div>

//         <div className='flex gap-8'>

//           {/* Price and Image URL */}
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="price" value="Price" />
//             </div>
//             <TextInput id="price" name='price' placeholder="Price" required type="text" defaultValue={price}/>
//           </div>

//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="imgURL" value="imgURL" />
//             </div>
//             <TextInput id="imgURL" name='imgURL' placeholder="Product Image Link" required type="url" defaultValue={imgURL}/>
//           </div>

//           {/* Quantity */}
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="quantity" value="Quantity" />
//             </div>
//             <TextInput id="quantity" name='quantity' placeholder="Quantity" required type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//           </div>
//         </div>

//         <Button type='submit' className='mt-5 bg-blue-700' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           Update Product
//         </Button>

//       </form>
//     </div>
//   );
// }

// export default EditProduct;
