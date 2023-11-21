import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ProductCards = ({ headline, products }) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      <div className='mt-12'>
        <Swiper 
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {
            products.map(gadgets => (
              <SwiperSlide key={gadgets._id} style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px' }}>
                <Link to={`/searchById/${gadgets._id}`}>
                  <div className='relative'>
                    <img src={gadgets.imgURL} alt="" />
                    <div className='absolute top-3 right-3 bg-black-600 hover:bg-blue-200 p-2 rounded'>
                      <FaCartShopping className='w-5 h-5' style={{ "color": '#1a56db' , "padding":"2px"  }} />
                    </div>
                  </div>
                  <br/>
                  <div>
                    <h3 style={{"color":"#1a56db" , "fontWeight":"bold"}}>{gadgets.productName}</h3>
                    <p>{gadgets.description}</p>
                  </div>
                  <div> <span>&#8377;</span>{gadgets.price}</div>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default ProductCards;



// import React, { useEffect, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';
// import { FaCartShopping } from 'react-icons/fa6';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const ProductCards = ({ headline, products }) => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current && swiperRef.current.el) {
//       const slides = swiperRef.current.el.querySelectorAll('.swiper-slide');
//       let maxHeight = 0;

//       slides.forEach((slide) => {
//         const slideHeight = slide.offsetHeight;
//         if (slideHeight > maxHeight) {
//           maxHeight = slideHeight;
//         }
//       });

//       slides.forEach((slide) => {
//         slide.style.height = `${maxHeight}px`;
//       });
//     }
//   }, [products]);

//   return (
//     <div style={{ marginTop: '16px', padding: '0 4px', maxWidth: '768px', margin: '0 auto' }}>
//       <h2 style={{ fontSize: '5rem', textAlign: 'center', fontWeight: 'bold', color: 'black', margin: '5rem 0' }}>
//         {headline}
//       </h2>
//       <div>
//         <Swiper 
//           ref={swiperRef}
//           slidesPerView={1}
//           spaceBetween={10}
//           pagination={{
//             clickable: true,
//           }}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             768: {
//               slidesPerView: 4,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 5,
//               spaceBetween: 50,
//             },
//           }}
//           modules={[Pagination]}
//           className="mySwiper w-full h-full"
//         >
//           {
//             products.map(gadgets => (
//               <SwiperSlide key={gadgets._id} style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '8px', height: '100%', display: 'flex', flexDirection: 'column' }}>
//                 <Link to={`/searchById/${gadgets._id}`} style={{ textDecoration: 'none', color: 'black' }}>
//                   <div style={{ position: 'relative', marginBottom: '1rem' }}>
//                     <img src={gadgets.imgURL} alt="" style={{ width: '100%', borderRadius: '8px' }} />
//                     <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'black', borderRadius: '50%', padding: '6px', cursor: 'pointer' }}>
//                       <FaCartShopping style={{ width: '20px', height: '20px', color: '#1a56db' }} />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 style={{ color: '#1a56db', fontWeight: 'bold', marginBottom: '0.5rem' }}>{gadgets.productName}</h3>
//                     <p style={{ marginBottom: '0.5rem' }}>{gadgets.description}</p>
//                   </div>
//                   <div style={{ color: '#1a56db', fontWeight: 'bold' }}>
//                     <span>&#8377;</span>
//                     {gadgets.price}
//                   </div>
//                 </Link>
//               </SwiperSlide>
//             ))
//           }
//         </Swiper>
//       </div>
//     </div>
//   )
// }

// export default ProductCards;
