import React, { useState, useEffect } from 'react';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

const AdminProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4002/view-product")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='mt-10 px-4 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-8'>All Products in your Store</h2>

            <div className='grid gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
                {products.map(gadgets => (
                    <Card
                        key={gadgets._id}
                        className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl'
                    >
                        <div className='aspect-w-16 aspect-h-9'>
                            <img
                                src={gadgets.imgURL}
                                alt={gadgets.productName}
                                className='object-cover object-center w-full h-full'
                            />
                        </div>
                        <div className='p-4'>
                            <h5 className='text-xl font-semibold mb-2 text-gray-900'>{gadgets.productName}</h5>
                            <p className='text-sm text-gray-700'>{gadgets.description}</p>
                            <Link to={`/admin/dashboard/single-product/${gadgets._id}`} className='mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded'>
                                View Product
                            </Link>

                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AdminProduct;
